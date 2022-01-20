import React from "react";
import "./css/style.css";
import logo from "./Img/logo192.png";
function App() {
  return (
    <div>
      <nav className="sidebar">
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt=" logo" />
            </span>

            <div className="text header-text">
              <span className="name">Medical</span>
              <span className="profession">Information</span>
              <span className="system">System</span>
            </div>
          </div>
        </header>
      </nav>
    </div>
  );
}

export default App;
