import React from "react";
import ReactDOM from "react-dom";

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
              <h1 className="text-left mt-4 text-gray-400">Home</h1>
              <h1 className="text-left mt-4 text-gray-400">About us</h1>
              <h1 className="text-left mt-4 text-gray-400">Submit Paper</h1>
              <h1 className="text-left mt-4 text-gray-400">Commitee</h1>
            </div>
            <div className="px-16 h-full ">
              <h1 className=" text-xl font-bold mt-2 font-custom">Support</h1>
              <span className="relative inline-block  left-0 bottom-0 w-28 h-1 bg-red-900"></span>
              <h1 className="text-left mt-4 text-gray-400">knit.ac.in</h1>
              <h1 className="text-left mt-4 text-gray-400">Contact us</h1>
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
