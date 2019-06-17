import React from "react";
import axios from "axios";
import Friend from "./Friend";
import { Route } from "react-router-dom";

class FriendList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: "",
        age: "",
        email: ""
      }
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

  postFriend = friend => {
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <Route
          path="/"
          render={props => <Friend {...props} friends={this.state.friends} />}
        />
        <div>
          <form
            onSubmit={() => {
              this.postFriend(this.state.newFriend);
            }}
          >
            <input
              type="text"
              placeholder="New Friend?!"
              name="name"
              onChange={this.handleChange}
              value={this.state.newFriend.name}
            />
            <input
              type="text"
              placeholder="What's my age again?"
              name="age"
              onChange={this.handleChange}
              value={this.state.newFriend.age}
            />
            <input
              type="text"
              placeholder="Let me get dat email!"
              name="email"
              onChange={this.handleChange}
              value={this.state.newFriend.email}
            />
            <button>Add Friend</button>

            <button>Delete</button>
          </form>
        </div>
      </div>
    );
  }
}

export default FriendList;
