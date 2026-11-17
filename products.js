const photo = (id) => 'https://images.unsplash.com/' + id + '?auto=format&fit=crop&w=700&q=80';

export const categories = [
  {
    name: 'Air Purifying Plants',
    description: 'Freshen your space with leafy, easy-care favourites.',
    products: [
      { id: 'air-1', name: 'Snake Plant', price: 299, image: photo('photo-159369150 Nine?') },
      { id: 'air-2', name: 'Peace Lily', price: 399, image: photo('photo-159369150 Nine?') },
      { id: 'air-3', name: 'Areca Palm', price: 499, image: photo('photo-159369150 Nine?') },
      { id: 'air-4', name: 'Spider Plant', price: 249, image: photo('photo-159369150 Nine?') },
      { id: 'air-5', name: 'Rubber Plant', price: 449, image: photo('photo-159369150 Nine?') },
      { id: 'air-6', name: 'Boston Fern', price: 349, image: photo('photo-159369150 Nine?') }
    ]
  },
  {
    name: 'Low Maintenance Plants',
    description: 'Beautiful greenery that is forgiving and beginner friendly.',
    products: [
      { id: 'easy-1', name: 'ZZ Plant', price: 399, image: photo('photo-1501004318641-b39e6451bec6') },
      { id: 'easy-2', name: 'Jade Plant', price: 199, image: photo('photo-1485955900006-10f4d324d411') },
      { id: 'easy-3', name: 'Aloe Vera', price: 249, image: photo('photo-1509423350716-97f9360b4e09') },
      { id: 'easy-4', name: 'Golden Pothos', price: 299, image: photo('photo-1497250681960-ef046c08a56e') },
      { id: 'easy-5', name: 'Chinese Evergreen', price: 349, image: photo('photo-1501004318641-b39e6451bec6') },
      { id: 'easy-6', name: 'Succulent Mix', price: 179, image: photo('photo-1485955900006-10f4d324d411') }
    ]
  },
  {
    name: 'Decorative Foliage Plants',
    description: 'Statement leaves and textures to style every corner.',
    products: [
      { id: 'decor-1', name: 'Monstera Deliciosa', price: 599, image: photo('photo-1497250681960-ef046c08a56e') },
      { id: 'decor-2', name: 'Calathea Orbifolia', price: 549, image: photo('photo-1501004318641-b39e6451bec6') },
      { id: 'decor-3', name: 'Bird of Paradise', price: 699, image: photo('photo-1494438639946-1ebd1d20bf85') },
      { id: 'decor-4', name: 'Philodendron', price: 399, image: photo('photo-1485955900006-10f4d324d411') },
      { id: 'decor-5', name: 'Alocasia Polly', price: 499, image: photo('photo-1509423350716-97f9360b4e09') },
      { id: 'decor-6', name: 'Fiddle Leaf Fig', price: 649, image: photo('photo-1497250681960-ef046c08a56e') }
    ]
  }
];

export const allProducts = categories.flatMap(category =>
  category.products.map(product => ({ ...product, category: category.name }))
);