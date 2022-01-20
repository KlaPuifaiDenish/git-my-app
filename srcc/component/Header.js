import React, { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";
import "./Hearder.css";
function Header() {
  const [click, setClick] = useState(false);
  const handleClick = (props) => {
      setClick(!click)
  } 
  const closeMobileMemu = () => setClick(false);
  const [cash, setCash] = useState('OPD');

  return (
    <div className="header">
      <div className="container">
        <div className="header-con">
          <div className="logo-container">
            <a href="#">Hospital : {cash}</a>
          </div>
          <ul className={click ? "menu active" : "menu"} >
            <li className="menu-link" onClick={closeMobileMemu()}>
              <a href="#">OPD</a>
            </li>
            <li className="menu-link" onClick={closeMobileMemu()}>
              <a href="#">Admit</a> 
            </li>
            <li className="menu-link" onClick={closeMobileMemu()}>
              <a href="#">Discharge</a>
            </li>
          </ul>
          <div className="mobile-menu" onClick={handleClick}>
            {click ? <FiX /> : <FiAlignJustify />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
