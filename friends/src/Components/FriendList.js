import React from "react";
import axios from "axios";
import Friend from "./Friend";
import { Route } from "react-router-dom";

class FriendList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    // console.log("test");
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  //   render() {
  //     return null;
  //   }
  render() {
    return (
      <div>
        <Route
          path="/"
          render={props => <Friend {...props} friends={this.state.friends} />}
        />
      </div>
    );
  }
}

export default FriendList;
