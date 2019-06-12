import React from "react";

const Friend = props => {
  console.log(props);
  return (
    <div class="test">
      {props.friends.map(friend => {
        return (
          <p>
            {" "}
            {friend.name} {friend.age} {friend.email}
          </p>
        );
      })}

      <form>
        <input placeholder="...To Do" />

        <button>Add ToDo</button>

        <button>Clear Completed</button>
      </form>
    </div>
  );
};

export default Friend;
