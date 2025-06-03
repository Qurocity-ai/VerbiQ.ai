import { Link, Outlet, useLocation } from "react-router-dom";
import CompanyRegistration from "./CompanyRegistration";
import CandidateRegistration from "./CandidateRegistration";
import { motion } from "framer-motion";
import { UserIcon, OfficeBuildingIcon } from "@heroicons/react/outline";
import styles from "./DashBoardRegister.module.css";

function DashBoardRegister() {
  const location = useLocation();

  const isCompany = location.pathname.includes("/register/company");
  const isCandidate =
    location.pathname.includes("/register/candidate") ||
    location.pathname === "/register";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-28 bg-gradient-to-br from-blue-50 to-indigo-100 p-4"
    >
      <div className={styles.container}>
        <motion.h2
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.title}
        >
          Choose Your Path
        </motion.h2>

        <div className={styles.cardContainer}>
          <Link to="/register/company">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`${styles.card} ${isCompany ? styles.activeCard : ""}`}
            >
              <OfficeBuildingIcon className={styles.icon} />
              <h3 className={styles.cardTitle}>Company</h3>
              <p className={`styles.cardDescription hidden sm:flex`}>
                Register as an employer to post jobs and find talent
              </p>
            </motion.div>
          </Link>

          <Link to="/register/candidate">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`${styles.card} ${
                isCandidate ? styles.activeCard : ""
              }`}
            >
              <UserIcon className={styles.icon} />
              <h3 className={styles.cardTitle}>Candidate</h3>
              <p className={`styles.cardDescription hidden sm:flex`}>
                Register as a job seeker to find your next opportunity
              </p>
            </motion.div>
          </Link>
        </div>

        <div className={styles.outletContainer}>
          <Outlet />
        </div>
      </div>
    </motion.div>
  );
}

export default DashBoardRegister;
