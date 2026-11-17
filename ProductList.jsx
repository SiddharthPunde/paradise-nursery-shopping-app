import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from './CartSlice.jsx';

// Three plant categories with six unique plants in each category.
const plantsArray = [
  { id: 'air-1', category: 'Air Purifying Plants', name: 'Snake Plant', price: 299, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80' },
  { id: 'air-2', category: 'Air Purifying Plants', name: 'Peace Lily', price: 399, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80' },
  { id: 'air-3', category: 'Air Purifying Plants', name: 'Areca Palm', price: 499, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80' },
  { id: 'air-4', category: 'Air Purifying Plants', name: 'Spider Plant', price: 249, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80' },
  { id: 'air-5', category: 'Air Purifying Plants', name: 'Rubber Plant', price: 449, image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=700&q=80' },
  { id: 'air-6', category: 'Air Purifying Plants', name: 'Boston Fern', price: 349, image: 'https://images.unsplash.com/photo-1508013861974-9f6347163ebe?auto=format&fit=crop&w=700&q=80' },

  { id: 'easy-1', category: 'Low Maintenance Plants', name: 'ZZ Plant', price: 399, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80' },
  { id: 'easy-2', category: 'Low Maintenance Plants', name: 'Jade Plant', price: 199, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80' },
  { id: 'easy-3', category: 'Low Maintenance Plants', name: 'Aloe Vera', price: 249, image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=700&q=80' },
  { id: 'easy-4', category: 'Low Maintenance Plants', name: 'Golden Pothos', price: 299, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80' },
  { id: 'easy-5', category: 'Low Maintenance Plants', name: 'Chinese Evergreen', price: 349, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80' },
  { id: 'easy-6', category: 'Low Maintenance Plants', name: 'Succulent Mix', price: 179, image: 'https://images.unsplash.com/photo-1508013861974-9f6347163ebe?auto=format&fit=crop&w=700&q=80' },

  { id: 'decor-1', category: 'Decorative Foliage Plants', name: 'Monstera Deliciosa', price: 599, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80' },
  { id: 'decor-2', category: 'Decorative Foliage Plants', name: 'Calathea Orbifolia', price: 549, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80' },
  { id: 'decor-3', category: 'Decorative Foliage Plants', name: 'Bird of Paradise', price: 699, image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=700&q=80' },
  { id: 'decor-4', category: 'Decorative Foliage Plants', name: 'Philodendron', price: 399, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80' },
  { id: 'decor-5', category: 'Decorative Foliage Plants', name: 'Alocasia Polly', price: 499, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80' },
  { id: 'decor-6', category: 'Decorative Foliage Plants', name: 'Fiddle Leaf Fig', price: 649, image: 'https://images.unsplash.com/photo-1508013861974-9f6347163ebe?auto=format&fit=crop&w=700&q=80' }
];

const categories = ['Air Purifying Plants', 'Low Maintenance Plants', 'Decorative Foliage Plants'];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const addedToCart = {};
  cartItems.forEach(item => { addedToCart[item.id] = true; });

  const handleAddToCart = (plant) => dispatch(addItem(plant));

  return (
    <>
      <nav className="navbar">
        <Link className="brand" to="/">🌿 Paradise Nursery</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link className="cart-link" to="/cart">
            <span className="cart-icon">🛒</span> Cart
            <span className="cart-count">{totalCartQuantity}</span>
          </Link>
        </div>
      </nav>

      <main className="content-page plants-page">
        <div className="section-heading">
          <p className="eyebrow">FIND YOUR GREEN</p>
          <h1>Our Houseplant Collection</h1>
          <p>Explore plants for every room, routine and level of experience.</p>
        </div>

        {categories.map(category => (
          <section className="plant-category" key={category}>
            <div className="category-heading"><h2>{category}</h2></div>
            <div className="product-grid">
              {plantsArray.filter(plant => plant.category === category).map(plant => (
                <article className="product-card" key={plant.id}>
                  <img className="plant-thumbnail" src={plant.image} alt={plant.name} loading="lazy" />
                  <div className="product-info">
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="price plant-price">₹{plant.price}</p>
                    <button
                      className="primary-button add-button"
                      disabled={!!addedToCart[plant.id]}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {addedToCart[plant.id] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}