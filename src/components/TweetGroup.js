import React from "react";
import Tweets from "./Tweets";
import Post from "./Post";

const tweets = ["lorem adfasda afsdafsd","asdfasdfasdf","adfsdfasdfsddsfa","dsafdsafdsfsdafasd","dsafsdafdasfasdagffd"];

function TweetGroup(prop) {
  return (
    <div>
      <Post/>
      <Tweets tweets={tweets}/>
    </div>
  );
}

export default TweetGroup;
