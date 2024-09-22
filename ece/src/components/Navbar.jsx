// src/components/Navbar.jsx
import React from "react";
import { useState, useEffect } from "react";
// import logo from "./public/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detects scroll position and updates the navbar's background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Change to solid background when scrolled
      } else {
        setIsScrolled(false); // Transparent background at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full ${
        isScrolled ? "fixed bg-violet-950 top-0" : "absolute bg-transparent"
      } transition-colors duration-600 ease-in-out z-20`}
    >
      <nav className="p-4  ">
        {/* Logo */}
        <div
          className={`flex absolute p-4 rounded-full ml-[100px] ${
            isScrolled
              ? "bg-violet-950 opacity-100 transition-opacity duration-600 ease-in-out"
              : "bg-transparent opacity-0"
          }`}
        >
          <img
            src="./logo.png"
            alt="Logo"
            className="w-16 h-16 object-contain rounded-full"
          />
        </div>

        {/* Navigation Links */}
        <div className="container flex">
          <ul
            className={`flex items-center gap-8 ml-[70%] w-full ${
              isScrolled
                ? "opacity-100 translate-x-0 transition-transform duration-500 ease-out"
                : "opacity-100 -translate-x-full transition-all duration-500 ease-in"
            }`}
          >
            <li>
              <a
                href="#home"
                className="text-white hover:text-pink-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#submit-paper"
                className="text-white hover:text-pink-400 transition duration-300"
              >
                Submit Paper
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-pink-400 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                className="text-white hover:text-pink-400 transition duration-300"
              >
                Contact Us
              </a>
            </li>
            <div
              className={`text-white ml-10 ${
                isScrolled
                  ? "opacity-100 translate-x-0 transition-transform duration-500 ease-out"
                  : "opacity-100 -translate-x-full transition-all duration-500 ease-in"
              }`}
            >
              <button className="hover:text-pink-400 transition duration-300 w-8 h-8 rounded-full ">
                <img src="./search.png" alt="Search" className="w-8 h-8 " />
              </button>
            </div>
          </ul>
          {/* Search Icon */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
