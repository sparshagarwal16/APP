import React from "react";

const Products = ({ products, addToCart }) => {
  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="p-4 border m-2">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
