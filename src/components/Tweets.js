import React from "react";
import Tweet from "./Tweet";
import PropTypes from 'prop-types';

function Tweets(prop) {
  return (
    <div id="tweets">
   {prop.tweets.map(item => <Tweet tweet={item}/>)}
    </div>
   );
}
Tweets.propTypes = {
  tweets: PropTypes.arrayOf(PropTypes.string)
};


export default Tweets;
