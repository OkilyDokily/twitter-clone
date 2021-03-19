import Avatar from "./Avatar";
import PropTypes from 'prop-types';



function Follow(prop) {

  const followStyle = {
    display:"flex",
    marginBottom: "10px"
  }

  const paragraphStyle = {
    marginTop: "0px",
    marginBottom: "10px",
    fontWeight: "bold"
  }

  const buttonStyle = {
    borderRadius:"2px",
    backgroundColor:"blue",
    color:"white",
    border:"none",
    padding: "4px 15px",
   
  }

  const innerDivStyle= {
    marginLeft: "10px"
  }

 
  return (
    <div style={followStyle} className="follow">
      <Avatar avatarStyle="followStyle" />
      <div style={innerDivStyle}>
        <p style={paragraphStyle}>{prop.follow}</p>
        <input style={buttonStyle} type="button" value="Follow" />
      </div>
    </div>
  );
}

Follow.propTypes = {
  follow: PropTypes.string
};

export default Follow;