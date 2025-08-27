import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setCart }) => {
  const navigate = useNavigate();

  const finishCheckout = () => {
    setCart([]);              // clear the cart
    navigate("/home");        // redirect to home
  };

  return (
    <>
      <h1>Checkout</h1>
      <p>Thank you for shopping with us!</p>
      <button onClick={finishCheckout}>Finish & Return Home</button>
    </>
  );
};

export default Checkout;
