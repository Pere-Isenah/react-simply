import React, { useState } from "react";

export const UserInput = (props) => {
  const [msg, setMsg] = useState(props.value);
  const handleChange = () => {
    setMsg(msg);
  };
  return (
    <div>
    <h1>{msg}</h1>
    <input onchange ={handleChange} type="text" placeholder="Enter a username" />
  </div>
    );
};

// export const InputMsg = () => {
//   

//   return null;
// };

// export const Header = (props) => {
//   return;
// };

