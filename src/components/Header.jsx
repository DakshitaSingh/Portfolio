import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import TypingEffect from "./TypingEffect";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    "HOME",
    "PROJECTS",
    "ABOUT",
    "CONTACT",
    "CHATBOT",
    "CONTESTS",
  ];

  return (
    <nav className="flex items-center justify-between py-4 px-6 w-full bg-black text-white relative z-50">
      {/* Desktop & Tablet Links */}
      <ul className="hidden lg:flex space-x-8 text-lg font-roboto-slab font-semibold text-white">
        {menuItems.map((item) => (
          <li key={item} className="group">
            <Link
              to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              className="hover:bg-white hover:text-black transition-colors duration-300 block p-2"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden text-white text-2xl focus:outline-none"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-black text-center py-4 lg:hidden text-white">
          {menuItems.map((item) => (
            <li key={item} className="group">
              <Link
                to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                className="text-white text-lg font-roboto-slab hover:bg-white hover:text-black transition-colors duration-300 block py-2"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
