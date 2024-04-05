import React from "react";
import PropTypes from "prop-types";

const List = (props) => {
  const itemList = props.items;
  const category = props.category;

  //SORT USING NAME AND NUMBER OF CALORIES

  //   fruits.sort((a,b)=>a.name.localeCompare(b.name));  //ALPHABETICAL
  //   fruits.sort((a,b)=>b.name.localeCompare(a.name));  //REVERSE ALPHABETICAL
  //   fruits.sort((a,b)=>a.calories - b.calories);  // BY CALORIES
  //   fruits.sort((a,b)=>b.calories - a.calories);  // BY REVERSE CALORIES

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));

  //FILTER USING AMOUNT OF CALORIES

  //   const lowCalFruits = fruits.filter(fruit => fruit.calories < 50)

  //   const listItems = lowCalFruits.map((lowCalFruits) => (
  //     <li key={fruits.id}>
  //       {lowCalFruits.name}: &nbsp; <b>{lowCalFruits.calories}</b>
  //     </li>
  //   ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
};

List.defaultProps = {
  category: "Category",
  items: [],
};

List.PropTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

export default List;
