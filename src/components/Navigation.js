import React from "react";

function Navigation() {

  const messageStyle = {
    borderRight:"none"
  }

  const navigationStyle ={
    display: "flex",
    border: "gray 1px solid"
  }

  const innerDivStyle ={
    borderRight: "rgb(73, 72, 72) 1px solid",
    padding:"10px"
  }


  return (
      <div style={navigationStyle} id="navigation">
        <div style={innerDivStyle}>Home</div>
        <div style={innerDivStyle}>Notifications</div>
        <div style={{...innerDivStyle,...messageStyle}}>Messages</div>
      </div>
  );
}

export default Navigation;
