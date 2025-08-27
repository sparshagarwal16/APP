import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}
          <h3>Total: ${total}</h3>
        </div>
      )}
    </>
  );
};

export default Cart;
