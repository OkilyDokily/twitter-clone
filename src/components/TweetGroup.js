import React from "react";
import Tweets from "./Tweets";
import Post from "./Post";

const tweets = ["lorem adfasda afsdafsd","asdfasdfasdf","adfsdfasdfsddsfa","dsafdsafdsfsdafasd","dsafsdafdasfasdagffd"];
const whatsHappeningSearch = {
  backgroundColor: '#712F48',
  marginRight: '10px',
  width: "40px",
  height: "40px",
  borderStyle:"none",
  borderRadius: "3px",
}

const placeHolder = "What's Happening."
const value = ""

const postStyles = {
  backgroundColor: 'lightblue',
  padding: '15px',
  display:"flex",
}

const tweetGroupStyle = {
  borderBottom:"sold gray 1px"
}

const inputStyle = {
  color: "lightblue",
  border:"rgb(79, 131, 148) solid 1px",
  textIndent:"10px"
}

function TweetGroup(prop) {
  return (
    <div style={tweetGroupStyle} id="tweetgroup">
      <Post inputStyles={inputStyle} buttonStyle={whatsHappeningSearch} postStyle={postStyles} placeHolder = {placeHolder} buttonValue={value}/>
      <Tweets tweets={tweets}/>
    </div>
  );
}

export default TweetGroup;
