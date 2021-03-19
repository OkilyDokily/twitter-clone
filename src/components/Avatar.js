import React from "react";
import avatar from '../joyous.jpg';
import PropTypes from 'prop-types';


function Avatar(prop) {
  const avatarStyles = {
    infoStyle: {
      borderRadius: "10px",
      border: "2px solid white",
      width: "50px",
      height: "50px",
      position: "absolute",
      top: "45px",
      left:"10px",
      objectFit:"cover"
    },

    defaultStyle: {
      width: "40px",
      height: "40px",
      objectFit: "cover"
    },

    followStyle: {
      width: "40px",
      height: "50px",
      objectFit: "cover"
    }

  }

  return (
     <img style={avatarStyles[prop.avatarStyle]} alt="avatar" className="Avatar" src={avatar}/>
  );
}

Avatar.propTypes = {
  avatarStyle: PropTypes.string
};

export default Avatar;