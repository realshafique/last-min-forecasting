import { motion } from "framer-motion";

function ForecastCard() {

  return (

    <motion.div
      className="forecast-card"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >

      <div className="forecast-header">

        <div>

          <p className="section-label">
            NEXT HOUR
          </p>

          <h2>Energy Forecast</h2>

        </div>

        <div className="forecast-icon">
          ⚡
        </div>

      </div>


      <div className="forecast-value">

        2.67

        <span>kW</span>

      </div>


      <div className="forecast-change">

        ↑ 8.4%

        <span>
          expected increase
        </span>

      </div>


      <div className="confidence">

        <div className="confidence-header">

          <span>Model Confidence</span>

          <strong>87%</strong>

        </div>

        <div className="progress">

          <div
            className="progress-bar"
            style={{ width: "87%" }}
          />

        </div>

      </div>

    </motion.div>

  );
}

export default ForecastCard;