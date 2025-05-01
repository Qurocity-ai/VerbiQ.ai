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
  
  const solutionsDropdownRef = useRef(null);
  const resourcesDropdownRef = useRef(null);
  const navigate = useNavigate(); 

  const closeMobileMenu = () => {          
    setIsMobileMenuOpen(false);
    setShowSolution(false);
    setShowResources(false);
  };
      
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
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <Link to="/">
          <img src="/assets/virbiqlogo.png" alt="Company Logo" />
        </Link>
      </div>
    
      <div className={style.mobileMenuToggle} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <RxCross2 size={32} /> : <GiHamburgerMenu size={24} />}
      </div>

      <div className={`${style.navlinks} ${isMobileMenuOpen ? style.showMenu : ''}`}>
        <div 
          className={`${style.dropdownContainer} ${showSolution ? style.dropdownOpen : ''}`}
          ref={solutionsDropdownRef}
        >
          <div 
            className={style.navLinkWithIcon} 
            onClick={() => setShowSolution(!showSolution)}
          >
            <span>Solutions</span>
            <IoIosArrowForward className={`${style.dropdownArrow} ${showSolution ? style.arrowRotate : ''}`} />
          </div>
                  {showSolution && (
    <div className={`${style.dropdown} ${style.solutionsDropdown}`}>
        <div className={style.row}>
            <div className={style.item} onClick={() => { setShowSolution(false); setIsMobileMenuOpen(false); navigate("/fulltime")}}>
                <img src="/assets/FTHS.png" alt="Full Time" />
                <div className={style.itemContent}>
                    <div className={style.itemTitle}>
                        <span>Full Time Hiring Support</span>
                    </div>
                </div>
            </div>
            
            <div className={style.item} onClick={() => { setShowSolution(false); setIsMobileMenuOpen(false); navigate("/contractual")}}>
                <img src="/assets/CAPBS.png" alt="Contractual" />
                <div className={style.itemContent}>
                    <div className={style.itemTitle}>
                        <span>Contractual and Project based Support</span>
                    </div>
                </div>
            </div>
        </div>
        
        <div className={style.row}>
            <div className={style.item} onClick={() => {setShowSolution(false); setIsMobileMenuOpen(false); navigate("/language")}}>
                <img src="/assets/LangAss.png" alt="Language" />
               
                  <div className={style.itemContent}>
                    <div className={style.itemTitle}>
                      <span>Language Assessments</span>
                    </div>
                  </div>
                </div>
                
                <div className={style.item} onClick={() => {setShowSolution(false); setIsMobileMenuOpen(false); navigate("/globalhiring")}}>
                  <img src="/assets/NativeHir.png" alt="Native Hiring" />
                  <div className={style.itemContent}>
                    <div className={style.itemTitle}>
                      <span>Global Hiring Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <Link onClick={closeMobileMenu} to="/ceo">COE</Link>
        
        <div
          className={`${style.dropdownContainer} ${showResources ? style.dropdownOpen : ''}`}
          ref={resourcesDropdownRef}
        >
          <div 
            className={style.navLinkWithIcon}
            onClick={() => setShowResources(!showResources)}
          >
            <span>Resources</span>
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
                  </div>
                </div>
              </div>

              <div className={style.item} onClick={() => {
                setShowResources(false);
                setIsMobileMenuOpen(false);
                navigate("/blog");
              }}>
                <div className={style.itemContent}>
                  <div className={style.itemTitle}>
                    <span>Blogs</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <Link onClick={closeMobileMenu} to="/aboutUs">About Us</Link>
      </div>
    </nav>
  );
}