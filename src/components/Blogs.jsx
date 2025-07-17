import { motion } from 'framer-motion';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: '10 Tips for Healthy Hair',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'May 15, 2023',
      image: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Hair Care'
    },
    {
      id: 2,
      title: 'The Importance of Self-Care',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'June 2, 2023',
      image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'Wellness'
    },
    {
      id: 3,
      title: 'Natural Beauty Remedies',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: 'June 18, 2023',
      image: 'https://www.shutterstock.com/shutterstock/photos/92774089/display_1500/stock-photo-natural-homemade-facial-masks-at-home-92774089.jpg',
      category: 'Beauty'
    }
  ];

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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Blogs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-pink-600 uppercase tracking-wider">{blog.category}</span>
                  <span className="text-xs text-gray-500">{blog.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <a
                  href="#"
                  className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center transition"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;