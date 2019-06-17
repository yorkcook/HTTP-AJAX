import React from "react";

const Friend = props => {
  console.log(props);
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <div className="friendInfo">
            <div>Name: {friend.name}</div>
            <div>Age: {friend.age}</div>
            <div>Email: {friend.email}</div>
          </div>
        );

        // return (
        //   <p>
        //     {" "}
        //     {friend.name} {friend.age} {friend.email}
        //   </p>
        // );
      })}
    </div>
  );
};

export default Friend;
