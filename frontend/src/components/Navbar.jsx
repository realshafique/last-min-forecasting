import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      <div className="logo">
        <div className="logo-icon">⚡</div>

        <div>
          <h3>Last Min</h3>
          <span>Forecasting</span>
        </div>
      </div>


      <div className="nav-links">

        <a href="#dashboard">Dashboard</a>

        <a href="#forecast">Forecast</a>

        <a href="#model">Model</a>

      </div>


      <button className="refresh-btn">
        ↻ Refresh
      </button>

    </motion.nav>
  );
}

export default Navbar;