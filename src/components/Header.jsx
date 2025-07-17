import { useState } from 'react';
import { FaSearch, FaShoppingCart, FaChevronDown, FaTimes } from 'react-icons/fa';

const Header = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const productCategories = [
    'Hair care',
    'Stress care',
    'Health care',
    'Beard care',
    'Beauty care'
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-pink-600">BeautyShop</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-800 hover:text-pink-600 transition">Home</a>
            
            <div className="relative">
              <button 
                onClick={toggleProducts}
                className="flex items-center text-gray-800 hover:text-pink-600 transition"
              >
                Products <FaChevronDown className="ml-1 text-xs" />
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {productCategories.map((category, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="block px-4 py-2 text-gray-800 hover:bg-pink-50 hover:text-pink-600"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a href="#" className="text-gray-800 hover:text-pink-600 transition">Reviews</a>
            <a href="#" className="text-gray-800 hover:text-pink-600 transition">Blogs</a>
            <a href="#" className="text-gray-800 hover:text-pink-600 transition">Contact Us</a>
          </nav>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            
            <div className="relative">
              <FaShoppingCart className="text-2xl text-gray-700 hover:text-pink-600 cursor-pointer" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {cartItems}
                </span>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slideDown">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-800 hover:text-pink-600 transition">Home</a>
              
              <div>
                <button 
                  onClick={toggleProducts}
                  className="flex items-center text-gray-800 hover:text-pink-600 transition"
                >
                  Products <FaChevronDown className={`ml-1 text-xs transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProductsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {productCategories.map((category, index) => (
                      <a 
                        key={index}
                        href="#" 
                        className="block text-gray-700 hover:text-pink-600"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="#" className="text-gray-800 hover:text-pink-600 transition">Reviews</a>
              <a href="#" className="text-gray-800 hover:text-pink-600 transition">Blogs</a>
              <a href="#" className="text-gray-800 hover:text-pink-600 transition">Contact Us</a>
            </div>
            
            <div className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
              
              <div className="flex items-center mt-3">
                <FaShoppingCart className="text-2xl text-gray-700 hover:text-pink-600 cursor-pointer" />
                {cartItems > 0 && (
                  <span className="ml-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                    {cartItems}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;