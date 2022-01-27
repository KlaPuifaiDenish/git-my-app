import React, { useState } from "react";

export default function Type({ deps }) {
  const [uses, setUsers] = useState(0);

  function count(props) {
    if (props === "OPD") {
      const opd = 54;
      const wrong = 4;
      return opd;
    } else if (props == "IPD") {
      const ipd = 16;

      const wrong = 10;
      return ipd;
    } else {
    }
  }
  return (
    <>
      {deps.map((dep, index) => {
        return (
          <div className="card one" key={index}>
            <div className="top">
              <div className="title">{dep.depname}</div>
              <div className="num_visit">
                <span className="num">{count(dep.code)}</span>
              </div>
            </div>
            <div className="details">
              <div className="one">
                <span>ทำการรักษาแล้ว</span>
                <i className="bx bxs-check-square"></i>
                <span className="count__use">{uses}</span>
              </div>
              <div className="one">
                <span>รอรับการรักษา</span>
                <i className="bx bxs-x-circle"></i>
                <span className="count__wrong">4</span>
              </div>
              <div className="one"></div>
              {/* <button>Purchase</button> */}
            </div>
          </div>
        );
      })}
    </>
  );
}
