import React from "react";
import logo from "/logo.png";

const Spinner = () => {
  return (
    <div className="spinner flex flex-col justify-center items-center h-screen">
      <div>
        <img
          src={logo}
          alt="Loading..."
          className="spinner-logo w-[100px] h-[100px] "
        />
      </div>
      <div>
        {" "}
        <h1 className="font-bold font-mono mt-1 text-xl">
          KAMLA NEHRU INSTITUTE OF TECHNOLOGY,SULTANPUR
        </h1>
      </div>
    </div>
  );
};

export default Spinner;
