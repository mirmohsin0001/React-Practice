import React, { useState } from "react";



const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");

    function handleOnChange(){
        setColor(event.target.value);
    }


  return (
    <div className="color-picker-component">
      <h1>ColorPicker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Sected Color: {color} </p>
      </div>
      <label>Select a Color: </label>
      <input onChange={handleOnChange} type="color" />  {/* setting type to color gives us a color picker */}
    </div>
  );
};

export default ColorPicker;
