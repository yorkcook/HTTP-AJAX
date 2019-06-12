import React from "react";

const Friend = props => {
  console.log(props);
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <h3>
            {friend.name} {friend.age} {friend.email}
          </h3>
        );
      })}
    </div>
  );
};

export default Friend;
