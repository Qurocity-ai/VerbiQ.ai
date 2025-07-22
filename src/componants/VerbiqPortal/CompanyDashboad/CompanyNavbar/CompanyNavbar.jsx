import React, { useState, useRef, useEffect } from "react";
import styles from "./CompanyNavbar.module.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import clsx from "clsx";

const CompanyNavbar = ({ setMobileOpen, mobileOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const fullname = localStorage.getItem("fullname");
    const companyName = localStorage.getItem("companyName");
    const name =
      fullname?.trim() && fullname !== "undefined"
        ? fullname
        : companyName?.trim() && companyName !== "undefined"
        ? companyName
        : "User";
    setUserName(name);
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      await fetch("https://verbiq-backend1-1.onrender.com/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token && { Authorization: `Bearer ${token}` }),
        },
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.clear();
      window.location.href = "/candidatelogin";
    }
  };

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
        <button
          className={clsx("lg:hidden", styles.hamburgerButton)}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <GiHamburgerMenu size={24} />
        </button>
        <p>
          Welcome back, <span className={styles.username}>{userName}</span>{" "}
          <span className={styles.emoji}>☀️</span>
        </p>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.notification}>
          <img
            src="/assets/icon.png"
            alt="Notification"
            className={styles.notificationIcon}
          />
        </div>
        <div className={styles.profile} ref={dropdownRef}>
          <img
            src="/assets/dummy.png.jpg"
            alt="Profile"
            className={styles.profileImage}
          />
          <div
            className={styles.dropdownIcon}
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
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

export default CompanyNavbar;