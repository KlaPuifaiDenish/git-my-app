import React, { useState } from "react";
import subtype from "./functions/SubType";
import counttype from "./functions/CountType";
import wrongtype from "./functions/WrongType";
import csstype from './functions/CssType';
;

export default function Type({ deps }) {
  
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
            <div className="details">
              <div className="one">
                <span>ทำการรักษาแล้ว</span>
                <i className="bx bxs-check-square"></i>
                <span className="count__use">{counttype(dep.code)}</span>
              </div>
              <div className="one">
                <span>รอรับการรักษา</span>
                <i className="bx bxs-x-circle"></i>
                <span className="count__wrong">{wrongtype(dep.code)}</span>
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
