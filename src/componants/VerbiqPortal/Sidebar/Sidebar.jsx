import styles from "./Sidebar.module.css";
import logo from "/assets/virbiqlogo.png";
import userGroup from "/assets/user-group.png";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import clsx from "clsx";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ mobileOpen, setMobileOpen, isSidebarOpen }) => {
  const [employmentOpen, setEmploymentOpen] = useState(true);
  const [experienceOpen, setExperienceOpen] = useState(true);
  const [languageOpen, setLanguageOpen] = useState(true);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navigate = useNavigate();

  const toggle = (setter) => setter((prev) => !prev);

  const navLinkClass = ({ isActive }) =>
    clsx(styles.navLink, {
      [styles.activeNavLink]: isActive,
      [styles.inactiveNavLink]: !isActive,
    });

  return (
    <>
      {/* Sidebar */}
      <div
        className={clsx(styles.sidebar, {
          [styles.sidebarExpanded]: isSidebarOpen,
          [styles.sidebarCollapsed]: !isSidebarOpen,
          [styles.sidebarHiddenMobile]: !mobileOpen,
          [styles.sidebarVisibleMobile]: mobileOpen,
        })}
      >
        {/* Logo */}
        {isSidebarOpen && (
          <div className={styles.logoContainer}>
            <img src={logo} alt="VerbiQ Logo" style={{ height: "32px" }} />
          </div>
        )}

        {/* Section: Type of Employment */}
        <div className="pt-[10px]">
          <Link
            to="/dashboard/typeofemployement"
            onClick={() => setMobileOpen(false)}
          >
            <button
              onClick={() => toggle(setEmploymentOpen)}
              className={clsx(styles.navButton, {
                [styles.navButtonExpanded]: isSidebarOpen,
                [styles.navButtonCollapsed]: !isSidebarOpen,
              })}
            >
              <img
                src={userGroup}
                alt="Group"
                style={{ width: 16, height: 16, marginRight: 8 }}
              />
              {isSidebarOpen && (
                <span style={{ fontSize: "14px" }}>Type of employment</span>
              )}
              {isSidebarOpen &&
                (employmentOpen ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                ))}
            </button>
          </Link>
          {employmentOpen && isSidebarOpen && (
            <div className={styles.navLinks}>
              <NavLink
                to="/dashboard/freelancer"
                className={navLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                <li>Freelancer</li>
              </NavLink>
              <NavLink
                to="/dashboard/contractual"
                className={navLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                <li>Contractual</li>
              </NavLink>
            </div>
          )}
        </div>

        {/* Section: Experience Level */}
        <div>
          <Link
            to="/dashboard/experiencelevel"
            onClick={() => setMobileOpen(false)}
          >
            <button
              onClick={() => toggle(setExperienceOpen)}
              className={clsx(styles.navButton, {
                [styles.navButtonExpanded]: isSidebarOpen,
                [styles.navButtonCollapsed]: !isSidebarOpen,
              })}
            >
              <img
                src={userGroup}
                alt="Group"
                style={{ width: 16, height: 16, marginRight: 8 }}
              />
              {isSidebarOpen && (
                <span style={{ fontSize: "14px" }}>Experience level</span>
              )}
              {isSidebarOpen &&
                (experienceOpen ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                ))}
            </button>
          </Link>
          {experienceOpen && isSidebarOpen && (
            <div className={styles.navLinks}>
              <NavLink
                to="/dashboard/entrylevel"
                className={navLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                <li>Entry Level</li>
              </NavLink>
              <NavLink
                to="/dashboard/intermediate"
                className={navLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                <li>Intermediate</li>
              </NavLink>
              <NavLink
                to="/dashboard/expert"
                className={navLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                <li>Expert</li>
              </NavLink>
            </div>
          )}
        </div>

        {/* Section: Language */}
        <div>
          <Link to="/candidatedashboard/language" onClick={() => setMobileOpen(false)}>
            <button
              onClick={() => toggle(setLanguageOpen)}
              className={clsx(styles.navButton, {
                [styles.navButtonExpanded]: isSidebarOpen,
                [styles.navButtonCollapsed]: !isSidebarOpen,
              })}
            >
              <img
                src={userGroup}
                alt="Group"
                style={{ width: 16, height: 16, marginRight: 8 }}
              />
              {isSidebarOpen && (
                <span style={{ fontSize: "14px" }}>Language</span>
              )}
              {isSidebarOpen &&
                (languageOpen ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                ))}
            </button>
          </Link>
          {languageOpen && isSidebarOpen && (
            <div className={styles.navLinks}>
              <NavLink
                to="/dashboard/french"
                className={navLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                <li>French</li>
              </NavLink>
              <NavLink
                to="/dashboard/german"
                className={navLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                <li>German</li>
              </NavLink>
              <NavLink
                to="/dashboard/czech"
                className={navLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                <li>Czech</li>
              </NavLink>
              <NavLink
                to="/dashboard/spanish"
                className={navLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                <li>Spanish</li>
              </NavLink>
              <NavLink
                to="/dashboard/italian"
                className={navLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                <li>Italian</li>
              </NavLink>
              <NavLink
                to="/dashboard/mandarin"
                className={navLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                <li>Mandarin</li>
              </NavLink>
              <NavLink
                to="/dashboard/korean"
                className={navLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                <li>Korean</li>
              </NavLink>
              <NavLink
                to="/dashboard/japanese"
                className={navLinkClass}
                onClick={() => setMobileOpen(false)}
              >
                <li>Japanese</li>
              </NavLink>
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => navigate("/JobPostForm")}
            className={clsx(styles.navButton, {
              [styles.navButtonExpanded]: isSidebarOpen,
              [styles.navButtonCollapsed]: !isSidebarOpen,
            })}
          >
            <span
              style={{ fontSize: "14px", textAlign: "center", width: "100%" }}
            >
              Post Jobs
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
