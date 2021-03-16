import Avatar from "./Avatar";


function Tweet(prop) {
  return (
    <div className="tweet">
      <div className="tweetWrapper">
        <Avatar/>
        <div className="textArea">
          <p>name</p>
          <p>{prop.tweet}</p>
        </div>
      </div>  
    </div>
  );
}

export default Tweet;