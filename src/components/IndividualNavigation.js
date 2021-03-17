import React from "react";

function IndividualNavigation(prop) {
  const individualnavigationStyle = {
      margin: "auto",
      display: "flex",
      padding: "10px"
  }
  return (
    <div style={individualnavigationStyle} id="individualnavigation">
      <p><a href={prop.tweetsUrl}>Tweets</a></p>
      <p><a href={prop.followingUrl}>Following</a></p>
      <p><a href={prop.followersUrl}>Followers</a></p>
    </div>
  );
}

export default IndividualNavigation;