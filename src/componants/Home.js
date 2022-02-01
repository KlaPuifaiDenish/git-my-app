import React from "react";
import "../css/Home.css";
import Type from "./Type";
export default function Home() {
  const deps = [
    { id: 1, depname: "ผู้ป่วยนอก (OPD)",code:'OPD' },
    { id: 2, depname: "ผู้ป่วยใน (IPD)"  ,code:'IPD'},
    { id: 3, depname: "นัดผู้ป้วย (FW)" ,code:'FW'} 
  ];

  const menus = [
    { id: 1, depname: "รับนอน" ,code:'OTH' },
    { id: 2, depname: "Admit"  ,code:'OTH'},
    { id: 3, depname: "Report" ,code:'OTH' },
  ];



  return (
    <>
      <div className="text">Medical Information System</div>
      {/* <div className="content">
        <Type deps={deps} />
      </div> */}
      <div className="content" >
      <Type deps={deps} />
      </div>
      
      <div className="content" >
      <Type deps={menus} />
      </div>
    </>
  );
}
