import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';

function Home() {
  return (
    <div className="landing-page">
      <Navbar />
      <main className="hero">
        <div className="hero-content">
          <p className="eyebrow">BRING NATURE HOME</p>
          <h1>Paradise Nursery</h1>
          <p className="hero-copy">Make room for a little more green. Discover houseplants that bring warmth, calm and character to your home.</p>
          <Link to="/plants" className="primary-button hero-button">Get Started</Link>
        </div>
      </main>
      <footer className="landing-footer">A greener home starts here.</footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}