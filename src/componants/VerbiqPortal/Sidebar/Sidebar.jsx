
// import logo from '/assets/virbiqlogo.png';
// import userGroup from '/assets/user-group.png'

// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import clsx from "clsx";
// import { NavLink ,Link} from "react-router-dom";

// const Sidebar = () => {
//   const [employmentOpen, setEmploymentOpen] = useState(true);
//   const [experienceOpen, setExperienceOpen] = useState(true);
//   const [languageOpen, setLanguageOpen] = useState(true);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const toggle = (setter) => setter((prev) => !prev);

//   const navLinkClass = ({ isActive }) =>
//     clsx("block pl-4 py-1 text-[15px]", {
//       "text-red-600 font-medium": isActive,
//       "text-black": !isActive,
//     });

//   return (
//     <>
//       {/* Hamburger - mobile only */}
//       <div className="lg:hidden p-3">
//         <button onClick={() => setMobileOpen((prev) => !prev)}>
//           <GiHamburgerMenu size={24} />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={clsx(
//           "fixed lg:static top-0 left-0 h-full  w-68 bg-white shadow-md p-3 space-y-2 transition-transform duration-300 z-50",
//           {
//             "-translate-x-full lg:translate-x-0": !mobileOpen,
//             "translate-x-0": mobileOpen,
//           }
//         )}
//         style={{height:"100vh"}}
//       >
//         {/* Close button - mobile only */}
//         <div className="flex justify-end lg:hidden mb-4">
//           <button onClick={() => setMobileOpen(false)} className="text-xl font-bold">
//             ✕
//           </button>
//         </div>
      
//         <div className="p-2 border-b border-gray-200">
//           <img src={logo} alt="VerbiQ Logo" className="h-8 mx-auto" />
//         </div>
//         {/* Type of Employment */}
//         <div>
//           <Link to="/typeofemployement">
//           <button
//             onClick={() => toggle(setEmploymentOpen)}
//             className="w-full flex items-center justify-between text-white bg-[#024E5B] px-4 py-2 rounded"
//           >
//             <img src={userGroup} className="w-4 h-4 mr-2" />
//            <span className='text-[14px]'>Type of employment</span>
//             {employmentOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//           </button></Link>
//           {employmentOpen && (
//             <div className="mt-2 space-y-1">
//               <NavLink to="/freelance" className={navLinkClass}><li>Freelance </li></NavLink>
//               <NavLink to="/contractual" className={navLinkClass}><li>Contractual</li></NavLink>
//             </div>
//           )}
//         </div>

//         {/* Experience Level */}
//         <div>
//         <Link to="/experiencelevel">
//           <button
//             onClick={() => toggle(setExperienceOpen)}
//             className="w-full flex items-center justify-between text-white bg-[#024E5B] px-4 py-2 rounded"
//           >
//               <img src={userGroup} className="w-4 h-4 mr-2" />
//            <span className='text-[14px]'>Experience level</span>
//             {experienceOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//           </button></Link>
//           {experienceOpen && (
//             <div className="mt-2 space-y-1">
//               <NavLink to="/entrylevel" className={navLinkClass}><li> Entry Level</li></NavLink>
//               <NavLink to="/intermediate" className={navLinkClass}><li> Intermediate</li></NavLink>
//               <NavLink to="/expert" className={navLinkClass}><li>Expert</li></NavLink>
//             </div>
//           )}
//         </div>

//         {/* Language */}
//         <div>
//          <Link to="/language"> <button
//             onClick={() => toggle(setLanguageOpen)}
//             className="w-full flex items-center justify-between text-white bg-[#024E5B] px-4 py-2 rounded"
//           >
//               <img src={userGroup} className="w-4 h-4 mr-2" />
//             <span className='text-[14px]'>Language</span>
//             {languageOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//           </button></Link>
//           {languageOpen && (
//             <div className="mt-2 space-y-1">
//               <NavLink to="/french" className={navLinkClass}><li> French</li></NavLink>
//               <NavLink to="/german" className={navLinkClass}><li> German</li></NavLink>
//               <NavLink to="/czech" className={navLinkClass}><li> Czech</li></NavLink>
//               <NavLink to="/spanish" className={navLinkClass}><li> Spanish</li></NavLink>
//               <NavLink to="/italian" className={navLinkClass}><li> Italian</li></NavLink>
//               <NavLink to="/mandarin" className={navLinkClass}><li> Mandarin</li></NavLink>
//               <NavLink to="/korean" className={navLinkClass}><li> Korean</li></NavLink>
//               <NavLink to="/japanese" className={navLinkClass}><li> Japanese</li></NavLink>
//             </div>
//           )}
//         </div>
//       </div>
      
//     </>
//   );
// };

// export default Sidebar;

import styles from './Sidebar.module.css';
import logo from '/assets/virbiqlogo.png';
import userGroup from '/assets/user-group.png';

import { useState } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";
import clsx from "clsx";
import { NavLink, Link } from "react-router-dom";

const Sidebar = () => {
  const [employmentOpen, setEmploymentOpen] = useState(true);
  const [experienceOpen, setExperienceOpen] = useState(true);
  const [languageOpen, setLanguageOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggle = (setter) => setter(prev => !prev);

  const navLinkClass = ({ isActive }) =>
    clsx(styles.navLink, {
      [styles.activeNavLink]: isActive,
      [styles.inactiveNavLink]: !isActive,
    });

  return (
    <>
      {/* Hamburger (Mobile Only) */}
      <div className="lg:hidden">
        <button className={styles.hamburgerButton} onClick={() => setMobileOpen(prev => !prev)}>
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={clsx(
          styles.sidebar,
          {
            [styles.sidebarExpanded]: isSidebarOpen,
            [styles.sidebarCollapsed]: !isSidebarOpen,
            [styles.sidebarHiddenMobile]: !mobileOpen,
            [styles.sidebarVisibleMobile]: mobileOpen,
          }
        )}
      >
        {/* Close (Mobile Only) */}
        <div className={styles.closeButton}>
          <button onClick={() => setMobileOpen(false)}>✕</button>
        </div>

        {/* Logo */}
        {isSidebarOpen && (
          <div className={styles.logoContainer}>
            <img src={logo} alt="VerbiQ Logo" style={{ height: "32px" }} />
          </div>
        )}

        {/* Toggle Sidebar (Desktop Only) */}
        {/* <div className={styles.toggleDesktopButton}>
          <button
            onClick={() => setIsSidebarOpen(prev => !prev)}
            className={styles.toggleButtonIcon}
          >
            {isSidebarOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </button>
        </div> */}

        {/* Section: Type of Employment */}
        <div>
          <Link to="/typeofemployement">
            <button
              onClick={() => toggle(setEmploymentOpen)}
              className={clsx(styles.navButton, {
                [styles.navButtonExpanded]: isSidebarOpen,
                [styles.navButtonCollapsed]: !isSidebarOpen,
              })}
            >
              <img src={userGroup} alt="Group" style={{ width: 16, height: 16, marginRight: 8 }} />
              {isSidebarOpen && <span style={{ fontSize: "14px" }}>Type of employment</span>}
              {isSidebarOpen && (employmentOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
            </button>
          </Link>
          {employmentOpen && isSidebarOpen && (
            <div className={styles.navLinks}>
            
              <NavLink to="/freelancer" className={navLinkClass}><li>Freelancer</li></NavLink>
              <NavLink to="/contractual" className={navLinkClass}><li>Contractual</li></NavLink>
             
            </div>
          )}
        </div>

        {/* Section: Experience Level */}
        <div>
          <Link to="/experiencelevel">
            <button
              onClick={() => toggle(setExperienceOpen)}
              className={clsx(styles.navButton, {
                [styles.navButtonExpanded]: isSidebarOpen,
                [styles.navButtonCollapsed]: !isSidebarOpen,
              })}
            >
              <img src={userGroup} alt="Group" style={{ width: 16, height: 16, marginRight: 8 }} />
              {isSidebarOpen && <span style={{ fontSize: "14px" }}>Experience level</span>}
              {isSidebarOpen && (experienceOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
            </button>
          </Link>
          {experienceOpen && isSidebarOpen && (
            <div className={styles.navLinks}>
            
              <NavLink to="/entrylevel" className={navLinkClass}><li>Entry Level</li></NavLink>
              <NavLink to="/intermediate" className={navLinkClass}><li>Intermediate</li></NavLink>
              <NavLink to="/expert" className={navLinkClass}><li>Expert</li></NavLink>
           
            </div>
          )}
        </div>

        {/* Section: Language */}
        <div>
          <Link to="/language">
            <button
              onClick={() => toggle(setLanguageOpen)}
              className={clsx(styles.navButton, {
                [styles.navButtonExpanded]: isSidebarOpen,
                [styles.navButtonCollapsed]: !isSidebarOpen,
              })}
            >
              <img src={userGroup} alt="Group" style={{ width: 16, height: 16, marginRight: 8 }} />
              {isSidebarOpen && <span style={{ fontSize: "14px" }}>Language</span>}
              {isSidebarOpen && (languageOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
            </button>
          </Link>
          {languageOpen && isSidebarOpen && (
            <div className={styles.navLinks}>
           
              <NavLink to="/french" className={navLinkClass}><li>French</li></NavLink>
              <NavLink to="/german" className={navLinkClass}><li>German</li></NavLink>
              <NavLink to="/czech" className={navLinkClass}><li>Czech</li></NavLink>
              <NavLink to="/spanish" className={navLinkClass}><li>Spanish</li></NavLink>
              <NavLink to="/italian" className={navLinkClass}><li>Italian</li></NavLink>
              <NavLink to="/mandarin" className={navLinkClass}><li>Mandarin</li></NavLink>
              <NavLink to="/korean" className={navLinkClass}><li>Korean</li></NavLink>
              <NavLink to="/japanese" className={navLinkClass}><li>Japanese</li></NavLink>
              
            </div>
            
          )}
        </div>

      </div>
    </>
  );
};

export default Sidebar;
