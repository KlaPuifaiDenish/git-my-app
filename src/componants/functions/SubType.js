import React from "react";

function SubType(props) {
  if (props === "OPD") {
    const opd = 54;
    return opd;
  } else if (props == "IPD") {
    const ipd = 16;
    return ipd;
  } else {
  }
}

export default SubType;
