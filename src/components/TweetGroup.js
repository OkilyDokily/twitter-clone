import React from "react";
import Tweets from "./Tweets";
import Post from "./Post";

const tweets = ["lorem adfasda afsdafsd", "asdfasdfasdf", "adfsdfasdfsddsfa", "dsafdsafdsfsdafasd", "dsafsdafdasfasdagffd"];


const tweetGroupStyle = {
  borderBottom: "sold gray 1px"
}

function TweetGroup() {
  return (
    <div style={tweetGroupStyle} id="tweetgroup">
      <Post cssGroup="tweetGroupPost"/>
      <Tweets tweets={tweets} />
    </div>
  );
}

export default TweetGroup;
