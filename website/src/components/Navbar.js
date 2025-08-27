import { Link } from "react-router-dom";

const Navbar = () => {
    return (<>
    <div className="flex gap-6 justify-between">
            <div className="text-9xl">My eCommerce Store</div>
            <div>
        <Link to="/home" className="hover:underline">Home</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/cart" className="hover:underline">Cart</Link>
        <Link to="/checkout" className="hover:underline">Checkout</Link>
        </div>
      </div>
      </>)
}

export default Navbar;