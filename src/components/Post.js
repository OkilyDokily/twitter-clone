import React from "react";
import PropTypes from 'prop-types';

function Post(prop) {
  
  const tweetGroupPost = {
    buttonStyle: {
      backgroundColor: '#712F48',
      marginRight: '10px',
      width: "40px",
      height: "40px",
      borderStyle: "none",
      borderRadius: "3px",
    },
    placeHolder: "What's Happening.",
    buttonValue: "",
    postStyle: {
      backgroundColor: 'lightblue',
      padding: '15px',
      display: "flex",
    },
    inputStyle: {
      color: "lightblue",
      border: "rgb(79, 131, 148) solid 1px",
      textIndent: "10px"
    }
  }

  const headerPost = {
    buttonStyle: {
      borderRadius: "15px",
      border: "lightblue 2px solid",
      color: "gray",
      backgroundColor: "transparent"
    }
    ,
    placeHolder: "Search",
    buttonValue: "Search"
    ,
    postStyle: {
      position: "absolute",
      bottom: "0px",
      right: "0px",
      margin: '0px',
      height: "30px",
      display: "flex",
      flexDirection: "row-reverse"
    }
    ,
    inputStyle: {
      border: "lightblue 2px solid",
      borderRadius: "15px",
      marginRight: "10px",
      backgroundColor: "transparent",
      textIndent: "10px"
    }
  }
  const cssGroups = {tweetGroupPost:tweetGroupPost, headerPost :headerPost};



  return (
      <div style={cssGroups[prop.cssGroup].postStyle} className="post">
      <input style={cssGroups[prop.cssGroup].buttonStyle} type="submit" value={cssGroups[prop.cssGroup].buttonValue}/>
      <input type="text" style={cssGroups[prop.cssGroup].inputStyle} placeholder={cssGroups[prop.cssGroup].placeHolder}/>
      </div>
  );
}

Post.propTypes = {
  cssGroup: PropTypes.string
};


export default Post;
