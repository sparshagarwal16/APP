import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import { useState } from 'react';
import Cart from './components/Cart';
import { products } from './utils/constant';
import Checkout from './components/Checkout';
import Navbar from './components/Navbar';

function App() {
 const [cart, setCart] = useState([]);

  // Add to Cart
  const addToCart = (id) => {
    const product = products.find((p) => p.id === id);
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  // Remove from Cart
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };
  return (
    <div className="App">

    <BrowserRouter>
              <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/home" element={<Home/>} />
      <Route path="/products" element={<Products products={products} addToCart={addToCart}/>} />
      <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>} />
<Route path="/checkout" element={<Checkout setCart={setCart} />} />
      </Routes>
    </BrowserRouter>


  <div class="container" id="app"></div>
    </div>
  );
}

export default App;
