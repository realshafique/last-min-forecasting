import { motion } from "framer-motion";

function StatCard({ title, value, unit, icon }) {
  return (
    <motion.div
      className="stat-card"
      whileHover={{
        y: -5,
        scale: 1.02
      }}
      transition={{ duration: 0.2 }}
    >

      <div className="stat-top">

        <span className="stat-title">
          {title}
        </span>

        <span className="stat-icon">
          {icon}
        </span>

      </div>


      <div className="stat-value">

        {value}

        <span>
          {unit}
        </span>

      </div>

    </motion.div>
  );
}

export default StatCard;