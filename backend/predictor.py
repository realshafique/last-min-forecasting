import os
import joblib
import numpy as np
from tensorflow.keras.models import load_model

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MODEL_PATH = os.path.join(
    BASE_DIR,
    "models",
    "last_min_forecasting_lstm.keras"
)

SCALER_PATH = os.path.join(
    BASE_DIR,
    "models",
    "lstm_scaler.joblib"
)

CONFIG_PATH = os.path.join(
    BASE_DIR,
    "models",
    "model_config.joblib"
)

print("Loading LSTM model...")
model = load_model(MODEL_PATH)
print("LSTM model loaded successfully.")

print("Loading scaler...")
scaler = joblib.load(SCALER_PATH)
print("Scaler loaded successfully.")

print("Loading model configuration...")
config = joblib.load(CONFIG_PATH)
print("Configuration:", config)

def predict_energy(energy_values):
    values = np.array(energy_values, dtype=float).reshape(-1, 1)

    time_step = config["time_step"]

    if len(values) != time_step:
        raise ValueError(
            f"Model requires exactly {time_step} hourly energy values. "
            f"Received {len(values)} values."
        )

    scaled_values = scaler.transform(values)

    X = scaled_values.reshape(1, time_step, 1)

    prediction_scaled = model.predict(X, verbose=0)

    prediction = scaler.inverse_transform(prediction_scaled)

    return float(prediction[0][0])