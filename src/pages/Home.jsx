import React from "react";
import { ReactTyped } from "react-typed";
import {
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJs,
  FaReact,
  FaCogs,
  FaBrain,
} from "react-icons/fa";

import hiImage from "../assets/bgg.jpg";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";

const Home = () => {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
        <div className="flex flex-col md:flex-row relative">
          {/* Removed background image overlay */}

          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1 relative z-10">
            <span className="text-xl">Welcome to My Portfolio Website</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Hi, I am Dakshita Singh."]}
                typeSpeed={80}
                backSpeed={60}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-base text-justify leading-relaxed font-normal tracking-wide text-gray-800 md:text-gray-700">
              I'm a second-year CSE student with a strong grasp of DSA and a passion for competitive programming on platforms like LeetCode, CodeChef, and CodeForces. I aspire to become an SDE, actively explore Web Development and Machine Learning, and serve as an executive member of my college’s Coders & Developers Club.
            </p>
          </div>

          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 relative z-10">
            <img src={hiImage} className="rounded-full md:w-[450px] md:h-[450px]" alt="Hi" />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="w-full py-16 text-white" style={{ background: 'linear-gradient(45deg, #f3e1c4, #e4d1b5)' }}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-black mb-2">Skills</h2>
          <div className="h-1 w-16 mx-auto bg-brown-500 mb-8"></div>
          <p className="text-lg font-medium text-black text-center mb-12">
            Here are the key skills I've developed throughout my journey:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg shadow-lg p-6 hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-center text-blue-400">Programming Languages</h3>
              <div className="flex justify-center mb-4">
                <FaCode className="text-4xl text-gray-300" />
              </div>
              <p className="text-gray-300 text-center">
                Proficient in C++, Python, and JavaScript. Able to write efficient and optimized code for competitive programming and projects.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6 hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-center text-green-400">Web Development</h3>
              <div className="flex justify-center mb-4">
                <FaHtml5 className="text-4xl text-gray-300" />
                <FaCss3Alt className="text-4xl text-gray-300 ml-4" />
                <FaJs className="text-4xl text-gray-300 ml-4" />
              </div>
              <p className="text-gray-300 text-center">
                Experience with HTML, CSS, JavaScript, React, Node.js, and Express.js for building full-stack web applications.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6 hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-center text-yellow-400">Data Structures & Algorithms</h3>
              <div className="flex justify-center mb-4">
                <FaCogs className="text-4xl text-gray-300" />
              </div>
              <p className="text-gray-300 text-center">
                Strong understanding of algorithms, data structures, and problem-solving techniques. Actively participate in competitive programming contests.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg shadow-lg p-6 hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-center text-purple-400">Machine Learning</h3>
              <div className="flex justify-center mb-4">
                <FaBrain className="text-4xl text-gray-300" />
              </div>
              <p className="text-gray-300 text-center">
                Familiar with key machine learning concepts and libraries like scikit-learn, TensorFlow, and Keras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="w-full py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Syntax Siege , Algo Hunt, Codigo Competitions of my college</h2>
          <p className="text-lg font-medium text-gray-400 text-center mb-12">
            Here are the photos from the team-based and individual coding events where I participated and won also.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg shadow-lg">
              <img src={img1} alt="Siege Event" className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center text-blue-400">Syntax-Siege : Team-Based Coding Event</h3>
                <p className="text-gray-300 text-center">A memorable experience at the Syntax Siege event where I worked with my team to solve challenging problems.</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg">
              <img src={img2} alt="Algo Hunt Event" className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center text-green-400">Codigo</h3>
                <p className="text-gray-300 text-center">Had a great time participating in the Codigo event, tackling various CP questions and finally clinched 4th place in entire college.</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg">
              <img src={img3} alt="Event Photo" className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center text-yellow-400">Event Highlights</h3>
                <p className="text-gray-300 text-center">Captured moments from the event with my teammates and mentors.</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg">
              <img src={img4} alt="Event Photo" className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center text-purple-400">Algo Hunt- Algorithmic Competition</h3>
                <p className="text-gray-300 text-center">Participated in pure DSA-based coding event where my team managed to clinch second place in entire university.</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg">
              <img src={img5} alt="Event Photo" className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center text-red-400">Teamwork at its Best</h3>
                <p className="text-gray-300 text-center">A photo that captures the essence of teamwork, a core part of our success in the event.</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg shadow-lg">
              <img src={img6} alt="Event Photo" className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-center text-red-400">Coding Event: Codigo</h3>
                <p className="text-gray-300 text-center">Photo depicting utmost dedication and focus during the contest.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
