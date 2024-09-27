import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SubmitPaper = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full w-full  bg-gradient-to-b from-blue-100 to-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto   px-4 py-2"
      >
        {/* <div className="bg-white rounded-lg shadow-2xl overflow-hidden"> */}
        {/* <div>
          <div
            className="bg-cover bg-center h-64 flex items-center justify-center"
            style={{
              backgroundImage: "url('./banner.png')",
            }}
          > */}
        <div className=" bg-[url('./banner.png')] w-full rounded-lg  h-60 flex items-center justify-center"></div>

        <div className="py-2 w-full ">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-6 mb-6 w-full "
          >
            <h1 className="text-black font-bold text-3xl">CALL FOR PAPER:</h1>
            <span className="relative inline-block  left-0 bottom-0 w-72 h-1 bg-red-900"></span>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Wireless Sensor Networks, Advances in Sensor Technology</li>
              <li>
                Nanotechnology and Sensor Based Solutions for
                Environment-Friendly Agriculture
              </li>
              <li>Green Technology and Rural Environmental Concerns</li>
              <li>Technology in Agriculture for Sustainable Development</li>
              <li>Optical and Wireless Communications</li>
              <li>VLSI for the Social Change Digital Manufacturing</li>
              <li>Consumer Technology</li>
              <li>
                Signal Processing, LORA Functioning in Industrial Environment
              </li>
              <li>Mobile HMI for Electronic Product</li>
              <li>Nanotechnology Based Human-Centered Designs</li>
              <li>Internet of Vehicles</li>
              <li>
                Control, Communication and Automation Enabled Technologies
              </li>
              <li>Mechatronics and Robotics Technologies</li>
              <li>
                Blockchain, Inter-Vehicle Wireless Communications Technologies
              </li>
              <li>Electric and Hybrid-Electric Vehicles</li>
              <li>Nano-Fluids Dynamics for Industrial Applications</li>
              <li>Renewable and Sustainable Energy Solutions</li>
              <li>
                Smart Grid, Electric Vehicle, Battery Management System, Grid
                integration with RES
              </li>
              <li>Electric actuators, Servo drives, and IoT interfaces</li>
              <li>Machine Vibration & Condition Monitoring</li>
              <li>
                Signal Processing for Machine Health Monitoring and RFID 3D
                Scanning
              </li>
              <li>
                Image Processing and Computational Intelligence in Agriculture
              </li>
              <li>Biotechnology Solutions for Sustainable Agriculture</li>
              <li>
                Applications of Image and Video Processing for Industrial
                Application
              </li>
              <li>
                Machine Learning & AI Approaches to Manufacturing Applications
              </li>
              <li>High-Performance Computing, Cloud Computing</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-6 mb-6 w-full "
          >
            <h1 className="text-black font-bold text-3xl">
              REGISTRATION DETAILS:
            </h1>
            <span className="relative inline-block  left-0 bottom-0 w-72 h-1 bg-red-900"></span>
            <table class="min-w-full bg-white border text-black text-center border-gray-300">
              <thead>
                <tr class="bg-yellow-300 text-gray-700">
                  <th class="py-3 px-6 text-2xl border-b-2 border-gray-300">
                    Category of Delegates
                  </th>
                  <th class="py-3 px-6 border-b-2 text-2xl border-gray-300">
                    India (in INR)
                  </th>
                  <th class="py-3 px-6 border-b-2 text-2xl border-gray-300">
                    Foreign (in USD)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-gray-50">
                  <td class="py-3 px-6 text-center border-b border-gray-300">
                    Professionals
                  </td>
                  <td class="py-3 px-6 text-center border-b border-gray-300">
                    3500
                  </td>
                  <td class="py-3 px-6 text-center border-b border-gray-300">
                    60
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-6 text-center border-b border-gray-300">
                    Faculty Members
                  </td>
                  <td class="py-3 px-6 text-center border-b border-gray-300">
                    3000
                  </td>
                  <td class="py-3 px-6 text-center border-b border-gray-300">
                    50
                  </td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="py-3 px-6 text-center border-b border-gray-300">
                    Research Scholars
                  </td>
                  <td class="py-3 px-6 text-center border-b border-gray-300">
                    2000
                  </td>
                  <td class="py-3 px-6 text-center border-b border-gray-300">
                    20
                  </td>
                </tr>
                <tr>
                  <td class="py-3 px-6 text-center border-b border-gray-300">
                    PG/ UG Student
                  </td>
                  <td class="py-3 px-6 text-center border-b border-gray-300">
                    1000
                  </td>
                  <td class="py-3 px-6 text-center border-b border-gray-300">
                    15
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            <h1 className="text-black mt-4 font-bold">
              <span className="text-red-900">ACCOMODATION:</span> Paid
              accommodation to the participants will be provided at institute
              Guest House / Hostels on request.
            </h1>
          </motion.div>

          {isLoaded ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <h1 className="text-black font-bold text-3xl">REGISTRATION:</h1>
              <span className="relative inline-block  left-0 bottom-0 w-72 h-1 bg-red-900"></span>
              <h1 className="text-black">
                Submit your form
                <a href="https://forms.gle/ydmqtPzX3g6LHNqa8" target="_blank">
                  {" "}
                  here .
                </a>
              </h1>
            </motion.div>
          ) : (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          )}
        </div>

        <div className="bg-gray-100 p-6 mt-8">
          <p className="text-center text-gray-600">
            Thank you for contributing to the advancement of knowledge in our
            field. Your submission is greatly appreciated!
          </p>
        </div>
        {/* </div>
        </div> */}
      </motion.div>
    </div>
  );
};

export default SubmitPaper;
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import Footer from "../components/Footer";

// export default function Contact() {
//   return (
//     <>
//       <div className="relative min-h-screen">
//         <div className="bg-white text-black  absolute inset-0 flex items-center ">
//           ijfbg;oadfng'olbfgoi'adbnoiafdh'agiuorheignrl
//         </div>
//       </div>
//     </>
//   );
// }
