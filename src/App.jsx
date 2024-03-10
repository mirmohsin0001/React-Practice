import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import ProfilePicture from "./ProfilePicture";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import InputComponent from "./InputComponent";
import ColorPicker from "./ColorPicker";

const App = () => {


  return (
    <>
      <ColorPicker/>
    </>
  );

  // const App = () => {
  // const fruits = [
  //   { id: 1, name: "apple", calories: 20 },
  //   { id: 2, name: "orange", calories: 80 },
  //   { id: 3, name: "banana", calories: 50 },
  //   { id: 4, name: "coconut", calories: 85 },
  //   { id: 5, name: "pineapple", calories: 10 },
  // ];

  // const vegetables = [
  //   { id: 6, name: "carrot", calories: 220 },
  //   { id: 7, name: "onion", calories: 82 },
  //   { id: 8, name: "potatoes", calories: 115 },
  //   { id: 9, name: "turnip", calories: 156 },
  //   { id: 10, name: "lettuce", calories: 17 },
  // ];

  // return (
  //   <>
  //     {/* {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
  //     {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null} */}

  //     <MyComponent />
  //   </>
  // );
};

export default App;
