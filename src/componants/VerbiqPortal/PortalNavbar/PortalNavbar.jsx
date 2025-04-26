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
import { GiHamburgerMenu } from "react-icons/gi";  // Import the hamburger menu icon
import clsx from "clsx";
const PortalNavbar = ({ setMobileOpen, mobileOpen }) => {
  return (
    <nav className={styles.navbar}>     
       <div className={styles.leftSection}>
                {/* Hamburger Button for Mobile View */}
        <button
          className={clsx("lg:hidden", styles.hamburgerButton)}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <GiHamburgerMenu size={24} />
        </button>
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

