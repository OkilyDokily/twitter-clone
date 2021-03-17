import React from "react";
import TweetGroup from "./TweetGroup";
import Header from "./Header"
import Left from "./Left"
import FollowGroup from "./FollowGroup";



function App() {

  const appStyle = {
    maxWidth: "800px",
    minWidth: "600px",
    margin:"auto"
  }

  const mainStyle = {
      display: "flex",
      justifyContent: "space-between"
  }

  return (
    <div style={appStyle} id="app">
      <Header/>
      <hr/>
      <div style={mainStyle} id="main">
        <Left />
        <TweetGroup />
        <FollowGroup />
      </div>
    </div>
  );
}

export default App;
