function ForecastCard({ prediction }) {
  return (
    <div className="forecast-card">
      <p>Predicted Electricity Consumption</p>

      <h2>
        {prediction.toFixed(2)} kW
      </h2>

      <span>
        Predicted by LSTM for the next hour
      </span>
    </div>
  );
}

export default ForecastCard;