import React from "react";
import avatar from '../joyous.jpg'


function Info(prop) {
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
    }

  }

  return (
   <div>
     <img style={avatarStyles[prop.avatarStyle]} alt="avatar" className="Avatar" src={avatar}/>
   </div>
  );
}

export default Info;