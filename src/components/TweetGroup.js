import React from "react";
import Tweets from "./Tweets";
import Post from "./Post";

const tweets = ["lorem adfasda afsdafsd","asdfasdfasdf","adfsdfasdfsddsfa","dsafdsafdsfsdafasd","dsafsdafdasfasdagffd"];
const whatsHappeningSearch = {
  backgroundColor: 'red',
  marginRight: '10px',
  width: "40px",
  height: "40px"
}

const placeHolder = "What's Happening."
const value = ""

const postStyles = {
  backgroundColor: 'lightblue',
  margin: '15px',
  display:"flex"
}

function TweetGroup(prop) {
  return (
    <div>
      <Post buttonStyle={whatsHappeningSearch} postStyle={postStyles} placeHolder = {placeHolder} buttonValue={value}/>
      <Tweets tweets={tweets}/>
    </div>
  );
}

export default TweetGroup;
