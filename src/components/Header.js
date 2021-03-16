import React from 'react';
import Navigation from "./Navigation";
import Post from "./Post"
const searchButton = {
  borderRadius: "15px",
  border: "blue 1px solid",
}

const placeHolder = "What's Happening."
const value = "Search"

const postStyles = {
  backgroundColor: 'lightblue',
  margin: '15px',
  display: "flex",
  flexDirection:"row-reverse"
}

function Header(prop) {
  return (
    <div id="header">
      <Navigation/>
      <Post buttonStyle={searchButton} postStyle={postStyles} placeHolder={placeHolder} buttonValue={value} />
    </div>
  );
}

export default Header;