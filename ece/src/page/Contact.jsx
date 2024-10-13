import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <div className=" relative w-full z-15 h-60 bg-[url('./banner.png')]"></div>
      <div className="relative min-h-screen">
        <div className="bg-white text-black  absolute inset-0 flex items-center ">
          <div className="max-w-xs bg-white  shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <div className="w-32 h-32 mb-4 relative">
                <img
                  src="./hvs.jpg"
                  alt="Prof. J. Doe"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Dr. Harsh Vikram Singh
              </h2>
              <p class="text-gray-500 text-center">
                <h1 className="font-bold text-black ">Coordinator</h1>
                <hr className="border-t-2 border-black " />
                <h2 className="p-2">
                  Professor & Head of Electronics Engineering Department
                </h2>
                <br />
                <h1 className="text-left font-bold">Mobile: 9415763939</h1>
                <h1 className="text-left font-bold">
                  Email: icevet24@gmail.com
                </h1>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black w-full  pl-10 text-4xl font-bold font-custom   bg-white ">
        <h1>HOW TO REACH:</h1>
        <h3 className="text-xl py-3 font-medium">
          The Institute is situated 5 Km away from the Sultanpur city on NH-96
          (Allahabad-Faizabad National Highway) on the bank of river Gomti.
          Sultanpur District is a part of Faizabad Division (situated about 140
          Kms away from Lucknow on NH-56) and is well connected through road and
          rail network. The nearest airport is Amousi (Lucknow) and Babatpur
          (Varanasi) which is about 140 Km far from the Institute.
        </h3>
        <h3 className="font-semibold text-2xl">
          For more information and updates please visit institute website
          <a className="text-red-600" href="https://knit.ac.in/" target="blank">
            {" "}
            www.knit.ac.in
          </a>
        </h3>
        <span className="relative inline-block  left-0 bottom-0 w-72 h-1"></span>
      </div>
    </>
  );
}
