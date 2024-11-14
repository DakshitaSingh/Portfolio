import React from 'react';

// Import your images (LeetCode streak, CodeChef, CodeForces logos, etc.)
import leetcodeLogo from '../assets/Leetcode.png';
import codechefLogo from '../assets/codechef.jpeg';
import codeforcesLogo from '../assets/codeforces.jpeg';
import leetcodeStreakImage from '../assets/leetcode-streak.png';  // Your streak image for LeetCode
import codechefRating from '../assets/codechef-rating.png'; // Your CodeChef rating image
import codeforcesRating from '../assets/codeforces-rating.png'; // Your CodeForces rating image
import hackerrankLogo from '../assets/hackerrank.jpeg';
import hackerrankBadge from '../assets/hackerrank-badge.png';
import courseraImage from '../assets/coursera.jpeg';  // Image for the Coursera course certificate

const About = () => {
  return (
    <div className="py-12 px-6 max-w-screen-xl mx-auto">
      {/* Introduction */}
      <h2 className="text-4xl font-semibold text-center mb-6 text-gray-800">Hi, I'm Dakshita Singh</h2>
      <p className="text-center text-lg mb-8 text-gray-700 font-serif">
        I'm a Computer Science and Engineering student passionate about coding, technology, and solving real-world problems through innovative solutions.
      </p>

      {/* Coding Achievements Section */}
      <h3 className="text-3xl font-semibold mt-12 mb-6 text-center text-gray-800 font-serif">Coding Achievements</h3>

      {/* LeetCode Achievement */}
      <div className="flex items-center mb-12 bg-gradient-to-r from-blue-600 to-blue-400 p-8 rounded-lg shadow-xl">
        <div className="flex-none w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
          <a href="https://leetcode.com/u/Dakshita_Singh/" target="_blank" rel="noopener noreferrer">
            <img
              src={leetcodeLogo}
              alt="LeetCode Logo"
              className="w-full h-full object-contain rounded-full border-4 border-white"
            />
          </a>
        </div>
        <div className="ml-6 flex-1">
          <h4 className="text-2xl font-semibold text-white">LeetCode</h4>
          <p className="text-md text-white mb-4">
            Achieved a 200-day streak and consistently rank in the top 10% of coders. Solved over 500+ problems and enhanced my problem-solving skills.
          </p>
          <div className="flex items-center mt-4">
            <img
              src={leetcodeStreakImage}
              alt="LeetCode Streak"
              className="w-32 h-32 rounded-full border-4 border-white"
            />
            <span className="ml-4 text-lg text-white font-semibold">Max. Rating: 1575</span>
          </div>
        </div>
      </div>

      {/* CodeChef Achievement */}
      <div className="flex items-center mb-12 bg-gradient-to-r from-orange-500 to-yellow-400 p-8 rounded-lg shadow-xl">
        <div className="flex-none w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
          <a href="https://www.codechef.com/users/dakshitasingh" target="_blank" rel="noopener noreferrer">
            <img
              src={codechefLogo}
              alt="CodeChef Logo"
              className="w-full h-full object-contain rounded-full border-4 border-white"
            />
          </a>
        </div>
        <div className="ml-6 flex-1">
          <h4 className="text-2xl font-semibold text-white">CodeChef</h4>
          <p className="text-md text-white mb-4">
            Achieved a 2-star rank and actively participate in monthly challenges. I've completed numerous challenges and improved my coding under time pressure.Got global rank <b>86</b> in Starters <b>159</b> among apprx. <b>38000 folks</b>.
          </p>
          <div className="flex items-center mt-4">
            <img
              src={codechefRating}
              alt="CodeChef Rating"
              className="w-32 h-32 rounded-full border-4 border-white"
            />
            <span className="ml-4 text-lg text-white font-semibold">2-star rating</span>
          </div>
        </div>
      </div>

      {/* CodeForces Achievement */}
      <div className="flex items-center mb-12 bg-gradient-to-r from-purple-600 to-indigo-500 p-8 rounded-lg shadow-xl">
        <div className="flex-none w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
          <a href="https://codeforces.com/profile/Dakshita_Singh" target="_blank" rel="noopener noreferrer">
            <img
              src={codeforcesLogo}
              alt="CodeForces Logo"
              className="w-full h-full object-contain rounded-full border-4 border-white"
            />
          </a>
        </div>
        <div className="ml-6 flex-1">
          <h4 className="text-2xl font-semibold text-white">CodeForces</h4>
          <p className="text-md text-white mb-4">
            Current Rating: 1051. I have actively participated in contests to improve my speed and problem-solving approach.
          </p>
          <div className="flex items-center mt-4">
            <img
              src={codeforcesRating}
              alt="CodeForces Rating"
              className="w-32 h-32 rounded-full border-4 border-white"
            />
            <span className="ml-4 text-lg text-white font-semibold">max. 1051 rating</span>
          </div>
        </div>
      </div>

      {/* Additional Achievements */}
      <div className="flex items-center mb-12 bg-gradient-to-r from-green-500 to-teal-400 p-8 rounded-lg shadow-xl">
        <div className="flex-none w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
          <a href="https://www.hackerrank.com/dashboard" target="_blank" rel="noopener noreferrer">
            <img
              src={hackerrankLogo}
              alt="HackerRank Logo"
              className="w-full h-full object-contain rounded-full border-4 border-white"
            />
          </a>
        </div>
        <div className="ml-6 flex-1">
          <h4 className="text-2xl font-semibold text-white">HackerRank</h4>
          <p className="text-md text-white mb-4">
            Achieved 4 star in problem solving and 5 star in C++ language. Focused on mastering DSA concepts and problem-solving in a variety of domains.
          </p>
          <div className="flex items-center mt-4">
            <img
              src={hackerrankBadge}
              alt="HackerRank Badge"
              className="w-32 h-32 rounded-full border-4 border-white"
            />
            <span className="ml-4 text-lg text-white font-semibold">Badges earned</span>
          </div>
        </div>
      </div>

      {/* Coursera Machine Learning Course Section */}
      <h3 className="text-3xl font-semibold mt-12 mb-6 text-center text-gray-800 font-serif">Machine Learning Course (Coursera)</h3>
      <div className="flex items-center mb-12 bg-gradient-to-r from-blue-600 to-blue-400 p-12 rounded-lg shadow-xl">
        <div className="flex-none w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
          <img
            src={courseraImage}
            alt="Coursera Course Certificate"
            className="w-full h-full object-contain rounded-lg border-4 border-white"
          />
        </div>
        <div className="ml-8 flex-1">
          <h4 className="text-2xl font-semibold text-white">Coursera - Linear Regression and Classification</h4>
          <p className="text-md text-white mb-4">
            Completed the Linear Regression and Classification course on Coursera, which sparked my deep interest in Machine Learning. The course strengthened my foundational understanding of key ML concepts and practical applications.
          </p>
          <a 
            href="https://www.coursera.org/account/accomplishments/verify/LWY6VE2Y7F54"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md text-white font-semibold underline"
          >
            View Certificate
          </a>
        </div>
      </div>

    </div>
  );
};

export default About;
