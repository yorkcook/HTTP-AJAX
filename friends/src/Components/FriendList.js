import React from "react";
import axios from "axios";

class FriendList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    console.log("test");
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return null;
  }
}

export default FriendList;
