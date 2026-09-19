import os
import pandas as pd

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DATA_PATH = os.path.join(
    BASE_DIR,
    "data",
    "raw",
    "energy_features.csv"
)


def get_latest_energy_values(time_step=24):

    df = pd.read_csv(DATA_PATH)

    df["datetime"] = pd.to_datetime(
        df["Date"] + " " + df["Time"],
        dayfirst=True
    )

    df["Global_active_power"] = pd.to_numeric(
        df["Global_active_power"],
        errors="coerce"
    )

    df = df[
        ["datetime", "Global_active_power"]
    ]

    df = df.dropna()

    df = df.set_index("datetime")

    hourly_data = (
        df["Global_active_power"]
        .resample("h")
        .mean()
        .dropna()
    )

    latest_values = hourly_data.tail(time_step)

    if len(latest_values) < time_step:
        raise ValueError(
            f"Required {time_step} hourly values, "
            f"but only {len(latest_values)} are available."
        )

    return latest_values.tolist()