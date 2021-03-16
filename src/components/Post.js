import React from "react";

function Post(prop) {

  return (
      <div style={prop.postStyle} className="post">
        <input style={prop.buttonStyle} type="submit" value={prop.buttonValue}/>
        <input type="text" placeholder={prop.placeHolder}/>   
      </div>
  );
}

export default Post;
