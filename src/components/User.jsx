import React, { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h1>Name: {name}</h1>
      <h2>Location: Lahore</h2>
      <h3>Contact: @umairaftab</h3>
    </div>
  );
};

export default User;
