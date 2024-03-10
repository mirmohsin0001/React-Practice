import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="counter-container">
        <p className="count-display" >{count} </p>
        <button className="counter-button" onClick={Decrement}>Down</button>
        <button className="counter-button" onClick={Reset}>Reset</button>
        <button className="counter-button" onClick={Increment}>Up</button>
      </div>
    </>
  );
}

export default Counter;
