import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice.jsx';
import Navbar from './Navbar.jsx';

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <main className="content-page cart-page">
        <div className="section-heading"><p className="eyebrow">YOUR SELECTION</p><h1>Shopping Cart</h1></div>
        {items.length === 0 ? (
          <div className="empty-cart"><div className="empty-icon">🪴</div><h2>Your cart is waiting for some green.</h2><p>Discover a plant that feels right at home.</p><Link className="primary-button button-link" to="/plants">Continue Shopping</Link></div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {items.map(item => (
                <article className="cart-row" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-product-details"><h3>{item.name}</h3><p>₹{item.price} each</p><div className="quantity-control">
                    <button aria-label={'Decrease ' + item.name} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
                    <span>{item.quantity}</span>
                    <button aria-label={'Increase ' + item.name} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                  </div></div>
                  <div className="cart-line-total"><strong>₹{item.price * item.quantity}</strong><button className="remove-button" onClick={() => dispatch(removeItem(item.id))}>Delete</button></div>
                </article>
              ))}
            </div>
            <aside className="order-summary"><h2>Order Summary</h2><div className="summary-line"><span>Items ({items.reduce((n, item) => n + item.quantity, 0)})</span><span>₹{total}</span></div><div className="summary-total"><span>Total</span><strong>₹{total}</strong></div><button className="primary-button checkout-button" onClick={() => window.alert('Coming Soon! Thank you for shopping with Paradise Nursery.')}>Checkout</button><Link className="continue-link" to="/plants">← Continue Shopping</Link></aside>
          </div>
        )}
      </main>
    </>
  );
}