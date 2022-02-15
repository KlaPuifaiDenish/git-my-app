import React from "react";
import { Routes, Route, Link } from "react-router-dom";
const menuBar = () => {
  return (
    <div className="menu">
      <li className="search-box">
      <Link to="/home">
        <i className="bx bx-home-alt icon"></i>
        <span className="text nav-text">หน้าหลัก</span>
        </Link>
      </li>

      <ul className="menu-links">
        <li className="nav-link">
        <Link to="/opd">
          <a href="#">
            <i className="bx bx-plus-medical icon"></i>
            <span className="text nav-text">ผู้ป่วยนอก (OPD)</span>
          </a>
          </Link>
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
            <i className="bx bxs-comment-add icon"></i>
            <span className="text nav-text">สั่งรายการ (Add Order)</span>
          </a>
        </li>

        <li className="nav-link">
          <a href="#">
            <i className="bx bxs-report icon"></i>
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
  );
};

export default menuBar;
