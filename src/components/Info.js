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
    height:"80px"
  }
  
  const infoNameStyle = {
    margin:"0px",
    padding:"10px",
    paddingTop: "0px",
    textAlign: "right"
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
