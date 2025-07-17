import { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import WhyChooseUs from './components/WhyChooseUs';
import ProductCategories from './components/ProductCategories';
import ComboOffers from './components/ComboOffers';
import Testimonials from './components/Testimonials';
import Bestsellers from './components/Bestsellers';
import Blogs from './components/Blogs';
import VideoTestimonials from './components/VideoTestimonials';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <div className="font-sans bg-gray-50">
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <Banner />
      <WhyChooseUs />
      <ProductCategories setCartItems={setCartItems} />
      <ComboOffers setCartItems={setCartItems} />
      <Testimonials />
      <VideoTestimonials />
      <Bestsellers setCartItems={setCartItems} />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;