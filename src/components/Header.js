import React from 'react';
import Navigation from "./Navigation";
import Post from "./Post"


function Header(prop) {
  return (
    <div id="header">
      <Navigation/>
      <Post/>
    </div>
  );
}

export default Header;