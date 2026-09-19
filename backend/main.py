from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from backend.predictor import predict_energy


app = FastAPI(
    title="Last Min Forecasting API",
    description="LSTM-based energy consumption forecasting API",
    version="1.0.0"
)


# =========================
# CORS CONFIGURATION
# =========================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


# =========================
# REQUEST MODEL
# =========================

class PredictionRequest(BaseModel):
    energy_values: list[float]


# =========================
# ROOT ENDPOINT
# =========================

@app.get("/")
def root():
    return {
        "message": "Last Min Forecasting API is running",
        "model": "LSTM",
        "forecast": "Next Hour"
    }


# =========================
# PREDICTION ENDPOINT
# =========================

@app.post("/predict")
def predict(request: PredictionRequest):

    try:
        prediction = predict_energy(
            request.energy_values
        )

        return {
            "predicted_energy": prediction,
            "unit": "kW",
            "forecast_horizon": "1 hour"
        }

    except ValueError as error:
        raise HTTPException(
            status_code=400,
            detail=str(error)
        )

    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error)
        )