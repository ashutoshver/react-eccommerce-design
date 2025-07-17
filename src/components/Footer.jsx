import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', link: '#' },
    { name: 'Products', link: '#' },
    { name: 'Reviews', link: '#' },
    { name: 'Blogs', link: '#' },
    { name: 'Contact Us', link: '#' }
  ];

  const productCategories = [
    { name: 'Hair Care', link: '#' },
    { name: 'Stress Care', link: '#' },
    { name: 'Health Care', link: '#' },
    { name: 'Beard Care', link: '#' },
    { name: 'Beauty Care', link: '#' }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, link: '#' },
    { icon: <FaTwitter />, link: '#' },
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaLinkedin />, link: '#' }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-pink-600"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Locate Us */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Locate Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-pink-600 mt-1 mr-3" />
                <p>123 Beauty Street, Cosmetic City, CC 12345</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-pink-600 mr-3" />
                <p>+1 (123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-pink-600 mr-3" />
                <p>info@beautyshop.com</p>
              </div>
            </div>
            <div className="mt-6 h-48 bg-gray-800 rounded-lg overflow-hidden">
              {/* This would be a map component in a real implementation */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <FaMapMarkerAlt className="text-3xl text-pink-600" />
                <span className="ml-2">Map Location</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-gray-400 hover:text-pink-600 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-bold mt-8 mb-6">Product Categories</h3>
            <ul className="space-y-2">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.link}
                    className="text-gray-400 hover:text-pink-600 transition"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-l focus:outline-none focus:ring-2 focus:ring-pink-600 w-full"
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-r transition"
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BeautyShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;