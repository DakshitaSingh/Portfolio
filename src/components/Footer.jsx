import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-lg">
          &copy; {new Date().getFullYear()} Dakshita Singh. All rights reserved.
        </p>
        <div className="mt-4">
          <a
            href="mailto:dakshitasingh2222@gmail.com"
            className="text-blue-400 hover:text-blue-600"
          >
            Contact Me
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://github.com/DakshitaSingh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            GitHub
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://www.linkedin.com/in/dakshita-singh-784557281/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
