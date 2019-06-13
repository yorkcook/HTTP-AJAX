import React from "react";

import "./App.css";
import FriendList from "./Components/FriendList";
//import Form from "./Components/Form";

import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={FriendList} />
        {/* <Form /> */}
      </div>
    );
  }
}

export default App;
