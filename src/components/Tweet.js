import Avatar from "./Avatar";


function Tweet(prop) {
  const tweetStyle = {
    display: "flex",
    borderBottom: "grey 1px solid"
  }
  
  const textArea = {
    fontWeight:"bold"
  }

  return (
    <div style={tweetStyle} className="tweet">
      <div className="tweetWrapper">
        <Avatar avatarStyle="defaultStyle"/>
        <div className="textArea">
          <p style={textArea}>name</p>
          <p>{prop.tweet}</p>
        </div>
      </div>  
    </div>
  );
}

export default Tweet;