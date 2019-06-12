import React from "react";

import "./App.css";
import FriendList from "./Components/FriendList";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={FriendList} />
    </div>
  );
}

export default App;
