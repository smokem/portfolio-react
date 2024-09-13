import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Zied Dev
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/zied.cherif.319/" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/zied_cherif_/" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/ziedcherif/" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
