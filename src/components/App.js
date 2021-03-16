import React from "react";
import TweetGroup from "./TweetGroup";
import Header from "./Header"
import Left from "./Left"
import FollowGroup from "./FollowGroup";



function App() {
  return (
    <div id="app">
      <Header/>
      <hr/>
      <div id="main">
        <Left />
        <TweetGroup />
        <FollowGroup />
      </div>
    </div>
  );
}

export default App;
