import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";


const data = [
  { time: "00:00", actual: 1.82, forecast: null },
  { time: "02:00", actual: 1.65, forecast: null },
  { time: "04:00", actual: 1.54, forecast: null },
  { time: "06:00", actual: 1.91, forecast: null },
  { time: "08:00", actual: 2.42, forecast: null },
  { time: "10:00", actual: 2.31, forecast: null },
  { time: "12:00", actual: 2.56, forecast: null },
  { time: "14:00", actual: 2.48, forecast: null },
  { time: "16:00", actual: 2.62, forecast: null },

  { time: "18:00", actual: 2.71, forecast: 2.71 },
  { time: "20:00", actual: null, forecast: 2.84 },
  { time: "22:00", actual: null, forecast: 2.58 }
];


function EnergyChart() {

  return (

    <div className="chart-container">

      <ResponsiveContainer
        width="100%"
        height={400}
      >

        <LineChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis
            dataKey="time"
          />

          <YAxis
            label={{
              value: "kW",
              angle: -90,
              position: "insideLeft"
            }}
          />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="actual"
            name="Actual"
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="forecast"
            name="Forecast"
            strokeWidth={3}
            strokeDasharray="8 5"
            dot={false}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );
}

export default EnergyChart;