import React from "react";
import "../css/Home.css";
import Type from "./Type";
import { Routes, Route, Link } from "react-router-dom";

export default function Home() {
  const deps = [
    { id: 1, depname: "ผู้ป่วยนอก (OPD)", code: "OPD", link: "opd" },
    { id: 2, depname: "ผู้ป่วยใน (IPD)", code: "IPD", link: "ipd" },
    { id: 3, depname: "นัดผู้ป้วย (FW)", code: "FW", link: "ipd" },
  ];

  const menus = [
    { id: 1, depname: "รับนอน", code: "OTH" },
    { id: 2, depname: "Admit", code: "OTH" },
    { id: 3, depname: "Report", code: "OTH" },
  ];

  return (
    <>
      {/* <div className="content">
        <Type deps={deps} />
      </div> */}

      <div className="content">
        <Type deps={deps} />
      </div>

      <div className="content">
        <Type deps={menus} />
      </div>
    </>
  );
}
