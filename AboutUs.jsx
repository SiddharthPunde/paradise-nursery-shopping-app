import Navbar from './Navbar.jsx';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className="content-page about-page">
        <p className="eyebrow">OUR STORY</p>
        <h1>Growing happiness, one plant at a time.</h1>
        <p>Paradise Nursery believes every home deserves a little more nature. We make it easy to discover beautiful, healthy houseplants and bring them into your everyday spaces.</p>
        <p>From resilient beginner-friendly plants to striking foliage favourites, our collection is selected to help plant lovers of every experience level grow with confidence.</p>
        <div className="about-values">
          <article><h3>Thoughtful selection</h3><p>Plants chosen for beauty, quality and everyday living.</p></article>
          <article><h3>Simple plant care</h3><p>Helpful choices for first-time plant parents and collectors.</p></article>
          <article><h3>More green at home</h3><p>Small additions that make your space feel more alive.</p></article>
        </div>
      </main>
    </>
  );
}