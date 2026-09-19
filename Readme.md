# ⚡ Last Min Forecasting

### AI-Powered Short-Term Electricity Consumption Forecasting

[![Live Demo](https://img.shields.io/badge/Live-Demo-black?style=for-the-badge)](https://last-min-forecasting.vercel.app/)
[![Backend API](https://img.shields.io/badge/API-Render-blue?style=for-the-badge)](https://last-min-forecasting-1.onrender.com/)

An end-to-end AI application that uses an LSTM deep learning model to forecast the next hour's electricity consumption from the previous 24 hours of energy usage.

**🚀 Live Demo:**  
https://last-min-forecasting.vercel.app/

## 🖥️ Project Preview

The application allows users to enter 24 hourly electricity consumption values and receive a prediction for the next hour.

### Workflow

User Input → React Frontend → FastAPI → Scaler → LSTM → Prediction → React Dashboard

## 🧠 Model

The forecasting model uses an LSTM neural network trained on the UCI Individual Household Electric Power Consumption dataset.

### Input
Previous 24 hourly electricity consumption values.

### Output
Predicted electricity consumption for the next hour.

### Architecture

24-hour sequence
       ↓
LSTM (64)
       ↓
Dropout
       ↓
LSTM (64)
       ↓
Dropout
       ↓
Dense (32, ReLU)
       ↓
Dense (1)
       ↓
Next-hour prediction

## 🛠️ Tech Stack

### Machine Learning
- Python
- Pandas
- NumPy
- Scikit-learn
- TensorFlow
- Keras
- LSTM

### Backend
- FastAPI
- Uvicorn
- Pydantic

### Frontend
- React
- Vite
- Recharts
- CSS

### Deployment
- Vercel — Frontend
- Render — Backend
- GitHub — Version Control

## ☁️ Deployment

The project is deployed as two separate services:

### Frontend
React + Vite → Vercel

### Backend
FastAPI + TensorFlow → Render

The frontend communicates with the FastAPI backend through the `/predict` endpoint.

## ⚠️ Current Limitations

- The model was trained using data from a single household.
- The current version requires manual entry of 24 hourly values.
- Weather and calendar features are not currently included.
- The system is designed as a short-term forecasting prototype.
- Smart meter/IoT integration is not currently implemented.

### 🚀 Installation & Setup

Follow these steps to run Last Min Forecasting locally.

Prerequisites

Make sure you have installed:

- Python 3.10+
- Git
- pip
### 1. Clone the Repository

```bash
git clone https://github.com/realshafique/last-min-forecasting.git
cd last-min-forecasting
```

### 2. Create a Virtual Environment

python -m venv venv

Activate it:

Windows:

venv\Scripts\activate

macOS/Linux:

source venv/bin/activate

### 3. Install Dependencies

pip install -r requirements.txt

### 4. Prepare the Dataset

Place the required dataset in the project's data directory:

data/
└── energy_consumption.csv

Make sure the dataset follows the format expected by the forecasting pipeline.

#### 5. Run the Model

If the project contains a training script:

python train.py

This will train the LSTM model using the available energy-consumption data.

## 6. Start the Backend

If FastAPI is used:

uvicorn main:app --reload

The API will be available at:

http://127.0.0.1:8000

API documentation:

http://127.0.0.1:8000/docs

## 7. Start the Frontend

If Streamlit is used:

streamlit run app.py

The forecasting dashboard will open in your browser.

📁 Project Structure

Last-Min-Forecasting/
│
├── data/
├── models/
├── notebooks/
├── backend/
├── frontend/
├── train.py
├── requirements.txt
├── .gitignore
└── README.md

🧠 Model

The project uses an LSTM (Long Short-Term Memory) neural network for time-series energy consumption forecasting.

The general workflow is:

Energy Data
     ↓
Data Preprocessing
     ↓
Time-Series Sequences
     ↓
LSTM Model
     ↓
Prediction
     ↓
Forecasting Dashboard/API

🛠️ Tech Stack

- Python
- TensorFlow / Keras
- LSTM
- Pandas
- NumPy
- FastAPI
- Streamlit
- Matplotlib

