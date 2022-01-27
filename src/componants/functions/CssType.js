import React from 'react';

function CssType(props) {
    if (props === "FW") {
        console.log(props)
        const csstype = 'top2';
        return csstype;
      } else{
        const csstype = 'top';
        return csstype;
      }
    }


export default CssType;
