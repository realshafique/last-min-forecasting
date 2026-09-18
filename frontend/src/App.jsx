import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import StatCard from "./components/StatCard";
import EnergyChart from "./components/EnergyChart";
import ForecastCard from "./components/ForecastCard";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main className="dashboard">

        {/* Hero Section */}
        <motion.section
          className="hero"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="eyebrow">AI ENERGY FORECASTING</p>

            <h1>
              Last Min
              <span> Forecasting</span>
            </h1>

            <p className="hero-description">
              Predicting near-future household energy consumption
              using an LSTM deep learning model.
            </p>
          </div>

          <div className="status">
            <span className="status-dot"></span>
            Model Online
          </div>
        </motion.section>


        {/* Statistics */}
        <section className="stats-grid">

          <StatCard
            title="Current Demand"
            value="2.41"
            unit="kW"
            icon="⚡"
          />

          <StatCard
            title="Next Hour"
            value="2.67"
            unit="kW"
            icon="🔮"
          />

          <StatCard
            title="Forecast Horizon"
            value="1"
            unit="Hour"
            icon="⏱️"
          />

          <StatCard
            title="Model"
            value="LSTM"
            unit=""
            icon="🧠"
          />

        </section>


        {/* Chart */}
        <motion.section
          className="chart-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >

          <div className="section-header">

            <div>
              <p className="section-label">
                ENERGY CONSUMPTION
              </p>

              <h2>
                Actual vs Forecast
              </h2>
            </div>

            <select>
              <option>Last 24 Hours</option>
              <option>Last 48 Hours</option>
              <option>Last 7 Days</option>
            </select>

          </div>

          <EnergyChart />

        </motion.section>


        {/* Forecast */}
        <section className="bottom-grid">

          <ForecastCard />

          <motion.div
            className="info-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <p className="section-label">
              MODEL INFORMATION
            </p>

            <h2>LSTM Forecasting Engine</h2>

            <div className="model-info">

              <div>
                <span>Input Window</span>
                <strong>24 Hours</strong>
              </div>

              <div>
                <span>Prediction</span>
                <strong>Next Hour</strong>
              </div>

              <div>
                <span>Frequency</span>
                <strong>Hourly</strong>
              </div>

              <div>
                <span>Target</span>
                <strong>Active Power</strong>
              </div>

            </div>

          </motion.div>

        </section>

      </main>

    </div>
  );
}

export default App;