import React, { useState } from "react";

function UpdaterFunction() {
  const [count, setCount] = useState(0);

  const Increment = () => {  //INCREMENTING THREE TIMES USING THE UPDATER FUNCTION
    setCount(c => c + 1);
    // setCount(count + 1); ADDING THIS LINE WONT WORK, SO WE NEED UPDATER FUCNTION
    setCount(c => c + 1);
    setCount(c => c + 1);
    
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
        <button className="counter-button" onClick={Increment}>Up +3</button>
      </div>
    </>
  );
}

export default UpdaterFunction;
