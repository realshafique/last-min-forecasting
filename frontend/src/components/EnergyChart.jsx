import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function EnergyChart({ values, prediction }) {
  const data = values.map((value, index) => ({
    hour: `H${index + 1}`,
    energy: Number(value),
  }));

  if (prediction !== null) {
    data.push({
      hour: "Next",
      energy: Number(prediction),
      predicted: true,
    });
  }

  return (
    <div className="chart-card">
      <div className="chart-header">
        <div>
          <h2>Energy Consumption</h2>
          <p>
            Previous 24 hours and predicted next hour
          </p>
        </div>

        <div className="chart-legend">
          <span>
            <i className="actual-dot"></i>
            Actual
          </span>

          <span>
            <i className="prediction-dot"></i>
            Prediction
          </span>
        </div>
      </div>

      <div className="chart">
        {values.length === 0 ? (
          <div className="empty-chart">
            Enter your 24 hourly values to see the graph.
          </div>
        ) : (
          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <LineChart
              data={data}
              margin={{
                top: 10,
                right: 20,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#242424"
              />

              <XAxis
                dataKey="hour"
                stroke="#666"
                tick={{
                  fill: "#777",
                  fontSize: 11,
                }}
              />

              <YAxis
                stroke="#666"
                tick={{
                  fill: "#777",
                  fontSize: 11,
                }}
                label={{
                  value: "kW",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#777",
                }}
              />

              <Tooltip
                contentStyle={{
                  background: "#111",
                  border: "1px solid #333",
                  borderRadius: "10px",
                  color: "#fff",
                }}
                formatter={(value) => [
                  `${Number(value).toFixed(2)} kW`,
                  "Energy",
                ]}
              />

              <Line
                type="monotone"
                dataKey="energy"
                stroke="#ffffff"
                strokeWidth={3}
                dot={(props) => {
                  const {
                    cx,
                    cy,
                    payload,
                  } = props;

                  if (payload.predicted) {
                    return (
                      <circle
                        cx={cx}
                        cy={cy}
                        r={6}
                        fill="#ffffff"
                        stroke="#888"
                        strokeWidth={3}
                      />
                    );
                  }

                  return (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={3}
                      fill="#ffffff"
                    />
                  );
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}

export default EnergyChart;