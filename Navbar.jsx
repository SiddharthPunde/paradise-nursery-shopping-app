import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const count = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  return (
    <nav className="navbar">
      <Link className="brand" to="/">🌿 Paradise Nursery</Link>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink className="cart-link" to="/cart">🛒 Cart <span className="cart-count">{count}</span></NavLink>
      </div>
    </nav>
  );
}