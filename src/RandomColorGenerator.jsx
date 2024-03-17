import React, { useState } from "react";

const RandomColorGenerator = () => {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function generateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function generateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <div className="buttons">
        <button
          onClick={
            typeOfColor === "hex"
              ? () => generateRandomHexColor()
              : () => generateRandomRgbColor()
          }
        >
          Generate random color
        </button>
        <button onClick={() => setTypeOfColor("hex")}>Create hex color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create rgb color</button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "arial",
          marginTop: "200px",
        }}
      >
        <h2>{color}</h2>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
