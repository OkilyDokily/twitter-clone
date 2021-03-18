import React from "react";

function IndividualNavigation(prop) {
  const individualnavigationStyle = {
      margin: "auto",
      display: "flex",
      padding: "10px"
  }

  const paragraphs = {
    fontSize: "10px",
    marginLeft: "10px",
    paddingRight: "5px",
    color:"gray"
  }

  return (
    <div style={individualnavigationStyle} id="individualnavigation">
      <p style={paragraphs}><a href={prop.tweetsUrl}>TWEETS</a></p>
      <p style={paragraphs}><a href={prop.followingUrl}>FOLLOWING</a></p>
      <p style={paragraphs}><a href={prop.followersUrl}>FOLLOWERS</a></p>
    </div>
  );
}

export default IndividualNavigation;