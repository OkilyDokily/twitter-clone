import Avatar from "./Avatar";


function Follow(prop) {
  return (
    <div className="follow">
      <Avatar />
      <p>{prop.follow}</p>
      <input type="button" value="Follow"/>
    </div>
  );
}

export default Follow;