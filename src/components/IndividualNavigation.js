import React from "react";
import PropTypes from 'prop-types';

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

IndividualNavigation.propTypes = {
  tweetsUrl: PropTypes.string,
  followingUrl: PropTypes.string,
  followersUrl: PropTypes.string,

};

export default IndividualNavigation;