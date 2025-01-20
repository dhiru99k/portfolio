import React from 'react';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Youtube = () => {
  // Thumbnails data (Replace with actual YouTube video thumbnails and links)
  const thumbnails = [
    {
      img: "https://img.youtube.com/vi/RpbZRymimek/0.jpg", // Cooking Video Thumbnail
      title: "Top 5 Collections",
      link: "https://www.youtube.com/watch?v=RpbZRymimek",
    },
    {
      img: "https://img.youtube.com/vi/-ShHLPHIElw/0.jpg", // Education Video Thumbnail
      title: "Sequence Diagram- Atm System",
      link: "https://www.youtube.com/watch?v=-ShHLPHIElw",
    },
    {
      img: "https://img.youtube.com/vi/aQ0Ge1P_aD8/0.jpg", // Replace with another thumbnail
      title: "10 Animals Not Allowed As Pets In India",
      link: "https://www.youtube.com/shorts/aQ0Ge1P_aD8",
    },
    {
      img: "https://img.youtube.com/vi/8BM-uorjFIE/0.jpg", // Replace with another thumbnail
      title: "Pizza Recipe",
      link: "https://www.youtube.com/watch?v=8BM-uorjFIE",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 via-lightBlue-100 to-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-extrabold text-blue-600 mb-6">My YouTube Channels</h2>
        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Explore my passion for cooking and education through my YouTube channels. Join thousands of subscribers and learn something new every day!
        </p>
      </motion.div>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Cooking Channel */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-2xl rounded-lg overflow-hidden w-full md:w-96 transform transition-all duration-500 hover:shadow-2xl"
        >
          <iframe
            className="w-full h-64 md:h-80"
            src="https://www.youtube.com/embed/RpbZRymimek"
            title="Cooking Channel Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="p-6 text-center bg-gradient-to-r from-red-600 to-red-500 text-white">
            <h3 className="text-2xl font-semibold">The Hungry Chauhan</h3>
            <p className="text-gray-100">
              Join 2k+ subscribers for delicious recipes and exciting food tips.
            </p>
            <a
              href="https://www.youtube.com/thehungrychauhan"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300"
            >
              Visit Channel
            </a>
          </div>
        </motion.div>

        {/* Education and Facts Channel */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-2xl rounded-lg overflow-hidden w-full md:w-96 transform transition-all duration-500 hover:shadow-2xl"
        >
          <iframe
            className="w-full h-64 md:h-80"
            src="https://www.youtube.com/embed/-ShHLPHIElw"
            title="Education and Facts Channel Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="p-6 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white">
            <h3 className="text-2xl font-semibold">Think Big Think Right</h3>
            <p className="text-gray-100">
              Discover fascinating facts and educational content. Join 800+ subscribers!
            </p>
            <a
              href="https://www.youtube.com/@thinkbigthinkright"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300"
            >
              Visit Channel
            </a>
          </div>
        </motion.div>
      </div>

      {/* Thumbnails Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-extrabold text-center text-blue-600 mb-8">Explore My YouTube Thumbnails</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
