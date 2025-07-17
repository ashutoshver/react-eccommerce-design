import { motion } from 'framer-motion';
import { useState } from 'react';

const ComboOffers = ({ setCartItems }) => {
  const combos = [
    {
      id: 1,
      name: 'Hair Care Combo',
      description: 'Shampoo + Conditioner + Hair Oil',
      originalPrice: 37.97,
      discountPrice: 29.99,
      image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 2,
      name: 'Relaxation Combo',
      description: 'Essential Oils + Candle + Tea',
      originalPrice: 44.97,
      discountPrice: 34.99,
      image: 'https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
      id: 3,
      name: 'Beauty Combo',
      description: 'Face Cream + Lip Balm + Eye Serum',
      originalPrice: 60.97,
      discountPrice: 49.99,
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    }
  ];

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Combo Offers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {combos.map((combo, index) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={combo.image}
                  alt={combo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Save ${(combo.originalPrice - combo.discountPrice).toFixed(2)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{combo.name}</h3>
                <p className="text-gray-600 mb-4">{combo.description}</p>
                <div className="flex items-center mb-4">
                  <span className="text-pink-600 font-bold text-xl">${combo.discountPrice.toFixed(2)}</span>
                  <span className="ml-2 text-gray-500 line-through">${combo.originalPrice.toFixed(2)}</span>
                </div>
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

export default ComboOffers;