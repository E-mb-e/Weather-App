import React from "react";
const Form = props => {
  return (
    // <form onSubmit={props.submit}>
    <form>
      <input
        type="text"
        value={props.value}
        onChange={props.change}
        placeholder="Enter a city name.."
      />
      {/* <button> Find City </button> */}
    </form>
  );
};

export default Form;
