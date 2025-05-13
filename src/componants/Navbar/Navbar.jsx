import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import style from './Navbar.module.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [activeLink, setActiveLink] = useState("");  // Track active link
  
  const solutionsDropdownRef = useRef(null);
  const resourcesDropdownRef = useRef(null);
  const navigate = useNavigate(); 

  const closeMobileMenu = () => {          
    setIsMobileMenuOpen(false);
    setShowSolution(false);
    setShowResources(false);
    
  };
      
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(event.target)) {
        setShowSolution(false);
      }

      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target)) {
        setShowResources(false);
      }
      
    }; 


    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

{/*activeLink for navbar hovering the effect*/}
  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the clicked link as active
    setIsMobileMenuOpen(false); // Close mobile menu after link click
  };
 


  return (
    <nav className={style.navbar}>
      {/* Company Logo*/}  
      <div className={style.logo}>
        <Link to="/" onClick={() => setActiveLink("")}>
          <img src="/assets/virbiqlogo.png" alt="Company Logo" />
        </Link>
      </div>
    
      {/*  Hamburger icon only visible on small screens*/} 
      <div className={style.mobileMenuToggle} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <RxCross2 size={32} /> : <GiHamburgerMenu size={24} />}
      </div>

      {/* Nav links with dropdown menus*/} 
      <div className={`${style.navlinks} ${isMobileMenuOpen ? style.showMenu : ''}`}>
        {/* Solution with dropdown menu*/}  
        <div 
          className={`${style.dropdownContainer} ${showSolution ? style.dropdownOpen : ''}`}
          ref={solutionsDropdownRef}
        >
          <div 
            className={style.navLinkWithIcon} 
            onClick={() => setShowSolution(!showSolution)}
          >
            <span className={activeLink === "solutions" ? style.activeLink : ""}>Solutions</span>
            <IoIosArrowForward className={`${style.dropdownArrow} ${showSolution ? style.arrowRotate : ''}`} />
          </div>
          
          {showSolution && (
            <div className={`${style.dropdown} ${style.solutionsDropdown}`}>
              <div className={style.row}>
                <div className={style.item} onClick={() =>{ setShowSolution(false); setIsMobileMenuOpen(false); navigate("/fulltime")}}>
                  <img src="/assets/FTHS.png" alt="Full Time" />
                  <div className={style.itemContent}>
                    <div className={style.itemTitle}>
                      <span>Full Time Hiring Support</span>
                      {/*<IoIosArrowForward className={style.itemArrow} />*/}
                    </div>
                  </div>
                </div>
                
                <div className={style.item} onClick={() => { setShowSolution(false); setIsMobileMenuOpen(false); navigate("/contractual")}}>
                  <img src="/assets/CAPBS.png" alt="Contractual" />
                  <div className={style.itemContent}>
                    <div className={style.itemTitle}>
                      <span>Contractual and Project<br /> based Support</span>
                      {/*<IoIosArrowForward className={style.itemArrow} />*/}
                    </div>
                  </div>
                </div>
                <div className={style.divider}></div> {/* horizontal line */}
              </div>
              
              <div className={style.row}>
                <div className={style.item} onClick={() => {setShowSolution(false); setIsMobileMenuOpen(false); navigate("/language")}}>
                  <img src="/assets/LangAss.png" alt="Language" />
                  <div className={style.itemContent}>
                    <div className={style.itemTitle}>
                      <span>Language Assessments</span>
                      {/*<IoIosArrowForward className={style.itemArrow} />*/}
                    </div>
                  </div>
                </div>
                
                <div className={style.item} onClick={() => {setShowSolution(false); setIsMobileMenuOpen(false); navigate("/globalhiring")}}>
                  <img src="/assets/NativeHir.png" alt="Native Hiring" />
                  <div className={style.itemContent}>
                    <div className={style.itemTitle}>
                      <span>Global Hiring Support</span>
                      {/*<IoIosArrowForward className={style.itemArrow} />*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      {/* Platform */}
              <Link onClick={() => { setActiveLink("platform");  setIsMobileMenuOpen(false)}} to="/platform" className={activeLink === "platform" ? style.activeLink : ""}>Platform</Link>

        {/* COE Link*/}
        <Link onClick={() => { setActiveLink("coe");  setIsMobileMenuOpen(false)}} to="/ceo" className={activeLink === "coe" ? style.activeLink : ""}>COE</Link>
        
        {/* Resource with dropdown menu*/} 
        <div
          className={`${style.dropdownContainer} ${showResources ? style.dropdownOpen : ''}`}
          ref={resourcesDropdownRef}
        >
          <div 
            className={style.navLinkWithIcon}
            onClick={() => setShowResources(!showResources)}
          >
           <span className={activeLink === "resources" ? style.activeLink : ""}>Resources</span>
            <IoIosArrowForward className={`${style.dropdownArrow} ${showResources ? style.arrowRotate : ''}`} />
          </div>

          {showResources && (
            <div className={`${style.dropdown} ${style.resourcesDropdown}`}>
              <div className={style.item} onClick={() => {
                setShowResources(false);
                setIsMobileMenuOpen(false);
                navigate("/global");
              }}>
                <div className={style.itemContent}>
                  <div className={style.itemTitle}>
                    <span>Global insight</span>
                    {/*<IoIosArrowForward className={style.itemArrow} />*/}
                  </div>
                </div>
              </div>
               {/* Divider line */}
             <div className={style.divider}></div>


              <div className={style.item} onClick={() => {
                setShowResources(false);
                setIsMobileMenuOpen(false);
                navigate("/blog");
              }}>
                <div className={style.itemContent}>
                  <div className={style.itemTitle}>
                    <span>Blogs</span>
                    {/*<IoIosArrowForward className={style.itemArrow} />*/}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* About Us Link*/}
        < Link onClick={() => { setActiveLink("aboutUs");setIsMobileMenuOpen(false)}} to="/aboutUs" className={activeLink === "aboutUs" ? style.activeLink : ""}>About Us</Link>
      </div>
    </nav>
  );
}

