import React from "react";

function WrongType(props) {
  if (props === "OPD") {
    const wrong = 4;
    return wrong;
  } else if (props == "IPD") {
    const wrong = 6;
    return wrong;
  } else {
  }
}
export default WrongType;
