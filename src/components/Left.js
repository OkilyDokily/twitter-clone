import React from "react";
import Info from "./Info";
import Profile from "./Profile";

const profile = "adsfasdfasdfsad fadslf;adskljfj  fasdljfa;lsdfj sdafjfl;kasd;lkfjklasd  lkjdsfalkjlfka;dsjk  afsdlk";
function Left() {
  return (
    <div id="left">
      <Info/>
      <Profile profile={profile}/>
    </div>
  );
}

export default Left;
