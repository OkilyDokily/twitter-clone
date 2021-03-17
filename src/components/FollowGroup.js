import Follow from "./Follow";
const follow = ["lorem adfasda afsdafsd", "asdfasdfasdf", "adfsdfasdfsddsfa", "dsafdsafdsfsdafasd", "dsafsdafdasfasdagffd"];


function FollowGroup(prop) {
  const followGroupStyle = {
    padding: "5px",
    paddingLeft: "10px"
  }

  return (
    <div style={followGroupStyle} id="followgroup">
      <p >This person has recently followed</p>
      {follow.slice(0, 3).map(x=><Follow follow={x}/>)}
    </div>
  );
}

export default FollowGroup;