import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQuantity } from './CartSlice.jsx';
import Navbar from './Navbar.jsx';

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const calculateTotalCost = item => item.price * item.quantity;
  const calculateTotalAmount = () => cartItems.reduce((total, item) => total + calculateTotalCost(item), 0);

  const handleIncrement = item => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = item => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = id => dispatch(removeItem(id));
  const totalAmount = calculateTotalAmount();

  return (
    <>
      <Navbar />
      <main className="content-page cart-page">
        <div className="section-heading"><p className="eyebrow">YOUR SELECTION</p><h1>Shopping Cart</h1></div>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-icon">🪴</div>
            <h2>Your cart is waiting for some green.</h2>
            <p>Discover a plant that feels right at home.</p>
            <Link className="primary-button button-link" to="/plants">Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map(item => (
                <article className="cart-row" key={item.id}>
                  <img className="cart-item-image" src={item.image} alt={item.name} />
                  <div className="cart-product-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-unit-price">₹{item.price} each</p>
                    <div className="quantity-control">
                      <button className="decrement-button" aria-label={'Decrease ' + item.name} onClick={() => handleDecrement(item)}>−</button>
                      <span className="cart-item-quantity">{item.quantity}</span>
                      <button className="increment-button" aria-label={'Increase ' + item.name} onClick={() => handleIncrement(item)}>+</button>
                    </div>
                  </div>
                  <div className="cart-line-total">
                    <strong className="cart-item-total">₹{calculateTotalCost(item)}</strong>
                    <button className="cart-item-delete remove-button" onClick={() => handleRemove(item.id)}>Delete</button>
                  </div>
                </article>
              ))}
            </div>
            <aside className="order-summary">
              <h2>Order Summary</h2>
              <div className="summary-line"><span>Items ({cartItems.reduce((n, item) => n + item.quantity, 0)})</span><span>₹{totalAmount}</span></div>
              <div className="summary-total"><span>Total</span><strong>₹{totalAmount}</strong></div>
              <button className="primary-button checkout-button" onClick={() => window.alert('Coming Soon! Thank you for shopping with Paradise Nursery.')}>Checkout</button>
              <Link className="continue-link" to="/plants">← Continue Shopping</Link>
            </aside>
          </div>
        )}
      </main>
    </>
  );
}