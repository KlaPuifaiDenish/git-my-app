import React,{useEffect} from "react";
import "./css/style.css";
import logo from "./Img/logo192.png";
//import useScript from 'hooks/useScript';
function App() {
    //useScript('./Function.js');
  return (
    <div>
      <section className="home">
        <div className="text">Dashboard Sidebar</div>
      </section>
      <nav className="sidebar close">
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="" />
            </span>

            <div className="text logo-text">
              <span className="name">Medical</span>
              <span className="profession">Information</span>
              <span className="system">System</span>
            </div>
          </div>

          <i className="bx bx-chevron-right toggle"></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li>

            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-bar-chart-alt-2 icon"></i>
                  <span className="text nav-text">Revenue</span>
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
                  <i className="bx bx-pie-chart-alt icon"></i>
                  <span className="text nav-text">Analytics</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-heart icon"></i>
                  <span className="text nav-text">Likes</span>
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
      <script src="./Function.js"></script>
    </div>
  );
}

export default App;
