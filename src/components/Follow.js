import Avatar from "./Avatar";


function Follow(prop) {
  return (
    <div class="follow">
      <Avatar />
      <p>{prop.person}</p>
      <input type="button">Follow</input>
    </div>
  );
}

export default Follow;