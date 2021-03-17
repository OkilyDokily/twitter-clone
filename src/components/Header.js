import React from 'react';
import Navigation from "./Navigation";
import Post from "./Post"
const searchButton = {
  borderRadius: "15px",
  border: "blue 1px solid",
}

const placeHolder = "Search"
const value = "Search"

const postStyles = {
  backgroundColor: 'lightblue',
  margin: '0px',
  display: "flex",
  flexDirection:"row-reverse"
}

const inputStyles ={
  border: "blue 1px solid",
  borderRadius: "15px",
  marginRight: "10px"
}

function Header(prop) {
  return (
    <div id="header">
      <Navigation/>
      <Post inputStyles = {inputStyles} buttonStyle={searchButton} postStyle={postStyles} placeHolder={placeHolder} buttonValue={value} />
    </div>
  );
}

export default Header;