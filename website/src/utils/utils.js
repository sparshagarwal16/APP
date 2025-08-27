import { products, cart } from "./constant";



    // Add to Cart
    function addToCart(id) {
      const product = products.find(p => p.id === id);
      cart.push(product);
      alert(product.name + " added to cart!");
    }

    // Remove from Cart
    function removeFromCart(index) {
      cart.splice(index, 1);
      renderCart();
    }

    // Render Cart
    function renderCart() {
      console.log('Render cart fucion is runing')
      const cartDiv = document.getElementById("cart");
      cartDiv.innerHTML = "";
      if (cart.length === 0) {
        cartDiv.innerHTML = "<p>Your cart is empty</p>";
        return;
      }
      cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
          <h4>${item.name}</h4>
          <p>Price: $${item.price}</p>
          <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartDiv.appendChild(div);
      });
      const total = cart.reduce((sum, item) => sum + item.price, 0);
      cartDiv.innerHTML += `<h3>Total: $${total}</h3>`;
    }

    export { addToCart, removeFromCart, renderCart}