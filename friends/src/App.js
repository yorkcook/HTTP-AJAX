import React from "react";

import "./App.css";
import FriendList from "./Components/FriendList";

import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={FriendList} />
      </div>
    );
  }
}

export default App;
