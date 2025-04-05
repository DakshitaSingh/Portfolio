import React from 'react';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import contactImage from '../assets/contact.png';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

        <div className="max-w-5xl mx-auto bg-teal-100 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-start md:space-x-8 space-y-8 md:space-y-0">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={contactImage}
              alt="Contact"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Form + Contact Info */}
          <div className="w-full md:w-1/2 space-y-8">
            {/* Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Send a Message</h3>
              <form
                action="https://formspree.io/f/xvgkwnwz" // replace with actual Formspree endpoint
                method="POST"
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded bg-white text-black"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded bg-white text-black"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="4"
                  className="w-full p-3 rounded bg-white text-black"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white p-3 rounded hover:bg-gray-800 transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <a href="mailto:dakshitasingh2222@gmail.com" className="text-lg hover:text-blue-600 transition duration-300 text-gray-800">
                  dakshitasingh2222@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-green-600 text-2xl" />
                <a href="tel:+91 9120051835" className="text-lg hover:text-green-600 transition duration-300 text-gray-800">
                  +91 9120051835
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaLinkedin className="text-blue-700 text-2xl" />
                <a
                  href="https://www.linkedin.com/in/dakshita-singh-784557281/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-blue-700 transition duration-300 text-gray-800"
                >
                  LinkedIn Profile
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaGithub className="text-gray-700 text-2xl" />
                <a
                  href="https://github.com/DakshitaSingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-gray-700 transition duration-300 text-gray-800"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
