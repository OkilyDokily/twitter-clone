import React from "react";
import Navigation from "./Navigation";
import Search from "./Post";
import Info from "./Info";
import Profile from "./Profile";
import TweetGroup from "./TweetGroup";
import Header from "./Header"
import Left from "./Left"



function App() {
  return (
    <React.Fragment>
      <Header/>
      <Left/>
      <TweetGroup/>
    </React.Fragment>
  );
}

export default App;
