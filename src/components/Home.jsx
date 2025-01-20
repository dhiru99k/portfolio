import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import bg from '../image/1.jpg';
import prof from '../image/profile.jpg';

const Home = () => {
  // Utility function for scroll animation
  const Section = ({ children, id, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.section
        ref={ref}
        id={id}
        className={className}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.section>
    );
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-lightblue-500 text-white py-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}></div>
        <div className="relative container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold mb-4"
          >
            Passion for Code, Drive for Impact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="text-lg md:text-xl mb-8"
          >
            I'm a passionate software developer, data science enthusiast, and lifelong learner. Let's build something amazing together!
          </motion.p>
          <motion.a
            href="#about"
            className="bg-black text-white px-8 py-3 rounded-full shadow-md transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Learn More
          </motion.a>
        </div>
      </section>

      {/* About Me Section */}
      <Section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.img
              src={prof}
              alt="Profile"
              className="rounded-full w-40 h-40 object-cover"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
            <div className="max-w-xl">
              <p className="text-gray-700 text-lg">
                Hi, I'm Dheeraj Kumar, a software developer with a passion for building innovative projects. I specialize in web development, machine learning, and creating solutions that make a difference. When I'm not coding, you can find me exploring new technologies and cooking delicious meals!
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills & Expertise Section */}
      <Section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Skills & Expertise</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Skill Cards */}
            {['React', 'Python', 'JavaScript', 'SQL'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <i
                  className={`text-4xl ${
                    skill === 'React'
                      ? 'fab fa-react text-blue-500'
                      : skill === 'Python'
                      ? 'fab fa-python text-yellow-500'
                      : skill === 'JavaScript'
                      ? 'fab fa-js-square text-yellow-500'
                      : 'fas fa-database text-green-500'
                  } mb-4`}
                ></i>
                <h3 className="text-xl font-semibold text-blue-600">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section className="py-16 bg-gradient-to-r from-blue-500 to-lightblue-500">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Upcoming Projects..</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2].map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: project * 0.2, duration: 1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src="https://via.placeholder.com/500"
                  alt={`Project ${project}`}
                  className="w-full h-64 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {project === 1 ? 'Recipe Sharing Platform' : 'Fitness Tracker'}
                </h3>
                <p className="text-gray-600">
                  {project === 1
                    ? 'A platform to share and explore amazing recipes from around the world.'
                    : 'Track your workouts, nutrition, and progress with interactive graphs.'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
