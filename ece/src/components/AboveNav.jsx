import React, { useState, useEffect } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const AboveNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Solid background on scroll
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
      className={`w-full py-4 px-10 transition-all duration-300 bg-gradient-to-b from-gray-400 via-satate-200 to-gray-100  " ${
        isScrolled ? "bg-violet-950" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Left Section with Logo and Heading */}
        <div className="flex items-center">
          <img src="logo.png" alt="Logo" className="w-16 h-16" />
          <div className="text-white font-bold text-xl font-sans ml-4">
            <h1 className="leading-tight">
              Kamla Nehru Institute of Technology, <br /> Sultanpur
            </h1>
          </div>
        </div>

        {/* Right Section with Location */}
        <div className="text-white flex items-center space-x-2 cursor-pointer hover:text-pink-400">
          <LocationOnOutlinedIcon fontSize="large" />
          <div
            onClick={() =>
              window.open("https://maps.app.goo.gl/gGQN6tQXQ5YFVtiKA", "_blank")
            }
            className="text-sm"
          >
            <a
              href="https://maps.app.goo.gl/gGQN6tQXQ5YFVtiKA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Kamla Nehru Institute of Technology, Sultanpur
            </a>
            <p className="text-xs">Sultanpur, Uttar Pradesh 228118</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboveNav;
