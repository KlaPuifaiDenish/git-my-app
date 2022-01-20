import React, { useEffect } from "react";
import "./css/index.css";
import JsIndex from "./javascript/JsIndex";


function App() {
    JsIndex()
    const logo = require('./Img/logo192.png')
  return (
    <div className="body">
      <nav className="sidebar close">
        <header> 
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="" />
            </span>

            <div className="text logo-text">
              <span className="name">Medical</span>
              <span className="profession">Information System</span>
            </div>
          </div>

          <i className="bx bx-chevron-right toggle"></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search Txn..." />
            </li>

            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                <i className='bx bx-plus-medical icon'></i>
                  <span className="text nav-text">ผู้ป่วยนอก (OPD)</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-hotel icon"></i>
                  <span className="text nav-text">ผู้ป่วยใน (IPD)</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-bell icon"></i>
                  <span className="text nav-text">Notifications</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                <i className='bx bxs-comment-add icon'></i>
                  <span className="text nav-text">สั่งรายการ (Add Order)</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                <i className='bx bxs-report icon' ></i>
                  <span className="text nav-text">รายงาน (Report)</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">Wallets</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a href="#">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>

            <li className="mode">
              <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">Dark mode</span>

              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
      <section className="home">
        <div className="text">Medical Information System </div>
      </section>
    </div>
  );
}

export default App;
