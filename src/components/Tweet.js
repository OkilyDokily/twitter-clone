import Avatar from "./Avatar";


function Tweet(prop) {
  return (
    <div>
      <Avatar/>
      <p>{prop.tweet}</p>
    </div>
  );
}

export default Tweet;