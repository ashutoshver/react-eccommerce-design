import { motion } from 'framer-motion';
import { useState } from 'react';

const ProductCategories = ({ setCartItems }) => {
  const categories = [
    {
      id: 1,
      name: 'Hair Care',
      image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      products: [
        { id: 1, name: 'Shampoo', price: 12.99 },
        { id: 2, name: 'Conditioner', price: 14.99 },
        { id: 3, name: 'Hair Oil', price: 9.99 }
      ]
    },
    {
      id: 2,
      name: 'Stress Care',
      image: 'https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      products: [
        { id: 4, name: 'Essential Oils', price: 19.99 },
        { id: 5, name: 'Aromatherapy Candle', price: 15.99 },
        { id: 6, name: 'Relaxation Tea', price: 8.99 }
      ]
    },
    {
      id: 3,
      name: 'Health Care',
      image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      products: [
        { id: 7, name: 'Vitamins', price: 24.99 },
        { id: 8, name: 'Protein Powder', price: 29.99 },
        { id: 9, name: 'Detox Tea', price: 12.99 }
      ]
    },
    {
      id: 4,
      name: 'Beard Care',
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      products: [
        { id: 10, name: 'Beard Oil', price: 16.99 },
        { id: 11, name: 'Beard Balm', price: 18.99 },
        { id: 12, name: 'Beard Brush', price: 9.99 }
      ]
    },
    {
      id: 5,
      name: 'Beauty Care',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      products: [
        { id: 13, name: 'Face Cream', price: 22.99 },
        { id: 14, name: 'Lip Balm', price: 7.99 },
        { id: 15, name: 'Eye Serum', price: 29.99 }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Product Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full ${activeCategory === category.id ? 'bg-pink-600 text-white' : 'bg-white text-gray-800'} transition`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories
            .find(cat => cat.id === activeCategory)
            .products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={categories.find(cat => cat.id === activeCategory).image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                  <p className="text-pink-600 font-bold mb-4">${product.price.toFixed(2)}</p>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button
                    onClick={addToCart}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-full transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;