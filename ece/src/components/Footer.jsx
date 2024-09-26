import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col ">
      <footer className="bg-blue-950 text-white py-4 flex flex- h-96">
        <div className="container mx-auto flex justify-between items-center  ">
          {/* Left side: Logo */}
          <div className="flex flex-col items-center justify-center ml-28 w-96 border-r-2 border-dotted h-full border-white">
            <div>
              <img
                src="./logo.png"
                alt="Organization Logo"
                className="w-18 h-18"
              />
            </div>
            <div>
              <span className="ml-4 text-sm font-custom">
                Kamla Nehru Institute of Technology
              </span>
            </div>
            <div>
              <span className="ml-4  text-sm text-gray-400 font-custom">
                Sultanpur ,Uttar Pradesh [228001]
              </span>
            </div>
            <br />
            <div className="items-center justify-center flex flex-row gap-2">
              <div>
                <img src="./phone.png" className="h-4 w-4" alt="Phone" />
              </div>
              <div>
                <h3 className="text-gray-400 text-sm font-custom">
                  05362 240 454
                </h3>
              </div>
            </div>
            <div className="items-center justify-center flex flex-row gap-1">
              <div>
                <img src="./mail.png" className="h-4 w-4 " alt="Email" />
              </div>
              <div>
                <a href="mailto:director@knit.ac.in">
                  <h3 className="text-gray-400 text-sm font-custom">
                    director@knit.ac.in
                  </h3>
                </a>
              </div>
            </div>
            <div className="items-center justify-center flex flex-row gap-1">
              <div>
                <img src="./web.png" className="h-4 w-4 " alt="Website" />
              </div>
              <div>
                <a href="https://knit.ac.in/">
                  <h3 className="text-gray-400 text-sm font-custom">
                    www.knit.ac.in
                  </h3>
                </a>
              </div>
            </div>
          </div>

          {/* Right side: Links */}
          <div className="flex  flex-row space-x-3 ml-3  h-full">
            <div className="px-16 h-full ">
              <h1 className="text-xl font-bold mt-2 font-custom">
                Quick Links
              </h1>
              <span className="relative inline-block  left-0 bottom-0 w-28 h-1 bg-red-900"></span>
              <h1 className="text-left mt-4 text-gray-400">
                <Link
                  to="/"
                  onClick={() => {
                    if (window.location.pathname === "/") {
                      window.location.reload();
                    } else {
                      window.location.href = "/";
                    }
                  }}
                  className="text-white hover:text-yellow-300 font-custom transition duration-300"
                >
                  Home
                </Link>
              </h1>
              <h1 className="text-left mt-4 text-gray-400">
                <Link
                  to="/about"
                  onClick={() => {
                    if (window.location.pathname === "/about") {
                      window.location.reload();
                    } else {
                      window.location.href = "/about";
                    }
                  }}
                  className="text-white hover:text-yellow-300 transition duration-300"
                >
                  About
                </Link>
              </h1>
              <h1 className="text-left mt-4 text-gray-400">
                <Link
                  to="/submitpaper"
                  onClick={() => {
                    if (window.location.pathname === "/submitpaper") {
                      window.location.reload();
                    } else {
                      window.location.href = "/submitpaper";
                    }
                  }}
                  className="text-white hover:text-yellow-300 font-custom transition duration-300"
                >
                  Submit Paper
                </Link>
              </h1>
              <h1 className="text-left mt-4 text-gray-400">
                <Link
                  to="/committee"
                  onClick={() => {
                    if (window.location.pathname === "/committee") {
                      window.location.reload();
                    } else {
                      window.location.href = "/committee";
                    }
                  }}
                  className="text-white hover:text-yellow-300 transition duration-300"
                >
                  Committee
                </Link>
              </h1>
            </div>
            <div className="px-16 h-full ">
              <h1 className=" text-xl font-bold mt-2 font-custom">Support</h1>
              <span className="relative inline-block  left-0 bottom-0 w-28 h-1 bg-red-900"></span>
              <h1 className="text-left mt-4 text-white">
                <a href="https://knit.ac.in/">Knit.ac.in</a>
              </h1>
              <h1 className="text-left mt-4 text-gray-400">
                <Link
                  to="/contact"
                  onClick={() => {
                    if (window.location.pathname === "/contact") {
                      window.location.reload();
                    } else {
                      window.location.href = "/contact";
                    }
                  }}
                  className="text-white hover:text-yellow-300 transition duration-300"
                >
                  Contact Us
                </Link>
              </h1>
            </div>
            <div className="px-16  h-full  ">
              <h1 className=" text-xl font-bold mt-2 font-custom">Policies</h1>
              <span className="relative inline-block  left-0 bottom-0 w-28 h-1 bg-red-900"></span>
              <h1 className="text-left mt-4 text-gray-400">Privacy Policy</h1>
              <h1 className="text-left mt-4 text-gray-400">Plagrism Policy</h1>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full h-10 bg-blue-900 items-center justify-center">
        <h4 className="text-gray-400 text-center mt-2 font-custom">
          © Kamla Nehru Institute of Technology, Sultanpur (U.P.)
        </h4>
      </div>
    </div>
  );
};

export default Footer;
