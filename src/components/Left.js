import React from "react";
import Info from "./Info";
import Profile from "./Profile";

const profile = "adsfasdfasdfsad fadslf;adskljfj  fasdljfa;lsdfj sdafjfl;kasd;lkfjklasd  lkjdsfalkjlfka;dsjk  afsdlk";
function Left() {

  const leftStyle = {
  
    display: "flex",
    flexDirection: "column",
    border: "none",
    alignItems: "flex-start",
    width: "min-content"
  }

  return (
    <div style={leftStyle} id="left">
      <Info/>
      <Profile profile={profile}/>
    </div>
  );
}

export default Left;
