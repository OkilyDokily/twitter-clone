import Avatar from "./Avatar";




function Follow(prop) {

  const followStyle = {
    display:"flex",
    marginBottom: "7px"
  }

  const paragraphStyle = {
    marginTop: "0px",
    marginBottom: "0px"
  }

  const buttonStyle = {
    borderRadius:"0px",
    backgroundColor:"blue",
    color:"white"
  }

  const innerDivStyle= {
    marginLeft: "6px"
  }

 

  return (
    <div style={followStyle} className="follow">
      <Avatar avatarStyle="defaultStyle" />
      <div style={innerDivStyle}>
        <p style={paragraphStyle}>{prop.follow}</p>
        <input style={buttonStyle} type="button" value="Follow" />
      </div>
    </div>
  );
}

export default Follow;