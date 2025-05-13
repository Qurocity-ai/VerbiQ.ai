
// import styles from './CompanySidebar.module.css';
// import logo from '/assets/virbiqlogo.png';
// import userGroup from '/assets/user-group.png';

// import { useState } from "react";
// import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import clsx from "clsx";
// import { NavLink, Link } from "react-router-dom";

// const CompanySidebar = ({ mobileOpen, setMobileOpen, isSidebarOpen }) => {
//   const [employmentOpen, setEmploymentOpen] = useState(true);
//   const [experienceOpen, setExperienceOpen] = useState(true);
//   const [languageOpen, setLanguageOpen] = useState(true);
//   // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggle = (setter) => setter(prev => !prev);

//   const navLinkClass = ({ isActive }) =>
//     clsx(styles.navLink, {
//       [styles.activeNavLink]: isActive,
//       [styles.inactiveNavLink]: !isActive,
//     });

//   return (
// <>
//       {/* Sidebar */}
//       <div
//       className={clsx(
//         styles.sidebar,
//         {
//           [styles.sidebarExpanded]: isSidebarOpen,
//           [styles.sidebarCollapsed]: !isSidebarOpen,
//           [styles.sidebarHiddenMobile]: !mobileOpen,
//           [styles.sidebarVisibleMobile]: mobileOpen,
//         }
//       )}
//       >
//         {/* Logo */}
//         {isSidebarOpen && (
//           <div className={styles.logoContainer}>
//             <img src={logo} alt="VerbiQ Logo" style={{ height: "32px" }} />
//           </div>
//         )}

//         {/* Section: Type of Employment */}
//         <div className='pt-[10px]'>
//           <Link to="/companydashboard/myproject" onClick={() => setMobileOpen(false)}>
//             <button
//               onClick={() => toggle(setEmploymentOpen)}
//               className={clsx(styles.navButton, {
//                 [styles.navButtonExpanded]: isSidebarOpen,
//                 [styles.navButtonCollapsed]: !isSidebarOpen,
//               })}
//             >
//               <img src={userGroup} alt="Group" style={{ width: 16, height: 16, marginRight: 8 }} />
//               {isSidebarOpen && <span style={{ fontSize: "14px" }}>My Projects</span>}
//               {isSidebarOpen && (employmentOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
//             </button>
//           </Link>
//           {employmentOpen && isSidebarOpen && (
//             <div className={styles.navLinks}>
            
//               <NavLink to="/companydashboard/currentproject" className={navLinkClass} onClick={() => setMobileOpen(false)}><li>Current Projects</li></NavLink>
//               <NavLink to="/companydashboard/completedproject" className={navLinkClass} onClick={() => setMobileOpen(false)}><li>Completed Projects</li></NavLink>
             
//             </div>
//           )}
//         </div>

//         {/* Section: Clients */}
//         <div>
//           <Link to="/companydashboard/client" onClick={() => setMobileOpen(false)}>
//             <button
//               onClick={() => toggle(setExperienceOpen)}
//               className={clsx(styles.navButton, {
//                 [styles.navButtonExpanded]: isSidebarOpen,
//                 [styles.navButtonCollapsed]: !isSidebarOpen,
//               })}
//             >
//               <img src={userGroup} alt="Group" style={{ width: 16, height: 16, marginRight: 8 }} />
//               {isSidebarOpen && <span style={{ fontSize: "14px" }}>Clients</span>}
//               {isSidebarOpen && (experienceOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
//             </button>
//           </Link>
//           {experienceOpen && isSidebarOpen && (
//             <div className={styles.navLinks}>
//                <NavLink to="/companydashboard/teleperformance" className={navLinkClass}onClick={() => setMobileOpen(false)}><li>Teleperformance</li></NavLink>
//               <NavLink to="/companydashboard/inndodata" className={navLinkClass} onClick={() => setMobileOpen(false)}><li>Innodata</li></NavLink>
//               <NavLink to="/companydashboard/soft2bet" className={navLinkClass} onClick={() => setMobileOpen(false)}><li>Soft2Bet</li></NavLink>
              
           
//             </div>
//           )}
//         </div>

       
//       </div>
// </>
// );
// };

// export default CompanySidebar;
import styles from './CompanySidebar.module.css';
import logo from '/assets/virbiqlogo.png';
import userGroup from '/assets/user-group.png';

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import clsx from "clsx";
import { NavLink, Link } from "react-router-dom";

const CompanySidebar = ({ isSidebarOpen }) => {
  const [employmentOpen, setEmploymentOpen] = useState(true);
  const [experienceOpen, setExperienceOpen] = useState(true);

  const toggle = (setter) => setter(prev => !prev);

  const navLinkClass = ({ isActive }) =>
    clsx(styles.navLink, {
      [styles.activeNavLink]: isActive,
      [styles.inactiveNavLink]: !isActive,
    });

  return (
    <div className={clsx(styles.sidebar, {
      [styles.sidebarExpanded]: isSidebarOpen,
      [styles.sidebarCollapsed]: !isSidebarOpen,
    })}>
      {/* Logo */}
      {isSidebarOpen && (
        <div className={styles.logoContainer}>
          <img src={logo} alt="VerbiQ Logo" style={{ height: "32px" }} />
        </div>
      )}

      {/* My Projects */}
      <div className='pt-[10px]'>
         <Link to="/companydashboard/myproject">
        <button
          onClick={() => toggle(setEmploymentOpen)}
          className={clsx(styles.navButton, {
            [styles.navButtonExpanded]: isSidebarOpen,
            [styles.navButtonCollapsed]: !isSidebarOpen,
          })}
        >
          <img src={userGroup} alt="Group" style={{ width: 16, height: 16, marginRight: 8 }} />
          {isSidebarOpen && <span style={{ fontSize: "14px" }}>My Projects</span>}
          {isSidebarOpen && (employmentOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
        </button>
         </Link>
        {employmentOpen && isSidebarOpen && (
          <div className={styles.navLinks}>
            <NavLink to="/companydashboard/currentproject" className={navLinkClass}><li>Current Projects</li></NavLink>
            <NavLink to="/companydashboard/completedproject" className={navLinkClass}><li>Completed Projects</li></NavLink>
          </div>
        )}
      </div>

      {/* Clients */}
      <div>
         <Link to="/companydashboard/client">
        <button
          onClick={() => toggle(setExperienceOpen)}
          className={clsx(styles.navButton, {
            [styles.navButtonExpanded]: isSidebarOpen,
            [styles.navButtonCollapsed]: !isSidebarOpen,
          })}
        >
          <img src={userGroup} alt="Group" style={{ width: 16, height: 16, marginRight: 8 }} />
          {isSidebarOpen && <span style={{ fontSize: "14px" }}>Clients</span>}
          {isSidebarOpen && (experienceOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
        </button></Link>
        {experienceOpen && isSidebarOpen && (
          <div className={styles.navLinks}>
            <NavLink to="/companydashboard/teleperformance" className={navLinkClass}><li>Teleperformance</li></NavLink>
            <NavLink to="/companydashboard/inndodata" className={navLinkClass}><li>Innodata</li></NavLink>
            <NavLink to="/companydashboard/soft2bet" className={navLinkClass}><li>Soft2Bet</li></NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanySidebar;
