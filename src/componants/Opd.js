import React from "react";
import "../css/Opd.css";
function Opd() {
  const boxhead = [
    { id: 1, depname: "ผู้ป่วยนอก (OPD)", code: "OPD" ,link:"opd" },
    { id: 2, depname: "ผู้ป่วยใน (IPD)", code: "IPD" ,link:"opd" },
    { id: 3, depname: "นัดผู้ป้วย (FW)", code: "FW"  ,link:"opd" },
  ];
  return (
    <div>
      <div className="content-opd">
        <div className="box-head">section</div>
        <div className="box-head">section</div>
        <div className="box-head">section</div>
      </div>
      <div className="content-list">
        <div className="box-detail">aa</div>
        <div className="box-list">hh</div>
      </div>
    </div>
  );
}

export default Opd;
