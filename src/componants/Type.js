import React, { useState } from "react";
import subtype from "./functions/SubType";
import counttype from "./functions/CountType";
import wrongtype from "./functions/WrongType";
import csstype from "./functions/CssType";
export default function Type({ deps }) {
  function chk_card(code) {
    if (code === "FW") {
      return(
        <div className="details">
        <div className="one">
          <span>จำนวนนัดวันนี้ :</span>
          <i className="bx bxs-check-square"></i>
          <span className="count__use">{counttype(code)}</span>
        </div>
      </div>
      )
    } else if (code === "OTH")  {
      return (
        <div className="details">
          <div className="one"></div>
        </div>
      );
    }
    else  {
      return (
        <div className="details">
          <div className="one">
            <span>ทำการรักษาแล้ว</span>
            <i className="bx bxs-check-square"></i>
            <span className="count__use">{counttype(code)}</span>
          </div>
          <div className="one">
            <span>รอรับการรักษา</span>
            <i className="bx bxs-x-circle"></i>
            <span className="count__wrong">{wrongtype(code)}</span>
          </div>
        </div>
      );
    }
  }
  return (
    <>
      {deps.map((dep, index) => {
        return (
          <div className="card one" key={index}>
            <div className={csstype(dep.code)}>
              <div className="title">{dep.depname}</div>
              <div className="num_visit">
                <span className="num">{subtype(dep.code)}</span>
              </div>
            </div>
            {chk_card(dep.code)}
          </div>
        );
      })}
    </>
  );
}
