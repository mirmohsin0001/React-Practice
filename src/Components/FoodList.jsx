import React, { useState } from "react";

const FoodList = () => {
  const [foods, setFoods] = useState(["Apple", "Banana", "Mango"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i != index));
  }

  return (
    <div>
      <h1>List of fruits</h1>
      {foods.map((food, index) => (
        <li onClick={() => handleRemoveFood(index)} key={index}>
          {food}
        </li>
      ))}
      <input id="foodInput" type="text" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
};

export default FoodList;
