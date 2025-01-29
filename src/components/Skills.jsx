import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const skills = [
    { name: "React", iconClass: "fab fa-react", color: "#61DAFB" },
    { name: "JavaScript", iconClass: "fab fa-js-square", color: "#F7DF1E" },
    { name: "Python", iconClass: "fab fa-python", color: "#3776AB" },
    { name: "Node.js", iconClass: "fab fa-node-js", color: "#339933" },
    { name: "MongoDB", iconClass: "fas fa-leaf", color: "#47A248" },
    { name: "Tailwind CSS", iconClass: "fab fa-css3-alt", color: "#38BDF8" },
    { name: "Git", iconClass: "fab fa-git-alt", color: "#F05032" },
    { name: "Docker", iconClass: "fab fa-docker", color: "#2496ED" },
    { name: "AWS", iconClass: "fab fa-aws", color: "#FF9900" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust based on screen size
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-gray-100">
          My <span className="text-blue-400">Skills & Expertise</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          A collection of the technologies and tools I work with to build innovative and scalable solutions.
        </p>

        {/* Skills Carousel */}
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="p-4">
              <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                {/* Icon */}
                <div className="text-6xl" style={{ color: skill.color }}>
                  <i className={skill.iconClass}></i>
                </div>
                {/* Skill Name */}
                <h3 className="mt-4 text-xl font-semibold text-gray-300">{skill.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
