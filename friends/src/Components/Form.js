import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <input placeholder="New Friend?!" />
        <input placeholder="Age" />
        <input placeholder="Email" />
        <button>Add Friend</button>

        <button>Delete</button>
      </form>
    </div>
  );
};

export default Form;
