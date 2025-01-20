import React from 'react';
import { motion } from 'framer-motion';
import prof from '../image/profile.jpg';

const Profile = () => {
  const skills = [
    { name: "C++", icon: "fas fa-cogs" },
    { name: "Python", icon: "fab fa-python" },
    { name: "React.js", icon: "fab fa-react" },
    { name: "Tailwind CSS", icon: "fab fa-css3-alt" },
    { name: "Machine Learning", icon: "fas fa-brain" },
    { name: "Data Science", icon: "fas fa-chart-line" },
    { name: "SQL", icon: "fas fa-database" },
    { name: "Adobe Photoshop", icon: "fab fa-adobe" },
    { name: "Adobe Premiere Pro", icon: "fab fa-adobe" },
  ];

  const education = [
    {
      degree: "B.Tech (CSE)",
      place: "Arya College of Engineering & IT",
      year: "2019–2023",
      score: "90%",
    },
    {
      degree: "Senior Secondary",
      place: "Kendriya Vidyalaya No. 1",
      year: "2017–2018",
      score: "68.2%",
    },
    {
      degree: "Secondary",
      place: "Kendriya Vidyalaya, Misa Camp",
      year: "2015–2016",
      score: "85%",
    },
  ];

  const achievements = [
    "Gold Medal - National Karate Championship (2016)",
    "Silver Medal - National Karate Championship (2018)",
    "YouTube Channel with 2k Subscribers",
    "Participated in Code Innovation Series powered by GitHub",
    "Active participant in college sports activities",
  ];

  const hobbies = [
    "Cooking",
    "Sports (Volleyball, Karate)",
    "Exploring new technologies",
    "Content Creation",
  ];

  const experience = [
    {
      jobTitle: "Subject Matter Expert",
      company: "Chegg",
      dates: "Mar 2023 – Jun 2023",
      description: "Provided guidance and solved complex computer science topics, assisting students in understanding key concepts and improving academic performance.",
    },
    {
      jobTitle: "Data Science Intern",
      company: "The Spark Foundation",
      dates: "Feb 2022 – Apr 2022",
      description: "Worked on data analysis projects, implemented clustering algorithms for data segmentation, and helped derive actionable insights to improve business decisions.",
    },
  ];

  return (
    <section className="min-h-screen bg-white p-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-extrabold text-blue-700">About Me</h2>
        <p className="text-gray-700 mt-4 text-lg">
          Hi, I'm <span className="font-semibold text-black">Dheeraj Kumar</span>, a software developer and data science enthusiast with a passion for building innovative projects and creating meaningful content.
        </p>
      </motion.div>

      {/* Profile Image and Description */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center justify-center gap-12"
      >
        <img
          src={prof}
          alt="Profile"
          className="rounded-full w-40 h-40 object-cover mb-6 md:mb-0 border-4 border-blue-500"
        />
        <div className="max-w-xl">
          <p className="text-gray-800 text-lg">
            I'm a passionate software developer focused on web development, machine learning, and solving real-world problems. When I'm not coding, I enjoy exploring new technologies, sports, and content creation.
          </p>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-16"
      >
        <h3 className="text-3xl font-semibold text-blue-700 mb-6">Education</h3>
        <ul className="space-y-6">
          {education.map((edu, index) => (
            <motion.li
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
            >
              <h4 className="text-xl font-bold text-blue-700">{edu.degree}</h4>
              <p className="text-blue-600">{edu.place}</p>
              <p className="text-blue-500">{edu.year} - {edu.score}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-16"
      >
        <h3 className="text-3xl font-semibold text-blue-700 mb-6">Experience</h3>
        <ul className="space-y-6">
          {experience.map((job, index) => (
            <motion.li
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
            >
              <h4 className="text-xl font-bold text-blue-700">{job.jobTitle}</h4>
              <p className="text-blue-600">{job.company}</p>
              <p className="text-blue-500">{job.dates}</p>
              <p className="text-blue-700">{job.description}</p>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-16"
      >
        <h3 className="text-3xl font-semibold text-blue-700 mb-6">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-white text-blue-700 px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border-l-4 border-blue-500"
            >
              <i className={`${skill.icon} text-3xl mr-3`}></i>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-16"
      >
        <h3 className="text-3xl font-semibold text-blue-700 mb-6">Achievements</h3>
        <ul className="list-disc list-inside space-y-4 text-gray-800">
          {achievements.map((achievement, index) => (
            <motion.li
              key={index}
              className="text-lg"
            >
              {achievement}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Hobbies Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-16"
      >
        <h3 className="text-3xl font-semibold text-blue-700 mb-6">Hobbies</h3>
        <ul className="flex flex-wrap gap-6">
          {hobbies.map((hobby, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-white text-blue-700 px-6 py-3 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              {hobby}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Profile;
