import { useState } from "react";
import Navbar from "./components/Navbar";
import ForecastCard from "./components/ForecastCard";
import EnergyChart from "./components/EnergyChart";
import "./index.css";

function App() {
  const [energyValues, setEnergyValues] = useState(
    Array(24).fill("")
  );

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (index, value) => {
    const updatedValues = [...energyValues];

    updatedValues[index] = value;

    setEnergyValues(updatedValues);

    setPrediction(null);
    setError("");
  };

  const handlePredict = async () => {
    setError("");
    setPrediction(null);

    if (energyValues.some((value) => value === "")) {
      setError(
        "Please enter all 24 hourly energy values."
      );

      return;
    }

    const values = energyValues.map(Number);

    if (
      values.some(
        (value) =>
          isNaN(value) || value < 0
      )
    ) {
      setError(
        "Please enter valid positive energy values."
      );

      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://last-min-forecasting-1.onrender.com/predict",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            energy_values: values,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail ||
            "Prediction failed."
        );
      }

      setPrediction(
        data.predicted_energy
      );

    } catch (err) {
      setError(
        err.message ||
          "Unable to connect to backend."
      );

    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setEnergyValues(
      Array(24).fill("")
    );

    setPrediction(null);
    setError("");
  };

  return (
    <div className="app">

      <Navbar />

      <main className="dashboard">

        {/* HERO */}

        <section className="hero">

          <div className="badge">
            AI POWERED ENERGY FORECASTING
          </div>

          <h1>
            Last Min <span>Forecasting</span>
          </h1>

          <p>
            Predict your next hour's electricity
            consumption using an LSTM
            deep learning model.
          </p>

        </section>


        {/* INPUT */}

        <section className="input-card">

          <div className="section-title">

            <div>

              <h2>
                Energy Consumption
              </h2>

              <p>
                Enter your electricity
                consumption for the previous
                24 hours in kW.
              </p>

            </div>

            <span className="hour-badge">
              24 Hours
            </span>

          </div>


          <div className="input-grid">

            {energyValues.map(
              (value, index) => (

                <div
                  className="input-wrapper"
                  key={index}
                >

                  <label>
                    Hour {index + 1}
                  </label>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    value={value}
                    onChange={(e) =>
                      handleInputChange(
                        index,
                        e.target.value
                      )
                    }
                  />

                </div>

              )
            )}

          </div>


          {error && (
            <div className="error">
              ⚠️ {error}
            </div>
          )}


          <div className="actions">

            <button
              className="predict-button"
              onClick={handlePredict}
              disabled={loading}
            >
              {loading
                ? "Predicting..."
                : "⚡ Predict Next Hour"}
            </button>


            <button
              className="clear-button"
              onClick={handleClear}
              disabled={loading}
            >
              Clear
            </button>

          </div>

        </section>


        {/* CHART */}

        <section className="chart-section">

          <EnergyChart
            values={energyValues.filter(
              (value) => value !== ""
            )}
            prediction={prediction}
          />

        </section>


        {/* RESULT */}

        {prediction !== null && (

          <section className="result-section">

            <div className="result-heading">

              <p>
                FORECAST RESULT
              </p>

              <h2>
                Next Hour Prediction
              </h2>

            </div>


            <ForecastCard
              prediction={prediction}
            />


            <div className="prediction-details">

              <div>
                <span>
                  MODEL
                </span>

                <strong>
                  LSTM
                </strong>
              </div>


              <div>
                <span>
                  INPUT WINDOW
                </span>

                <strong>
                  24 Hours
                </strong>
              </div>


              <div>
                <span>
                  FORECAST
                </span>

                <strong>
                  1 Hour
                </strong>
              </div>

            </div>

          </section>

        )}


        {/* HOW IT WORKS */}

        <section className="how-it-works">

          <h2>
            How It Works
          </h2>


          <div className="steps">

            <div className="step-card">

              <div className="step-number">
                01
              </div>

              <h3>
                Enter Data
              </h3>

              <p>
                Provide the previous 24
                hours of electricity
                consumption.
              </p>

            </div>


            <div className="step-card">

              <div className="step-number">
                02
              </div>

              <h3>
                AI Analysis
              </h3>

              <p>
                The LSTM model analyzes
                the energy consumption
                pattern.
              </p>

            </div>


            <div className="step-card">

              <div className="step-number">
                03
              </div>

              <h3>
                Get Forecast
              </h3>

              <p>
                Receive the predicted
                electricity consumption
                for the next hour.
              </p>

            </div>

          </div>

        </section>


        {/* FOOTER */}

        <footer className="footer">

          Made with ❤️ by
          <strong>
            {" "}Shafique2606
          </strong>

        </footer>

      </main>

    </div>
  );
}

export default App;