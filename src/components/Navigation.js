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
    borderRight: "gray 1px solid",
    borderLeft:"none",
    padding:"10px",
    paddingLeft:"15px",
    paddingRight:"15px"
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
