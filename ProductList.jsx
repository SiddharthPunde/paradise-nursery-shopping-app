import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';
import { categories } from './products.js';
import Navbar from './Navbar.jsx';

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isAdded = id => cartItems.some(item => item.id === id);

  return (
    <>
      <Navbar />
      <main className="content-page plants-page">
        <div className="section-heading">
          <p className="eyebrow">FIND YOUR GREEN</p>
          <h1>Our Houseplant Collection</h1>
          <p>Explore plants for every room, routine and level of experience.</p>
        </div>
        {categories.map(category => (
          <section className="plant-category" key={category.name}>
            <div className="category-heading"><h2>{category.name}</h2><p>{category.description}</p></div>
            <div className="product-grid">
              {category.products.map(plant => (
                <article className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} loading="lazy" />
                  <div className="product-info">
                    <h3>{plant.name}</h3>
                    <p className="price">₹{plant.price}</p>
                    <button className="primary-button add-button" disabled={isAdded(plant.id)} onClick={() => dispatch(addItem({ ...plant, category: category.name }))}>
                      {isAdded(plant.id) ? 'Added to Cart' : 'Add to Cart'}
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