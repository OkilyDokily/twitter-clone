import React from 'react';
import Navigation from "./Navigation";
import Post from "./Post"


const headerStyle= {
  position: "relative"
}

function Header() {
  return (
    <div style={headerStyle} id="header">
      <Navigation />
      <Post cssGroup="headerPost"/>
    </div>
  );
}



export default Header;