import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const VideoTestimonials = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [durations, setDurations] = useState({});
  const [currentTimes, setCurrentTimes] = useState({});
  const videoRefs = useRef([]);
  const animationRefs = useRef({});

  const videoTestimonials = [
    {
      id: 1,
      title: 'Amazing Products!',
      videoUrl: 'https://videos.pexels.com/video-files/3182019/3182019-uhd_2560_1440_25fps.mp4',
      thumbnail: 'https://media.istockphoto.com/id/1150981471/video/close-up-of-woman-squeezing-cream-on-fingers.jpg?b=1&s=640x640&k=20&c=NBA2EMW2uvY9HBJOi4d_JFIvCcEzvo_8qUvFVkk2aoQ='
    },
    {
      id: 2,
      title: 'Life Changing Results',
      videoUrl: 'https://videos.pexels.com/video-files/3181590/3181590-uhd_2560_1440_25fps.mp4',
      thumbnail: 'https://media.istockphoto.com/id/906626750/video/4k-top-view-and-turning-of-cosmetic-and-brush-collection.jpg?b=1&s=640x640&k=20&c=1BiyYYkoLkMIeF1UdC-HKlNMKsvS2X7fgMwvcLSIha8='
    },
    {
      id: 3,
      title: 'Highly Recommended',
      videoUrl: 'https://videos.pexels.com/video-files/10609734/10609734-uhd_2732_1440_25fps.mp4',
      thumbnail: 'https://media.istockphoto.com/id/2162638735/video/white-cosmetic-products-bottles-with-silver-caps-on-white-fabric.jpg?b=1&s=640x640&k=20&c=gvM91GgOyC0sW7fx9EHILr1dMbGlg8YiLjv8OAdls-g='
    }
  ];

  const formatDuration = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const togglePlay = (id) => {
    if (playingVideo === id) {
      videoRefs.current[id].pause();
      cancelAnimationFrame(animationRefs.current[id]);
      setPlayingVideo(null);
    } else {
      if (playingVideo !== null) {
        videoRefs.current[playingVideo].pause();
        cancelAnimationFrame(animationRefs.current[playingVideo]);
      }
      
      videoRefs.current[id].play();
      setPlayingVideo(id);
      updateCurrentTime(id);
    }
  };

  const updateCurrentTime = (id) => {
    setCurrentTimes(prev => ({
      ...prev,
      [id]: videoRefs.current[id].currentTime
    }));
    
    animationRefs.current[id] = requestAnimationFrame(() => updateCurrentTime(id));
  };

  const handleLoadedMetadata = (id, e) => {
    setDurations(prev => ({
      ...prev,
      [id]: e.target.duration
    }));
  };

  useEffect(() => {
    return () => {
      Object.values(animationRefs.current).forEach(cancelAnimationFrame);
    };
  }, []);

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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Video Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our customers have to say about our products and services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoTestimonials.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="overflow-hidden rounded-lg">
                <video
                  ref={el => videoRefs.current[video.id] = el}
                  src={video.videoUrl}
                  poster={video.thumbnail}
                  className="w-full h-64 object-cover"
                  onClick={() => togglePlay(video.id)}
                  loop
                  onLoadedMetadata={(e) => handleLoadedMetadata(video.id, e)}
                  muted
                />
                
                <div 
                  className={`absolute inset-0 flex items-center justify-center ${playingVideo === video.id ? 'opacity-0' : 'opacity-100'} transition-opacity`}
                  onClick={() => togglePlay(video.id)}
                >
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-semibold">{video.title}</h3>
                  <p className="text-gray-300 text-sm">
                    {playingVideo === video.id ? (
                      <>
                        {formatDuration(currentTimes[video.id] || 0)} / {formatDuration(durations[video.id] || 0)}
                      </>
                    ) : (
                      formatDuration(durations[video.id] || 0)
                    )}
                  </p>
                  {playingVideo === video.id && (
                    <div className="w-full bg-gray-600 rounded-full h-1 mt-2">
                      <div 
                        className="bg-pink-600 h-1 rounded-full" 
                        style={{
                          width: `${((currentTimes[video.id] || 0) / (durations[video.id] || 1) * 100)}%`
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;