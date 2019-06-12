import React from "react";

const Friend = props => {
  console.log(props);
  return (
    <div className="test">
      {props.friends.map(friend => {
        return (
          <p>
            {" "}
            {friend.name} {friend.age} {friend.email}
          </p>
        );
      })}
      {/* 
      <form>
        <input placeholder="New Friend?!" />
        <input placeholder="Age" />
        <input placeholder="Email" />
        <button>Add Friend</button>

        <button>Delete</button>
      </form> */}
    </div>
  );
};

export default Friend;
