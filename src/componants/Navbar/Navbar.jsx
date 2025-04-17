
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import style from './Navbar.module.css';

export default function Navbar() {
  const [showSolution, setShowSolution] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

  const [showResources, setShowResources] = useState(false);
const resourcesDropdownRef = useRef(null);

  // const toggleMenu = () => setMenuOpen(!menuOpen);


  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log("Menu toggled:", !menuOpen);
  };
  
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); 

  const toggleSolutions = () => {
    setShowSolution(!showSolution);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSolution(false);
      }


    if (
      resourcesDropdownRef.current &&
      !resourcesDropdownRef.current.contains(event.target)
    ) {
      setShowResources(false);
    }
  };  


    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={style.navbar}>
      {/* Company Logo  */}

      <div className={style.logo}>
        <Link to="/">
          <img src="/assets/virbiqlogo.png" alt="Company Logo" />
        </Link>
      </div>
    
   {/*  Hamburger icon only visible on small screens */}

   <div className={style.hamburger} onClick={toggleMenu}>
        <i className="bx bx-menu"></i>
      </div>

 {/* Solution with dropdown menu  */}
 <div className={`${style.navlinks} ${menuOpen ? style.showMenu : ''}`}>

        <div   className={`${style.dropdownContainer} ${showSolution ? style.dropdownOpen : ''}`}
            onMouseEnter={() => setShowSolution(true)}
            onMouseLeave={() => setShowSolution(false)}
        
 ref={dropdownRef}>
          <a  onClick={toggleSolutions}>Solutions</a>
          {showSolution && (
            <div className={style.dropdown}>
              <div className={style.row}>
                <div className={style.item} onClick={() =>{ setShowSolution(false);    setMenuOpen(false) ; navigate("/fulltime")}}>
                  <img src="/assets/FTHS.png" alt="Full Time" />
                  <Link to="/fulltime">Full Time Hiring Support</Link>

                </div>
                <div className={style.item} onClick={() =>{ setShowSolution(false);  setMenuOpen(false) ;navigate("/contractual")}}>
                  <img src="/assets/CAPBS.png" alt="Contractual" />
                  <Link to="/contractual">Contractual and Project based Support</Link>

                </div>
              </div>
              <div className={style.row}>
                <div className={style.item} onClick={() => {setShowSolution(false);   setMenuOpen(false); navigate("/language")}}>
                  <img src="/assets/LangAss.png" alt="Language" />
                  <Link to="/language">Language Assessments</Link>

                </div>
                <div className={style.item} onClick={() =>  {setShowSolution(false);   setMenuOpen(false); navigate("/native")}}>
                  <img src="/assets/NativeHir.png" alt="Native Hiring" />
                  <Link to="/native">Native Hiring Support</Link>

                </div>
              </div>
            </div>
          )}
        </div>
         {/* Other Link  */}
        <Link onClick={() => setMenuOpen(false)} to="/ceo">COE</Link>
        {/* <Link onClick={() => setMenuOpen(false)} to="/resources">Resources</Link>
         */}
         {/* Resource with dropdown menu  */}
         <div
  className={`${style.dropdownContainer} ${showResources ? style.dropdownOpen : ''}`}
  onMouseEnter={() => setShowResources(true)}
  onMouseLeave={() => setShowResources(false)}
  ref={resourcesDropdownRef}
>
  <a onClick={() => setShowResources(!showResources)}>Resources</a>

  {showResources && (
    <div className={`${style.dropdown} ${style.resourcesDropdown}`}>
      <div className={style.item} onClick={() => {
        setShowResources(false);
        setMenuOpen(false);
        navigate("/global");
      }}>
        {/* <img src="/assets/global.png" alt="Global" /> */}
        <Link to="/global">Global</Link>
      </div>

      <div className={style.item} onClick={() => {
        setShowResources(false);
        setMenuOpen(false);
        navigate("/blog");
      }}>
        {/* <img src="/assets/blog.png" alt="Blog" /> */}
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  )}
</div>


        <Link onClick={() => setMenuOpen(false)} to="/aboutUs">About Us</Link>
      </div>
      
    </nav>
  );
}
