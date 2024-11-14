import React from 'react';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import React Icons
import contactImage from '../assets/contact.png'; // Import the image

const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        
        <div className="max-w-3xl mx-auto bg-teal-100 p-8 rounded-lg shadow-lg flex items-center space-x-8">
          {/* Image Section */}
          <div className="w-1/2">
            <img
              src={contactImage} // Use the imported image
              alt="Contact"
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Contact Information */}
          <div className="w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Get in Touch</h3> {/* Darkened text */}
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 text-2xl" /> {/* Darker icon */}
                <a href="mailto:dakshitasingh2222@gmail.com" className="text-lg hover:text-blue-600 transition duration-300 text-gray-800">
                  dakshitasingh2222@gmail.com
                </a> {/* Darker text */}
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-green-600 text-2xl" /> {/* Darker icon */}
                <a href="tel:+91 9120051835" className="text-lg hover:text-green-600 transition duration-300 text-gray-800">
                +91 9120051835
                </a> {/* Darker text */}
              </div>

              {/* LinkedIn */}
              <div className="flex items-center space-x-4">
                <FaLinkedin className="text-blue-700 text-2xl" /> {/* Darker icon */}
                <a
                  href="https://www.linkedin.com/in/dakshita-singh-784557281/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-blue-700 transition duration-300 text-gray-800"
                >
                  LinkedIn Profile
                </a> {/* Darker text */}
              </div>

              {/* GitHub */}
              <div className="flex items-center space-x-4">
                <FaGithub className="text-gray-700 text-2xl" /> {/* Darker icon */}
                <a
                  href="https://github.com/DakshitaSingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-gray-700 transition duration-300 text-gray-800"
                >
                  GitHub Profile
                </a> {/* Darker text */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
