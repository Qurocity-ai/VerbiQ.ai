/*import React from 'react'

function PortalNavbar() {
  return (
    <div >Navbar</div>
  )
}

export default PortalNavbar;*/


import React from "react";
import styles from "./PortalNavbar.module.css";
//import { FaBell } from "react-icons/fa"; 

const PortalNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <p>Welcome back, <span className={styles.username}>Aditya</span> <span className={styles.emoji}>☀️</span></p>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.notification}>
        <img src="/assets/icon.png" alt="Notification" className={styles.notificationIcon} />
          {/*<span className={styles.notificationDot}></span>*/}
        </div>
        <div className={styles.profile}>
          <img
            src="/assets/dummy.png.jpg"
            alt="Profile"
            className={styles.profileImage}
          />
          <div className={styles.dropdownIcon}>▾</div>
        </div>
      </div>
    </nav>
  );
};

export default PortalNavbar;

