import React, { useState } from 'react';

const ProjectCard = ({ title, description, tags, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              {tag}
            </span>
          ))}
        </div>
        {isHovered && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/yourusername/ecommerce-project"
    },
    {
      title: "Weather App",
      description: "A responsive weather application using OpenWeatherMap API.",
      tags: ["JavaScript", "API", "CSS"],
      link: "https://github.com/yourusername/weather-app"
    },
    {
      title: "Task Manager",
      description: "A React-based task management application with local storage.",
      tags: ["React", "LocalStorage", "CSS"],
      link: "https://github.com/yourusername/task-manager"
    }
  ];

  return (
    <section id="projects" className="p-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;