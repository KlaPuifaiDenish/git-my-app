import React from 'react';

function CountType(props) {
    if (props === "OPD") {
      const use = 50;
      return use;
    } else if (props == "IPD") {
      const use = 10;
      return use;
    } else {
    }
  }
export default CountType;
