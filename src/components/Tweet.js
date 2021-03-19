import Avatar from "./Avatar";
import PropTypes from 'prop-types';

function Tweet(prop) {
  const tweetStyle = {
    display: "flex",
    border: "gray 1px solid",
    borderBottom:"none"
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
Tweet.propTypes = {
  tweet: PropTypes.string
};

export default Tweet;