// src/pages/Project.jsx
import React from 'react';

// Import images from the assets folder
import weatherImage from '../assets/weather.jpg';
import stopwatchImage from '../assets/stopwatch.jpeg';  // Corrected image name
import recipeImage from '../assets/recipe.jpg';
import todoImage from '../assets/todo.png';  // Corrected image name

// Import GitHub icon from React Icons
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Weather App",
    description: "A weather application that fetches live weather data using an API.",
    link: "https://github.com/DakshitaSingh/PRODIGY_WD_05", // Link to GitHub project
    image: weatherImage, // Use imported image
  },
  {
    title: "Stopwatch App",
    description: "A simple stopwatch app with start, stop, and reset functionalities.",
    link: "https://github.com/DakshitaSingh/PRODIGY_WD_02", // Link to GitHub project
    image: stopwatchImage, // Use imported image
  },
  {
    title: "ToDo App",
    description: "A to-do list app to help manage tasks with add, edit, and delete functionalities.",
    link: "https://github.com/DakshitaSingh/ToDoList", // Link to GitHub project
    image: todoImage, // Use imported image
  },
  {
    title: "Recipe WebApp",
    description: "A recipe web app that provides various recipes with ingredients and steps.",
    link: "https://github.com/DakshitaSingh/Recipe-template", // Link to GitHub project
    image: recipeImage, // Use imported image
  },
];

const Project = () => {
  return (
    <div className="py-8 px-4">
      {/* Grid container for 2 cards per row with adjusted column and row gaps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-4 gap-y-8 justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-xs mx-auto bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105 hover:rotate-3 transform transition duration-300 ease-in-out"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-center mb-2">{project.title}</h3>
              <p className="text-center text-sm text-gray-700 mb-4">{project.description}</p>

              {/* GitHub Link */}
              <div className="mt-4 text-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex justify-center items-center space-x-2"
                >
                  {/* GitHub Icon */}
                  <FaGithub className="text-xl" />
                  <span>Check here</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
