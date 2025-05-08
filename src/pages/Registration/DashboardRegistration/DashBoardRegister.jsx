import { Link, Outlet, useLocation } from "react-router-dom";
import CompanyRegistration from "./CompanyRegistration";
import CandidateRegistration from "./CandidateRegistration";
import styles from "./DashBoardRegister.module.css";

function DashBoardRegister() {
  const location = useLocation();

  const isCompany = location.pathname.includes("/register/company");
  const isCandidate =
    location.pathname.includes("/register/candidate") ||
    location.pathname === "/register";

  return (
    <div className={styles.main}>
      <h2 style={{marginBottom:"10px"}}>Register as:</h2>
      <div className={styles.buttonContainer}>
        <Link to="/register/company">
          <button className={`${styles.toggleButton} ${isCompany ? styles.active : ""}`}>Company</button>
        </Link>
        <Link to="/register/candidate">
          <button className={`${styles.toggleButton} ${isCandidate ? styles.active : ""}`}>Candidate</button>
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default DashBoardRegister;
