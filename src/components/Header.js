import React from 'react';
import Navigation from "./Navigation";
import Post from "./Post"
const searchButton = {
  borderRadius: "15px",
  border: "lightblue 2px solid",
  color: "gray",
  backgroundColor: "transparent"
}



const placeHolder = "Search"
const value = "Search"

const postStyles = {
  position:"absolute",
  bottom:"0px",
  right:"0px",
  margin: '0px',
  height: "30px",
  display: "flex",
  flexDirection:"row-reverse"
}

const inputStyles ={
  border: "lightblue 2px solid",
  borderRadius: "15px",
  marginRight: "10px",
  backgroundColor:"transparent",
  textIndent: "10px"
 
}

const headerStyle = {
  position:"relative"
}

function Header(prop) {
  return (
    <div style={headerStyle} id="header">
      <Navigation/>
      <Post inputStyles = {inputStyles} buttonStyle={searchButton} postStyle={postStyles} placeHolder={placeHolder} buttonValue={value} />
    </div>
  );
}

export default Header;