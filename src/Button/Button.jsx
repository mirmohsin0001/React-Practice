import React from "react";
import styles from "./Button.module.css";

const Button = () => {
  let count = 0;

  const handleClick = (name) => {
    if (count < +5) {
      count++;
      console.log(`${name}, you have clicked me ${count} times! `);
    } else {
      console.log("Bro, stop clicking me!!!");
    }
  };
  
  return (
    <button onClick={() => handleClick("Mohsin")} className={styles.button}>
      Click Me
    </button>
  );
};

export default Button;
