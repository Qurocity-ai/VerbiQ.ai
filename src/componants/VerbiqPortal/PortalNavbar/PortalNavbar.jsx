
import React, { useState, useRef, useEffect } from "react";
import styles from "./PortalNavbar.module.css";
//import { FaBell } from "react-icons/fa"; 
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";  // Import the hamburger menu icon
import clsx from "clsx";
const PortalNavbar = ({ setMobileOpen, mobileOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const fullname = localStorage.getItem("fullname");
    const companyName = localStorage.getItem("companyName");

    console.log("fullname:", fullname);
    console.log("companyName:", companyName);

    const name =
      fullname?.trim() && fullname !== "undefined"
        ? fullname
        : companyName?.trim() && companyName !== "undefined"
        ? companyName
        : "User";

    setUserName(name);
  }, []);

  const handleLogout = () => {
    // Clear any tokens or session storage
    localStorage.clear(); // or sessionStorage.clear();
    // Redirect to login page
    window.location.href = "/candidatelogin";
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
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
        <p>Welcome back, <span className={styles.username}>{userName}</span> <span className={styles.emoji}>☀️</span></p>
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
          {/* <div className={styles.dropdownIcon}   onClick={() => setDropdownOpen((prev) => !prev)}>▾</div> */}
            <div className={styles.dropdownIcon} onClick={() => setDropdownOpen((prev) => !prev)}>
                 {dropdownOpen ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
            </div>
           {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                <a href="/edit-profile">Edit Profile</a>
                <a href="/applied-jobs">View Job Apply</a>
                <a onClick={handleLogout}>Logout</a>
              </div>
           )}
        </div>
      </div>
    </nav>
  );
};

export default PortalNavbar;

