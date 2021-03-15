import React from "react";

function IndividualNavigation(prop) {
  return (
    <div id="individualnavigation">
      <p><a href={prop.tweetsUrl}>Tweets</a></p>
      <p><a href={prop.followingUrl}>Following</a></p>
      <p><a href={prop.followersUrl}>Followers</a></p>
    </div>
  );
}

export default IndividualNavigation;