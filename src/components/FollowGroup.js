import Follow from "./Follow";


const follow = ["lorem adfasda", "asdfasdfasdf", "adfsdfasdfsddsfa", "dsafdsafdsfsdafasd", "dsafsdafdasfasdagffd"];


function FollowGroup() {
  const followGroupStyle = {
    padding: "5px",
    paddingLeft: "10px",
    height:"max-content",
    border:"solid gray 1px"
  }

  return (
    <div style={followGroupStyle} id="followgroup">
      <p >Lorem Ipsum</p>
      {follow.slice(0, 3).map(x=><Follow follow={x}/>)}
    </div>
  );
}


export default FollowGroup;