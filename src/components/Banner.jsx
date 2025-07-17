import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import banner1 from '../assets/banner-1.jpg'
import banner2 from '../assets/banner-2.jpg'
import banner3 from '../assets/banner-3.jpg'

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const banners = [
    {
      id: 1,
      title: 'Summer Sale',
      description: 'Get up to 50% off on all products',
      image: banner1
    },
    {
      id: 2,
      title: 'New Arrivals',
      description: 'Discover our latest collection',
      image: banner2
    },
    {
      id: 3,
      title: 'Premium Quality',
      description: 'Only the best for your beauty needs',
      image: banner3
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section className="relative h-120 overflow-hidden">
      {banners.map((banner, index) => (
        <motion.div
          key={banner.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentSlide ? 1 : 0,
            transition: { duration: 1 }
          }}
          className={`absolute inset-0 w-full h-full bg-cover bg-center ${index === currentSlide ? 'block' : 'hidden'}`}
          style={{ backgroundImage: `url(${banner.image})` }}
        >
          <div className="absolute inset-0 bg-opacity-40 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: index === currentSlide ? 0 : -100,
                  opacity: index === currentSlide ? 1 : 0,
                  transition: { delay: 0.5, duration: 0.8 }
                }}
                className="text-white max-w-lg"
              >
                <h2 className="text-4xl font-bold mb-3">{banner.title}</h2>
                <p className="text-xl mb-6">{banner.description}</p>
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full transition">
                  Shop Now
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-pink-600' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;