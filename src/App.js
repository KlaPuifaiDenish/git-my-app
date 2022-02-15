import React, { useEffect } from "react";
import "./css/index.css";
import JsIndex from "./javascript/JsIndex";
import menubar from "./componants/MenuBar";
import Home from "./componants/Home";
import Opd from "./componants/Opd";
import { Routes, Route, Link } from "react-router-dom";

function App() {

  useEffect(()=>{

  },[])
  JsIndex();
  const logo = require("./Img/logo192.png");


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
          {menubar()}
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
        <div className="text">Medical Information System</div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/opd" element={<Opd />} />
        </Routes>
        {/*  {home()} */}
      </section>
    </div>
  );
}

export default App;
