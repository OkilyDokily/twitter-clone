import React from "react";
import Avatar from "./Avatar";
import IndividualNavigation from "./IndividualNavigation";

function Info() {
  const infoStyle = {
    position:"relative"
  }

  const innerDivStyle = {
    display:"flex",
    flexDirection:"row-reverse"
  }

  const colorDivStyle = {
    backgroundColor:"lightblue",
    height:"80px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.75)",
    clipPath: "inset(0px 0px -5px 0px)"
  }
  
  const infoNameStyle = {
    position:"relative",
    left: "70px",
    margin:"0px",
    padding:"10px",
    paddingTop: "5px",
    // textAlign: "right",
    // color:"black"
  }

  return (
    <div id="info" style={infoStyle}>
      <div style={colorDivStyle} id="colordiv">

      </div>
      <div style={innerDivStyle}>
        <Avatar avatarStyle="infoStyle" />
      </div>
      <div>
        <p style={infoNameStyle} id="infoname">John Williams</p>
        <IndividualNavigation />
      </div>
    </div>
  );
}

export default Info;
