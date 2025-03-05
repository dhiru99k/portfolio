import React from 'react';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Youtube = () => {
  const thumbnails = [
    {
      img: "https://img.youtube.com/vi/RpbZRymimek/0.jpg",
      title: "Top 5 Collections",
      link: "https://www.youtube.com/watch?v=RpbZRymimek",
    },
    {
      img: "https://img.youtube.com/vi/-ShHLPHIElw/0.jpg",
      title: "Sequence Diagram - ATM System",
      link: "https://www.youtube.com/watch?v=-ShHLPHIElw",
    },
    {
      img: "https://img.youtube.com/vi/aQ0Ge1P_aD8/0.jpg",
      title: "10 Animals Not Allowed As Pets In India",
      link: "https://www.youtube.com/shorts/aQ0Ge1P_aD8",
    },
    {
      img: "https://img.youtube.com/vi/8BM-uorjFIE/0.jpg",
      title: "Pizza Recipe",
      link: "https://www.youtube.com/watch?v=8BM-uorjFIE",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 p-8">
      {/* Title and Description */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold text-blue-800 mb-4">My YouTube Channels</h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          Explore my passion for cooking and education through my YouTube channels. Join thousands of subscribers and enjoy insightful and entertaining content!
        </p>
      </motion.div>

      {/* YouTube Channels Section */}
      <div className="flex flex-col md:flex-row gap-12 justify-center items-center mb-16">
        {[{
          title: "The Hungry Chauhan",
          desc: "Join 2k+ subscribers for delicious recipes and exciting food tips.",
          video: "RpbZRymimek",
          link: "https://www.youtube.com/thehungrychauhan",
          gradient: "from-red-600 to-red-500",
        }, {
          title: "Think Big Think Right",
          desc: "Discover fascinating facts and educational content. Join 800+ subscribers!",
          video: "-ShHLPHIElw",
          link: "https://www.youtube.com/@thinkbigthinkright",
          gradient: "from-blue-600 to-blue-500",
        }].map((channel, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl rounded-lg overflow-hidden w-full md:w-96 transform transition-all duration-500 hover:shadow-2xl"
          >
            <iframe
              className="w-full h-64 md:h-80"
              src={`https://www.youtube.com/embed/${channel.video}`}
              title={channel.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className={`p-6 text-center bg-gradient-to-r ${channel.gradient} text-white`}>
              <h3 className="text-2xl font-semibold">{channel.title}</h3>
              <p className="text-gray-100">{channel.desc}</p>
              <a
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300"
              >
                Visit Channel
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Thumbnails Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-extrabold text-center text-blue-800 mb-8">Explore My YouTube Videos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {thumbnails.map((video, index) => (
            <motion.a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="block bg-white shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={video.img}
                alt={video.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-800">{video.title}</h4>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Youtube;
