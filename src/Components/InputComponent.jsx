import React, { useState } from "react";

const InputComponent = () => {
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();
  const [comment, setComment] = useState();
  const [payment, setPayment] = useState("MasterCard");
  const [shipping, setShipping] = useState("Delivery");

  const handleNameChange = () => {
    setName(event.target.value);
  };
  const handleQuantityChange = () => {
    setQuantity(event.target.value);
  };

  const handleCommentChange = () => {
    setComment(event.target.value);
  };

  const handlePaymentChange = () => {
    setPayment(event.target.value);
  };

  const handleShippingChange = () => {
    setShipping(event.target.value);
  };

  return (
    <div>
      <input onChange={handleNameChange} placeholder="Enter name" />
      <p>Name: {name} </p>

      <input
        onChange={handleQuantityChange}
        type="number"
        placeholder="Enter number"
      />
      <p>Quantity: {quantity} </p>

      <textarea
        onChange={handleCommentChange}
        type="text"
        placeholder="Enter delivery instructions here"
      />
      <p>Comment: {comment} </p>

      <select value={payment} onChange={handlePaymentChange}>
        {/* <option value=""></option> */}
        <option value=""></option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
      </select>
      <p> Payment method: {payment} </p>

      <label>
        Pick Up
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
      </label>
      <br />
      <label>
        Delivery
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
      </label>

      <p>Shipping: {shipping} </p>
    </div>
  );
};

export default InputComponent;
