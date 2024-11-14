// src/components/Header.jsx

import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import TypingEffect from "./TypingEffect";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("bg-black", "text-white");
    } else {
      document.body.classList.remove("bg-black", "text-white");
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between py-4 px-6 w-full bg-black text-white relative z-50">
      {/* Desktop & Tablet Links */}
      <ul className="hidden lg:flex space-x-8 text-lg font-roboto-slab font-semibold text-white">
        {["HOME", "PROJECTS", "ABOUT", "CONTACT"].map((item, index) => (
          <li key={item} className="group">
            <Link
              to={index === 0 ? "/" : `/${item.toLowerCase()}`} // Use Link instead of <a> and adjust the path
              className="hover:bg-white hover:text-black transition-colors duration-300 block p-2"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button (Visible on mobile & tablet) */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden text-white text-2xl focus:outline-none"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Dark Mode Toggle - Always Visible */}
      <div className="hidden lg:flex items-center space-x-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={handleToggle}
            className="sr-only"
          />
          <div
            className={`w-14 h-8 rounded-full shadow-inner relative transition duration-300 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-600 to-purple-600"
                : "bg-gradient-to-r from-yellow-400 to-sky-500"
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                isDarkMode
                  ? "translate-x-6 bg-black shadow-blue-500/50"
                  : "bg-white"
              }`}
            >
              {isDarkMode ? (
                <FaMoon className="text-blue-300" size={14} />
              ) : (
                <FaSun className="text-yellow-500" size={14} />
              )}
            </span>
          </div>
        </label>
      </div>

      {/* Mobile & Tablet Menu - Only visible on smaller screens */}
      {isMobileMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-black text-center py-4 lg:hidden text-white">
          {["HOME", "PROJECTS", "ABOUT", "CONTACT", "BLOG"].map((item, index) => (
            <li key={item} className="group">
              <Link
                to={index === 0 ? "/" : `/${item.toLowerCase()}`} // Use Link here as well
                className="text-white text-lg font-roboto-slab hover:bg-white hover:text-black transition-colors duration-300 block py-2"
              >
                {item}
              </Link>
            </li>
          ))}
          {/* Dark Mode Toggle for Mobile */}
          <li>
            <label className="flex justify-center items-center cursor-pointer py-2">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={handleToggle}
                className="sr-only"
              />
              <div
                className={`w-14 h-8 rounded-full shadow-inner relative transition duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-600 to-purple-600"
                    : "bg-gradient-to-r from-yellow-400 to-sky-500"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                    isDarkMode
                      ? "translate-x-6 bg-black shadow-blue-500/50"
                      : "bg-white"
                  }`}
                >
                  {isDarkMode ? (
                    <FaMoon className="text-blue-300" size={14} />
                  ) : (
                    <FaSun className="text-yellow-500" size={14} />
                  )}
                </span>
              </div>
            </label>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
