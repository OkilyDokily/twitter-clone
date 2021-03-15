import Follow from "./Follow";

function FollowGroup(prop) {
  return (
    <div id="followgroup">
      <p>This person has recently followed</p>
      {prop.followList.slice(0, 3).map(x=><Follow/>)}
    </div>
  );
}

export default FollowGroup;