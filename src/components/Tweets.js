import React from "react";
import Tweet from "./Tweet";

function Tweets(prop) {
  return (
    <div id="tweets">
   {prop.tweets.map(item => <Tweet tweet={item}/>)}
    </div>
   );
}

export default Tweets;
