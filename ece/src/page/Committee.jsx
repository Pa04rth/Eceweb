// import React from "react";
// import Footer from "../components/Footer";

// function Committee() {
//   return (
//     <>
//       <div className=" relative w-full z-15 h-60 bg-[url('./banner.png')]"></div>
//       <div className="text-white w-full  ">Co-Converners</div>
//       <div className="relative min-h-screen bg-gray-100">
//         <div className="bg-white text-black absolute inset-0 flex items-center justify-center">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10 max-w-7xl mx-auto">
//             {/* Card 1 */}
//             <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//               <div className="flex flex-col items-center p-6">
//                 <div className="w-32 h-32 mb-4 relative">
//                   <img
//                     src="https://via.placeholder.com/150"
//                     alt="Prof. R. K. Singh"
//                     className="rounded-full w-full h-full object-cover"
//                   />
//                 </div>
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   Prof. R. K. Singh
//                 </h2>
//                 <p className="text-gray-600 text-center mt-2">
//                   Professor of Computer Science & Engineering
//                 </p>
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//               <div className="flex flex-col items-center p-6">
//                 <div className="w-32 h-32 mb-4 relative">
//                   <img
//                     src="https://via.placeholder.com/150"
//                     alt="Prof. J. Doe"
//                     className="rounded-full w-full h-full object-cover"
//                   />
//                 </div>
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   Prof. J. Doe
//                 </h2>
//                 <p className="text-gray-600 text-center mt-2">
//                   Professor of Electrical Engineering
//                 </p>
//               </div>
//             </div>

//             {/* Card 3 */}
//             <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//               <div className="flex flex-col items-center p-6">
//                 <div className="w-32 h-32 mb-4 relative">
//                   <img
//                     src="https://via.placeholder.com/150"
//                     alt="Prof. M. Sharma"
//                     className="rounded-full w-full h-full object-cover"
//                   />
//                 </div>
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   Prof. M. Sharma
//                 </h2>
//                 <p className="text-gray-600 text-center mt-2">
//                   Professor of Mechanical Engineering
//                 </p>
//               </div>
//             </div>

//             {/* Card 4 */}
//             <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//               <div className="flex flex-col items-center p-6">
//                 <div className="w-32 h-32 mb-4 relative">
//                   <img
//                     src="https://via.placeholder.com/150"
//                     alt="Prof. A. Gupta"
//                     className="rounded-full w-full h-full object-cover"
//                   />
//                 </div>
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   Prof. A. Gupta
//                 </h2>
//                 <p className="text-gray-600 text-center mt-2">
//                   Professor of Civil Engineering
//                 </p>
//               </div>
//             </div>
//             <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//               <div className="flex flex-col items-center p-6">
//                 <div className="w-32 h-32 mb-4 relative">
//                   <img
//                     src="https://via.placeholder.com/150"
//                     alt="Prof. A. Gupta"
//                     className="rounded-full w-full h-full object-cover"
//                   />
//                 </div>
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   Prof. A. Gupta
//                 </h2>
//                 <p className="text-gray-600 text-center mt-2">
//                   Professor of Civil Engineering
//                 </p>
//               </div>
//             </div>
//             <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//               <div className="flex flex-col items-center p-6">
//                 <div className="w-32 h-32 mb-4 relative">
//                   <img
//                     src="https://via.placeholder.com/150"
//                     alt="Prof. A. Gupta"
//                     className="rounded-full w-full h-full object-cover"
//                   />
//                 </div>
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   Prof. A. Gupta
//                 </h2>
//                 <p className="text-gray-600 text-center mt-2">
//                   Professor of Civil Engineering
//                 </p>
//               </div>
//             </div>
//             <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//               <div className="flex flex-col items-center p-6">
//                 <div className="w-32 h-32 mb-4 relative">
//                   <img
//                     src="https://via.placeholder.com/150"
//                     alt="Prof. A. Gupta"
//                     className="rounded-full w-full h-full object-cover"
//                   />
//                 </div>
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   Prof. A. Gupta
//                 </h2>
//                 <p className="text-gray-600 text-center mt-2">
//                   Professor of Civil Engineering
//                 </p>
//               </div>
//             </div>
//             <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//               <div className="flex flex-col items-center p-6">
//                 <div className="w-32 h-32 mb-4 relative">
//                   <img
//                     src="https://via.placeholder.com/150"
//                     alt="Prof. A. Gupta"
//                     className="rounded-full w-full h-full object-cover"
//                   />
//                 </div>
//                 <h2 className="text-xl font-semibold text-gray-800">
//                   Prof. A. Gupta
//                 </h2>
//                 <p className="text-gray-600 text-center mt-2">
//                   Professor of Civil Engineering
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="">
//         <h1>Advisory Board</h1>
//       </div>

//       <div className=" relative w-full z-15 h-100 bg-white">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10 max-w-7xl mx-auto">
//           {/* Card 1 */}
//           <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//             <div className="flex flex-col items-center p-6">
//               <div className="w-32 h-32 mb-4 relative">
//                 <img
//                   src="https://via.placeholder.com/150"
//                   alt="Prof. R. K. Singh"
//                   className="rounded-full w-full h-full object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Prof. R. K. Singh
//               </h2>
//               <p className="text-gray-600 text-center mt-2">
//                 Professor of Computer Science & Engineering
//               </p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//             <div className="flex flex-col items-center p-6">
//               <div className="w-32 h-32 mb-4 relative">
//                 <img
//                   src="https://via.placeholder.com/150"
//                   alt="Prof. J. Doe"
//                   className="rounded-full w-full h-full object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Prof. J. Doe
//               </h2>
//               <p className="text-gray-600 text-center mt-2">
//                 Professor of Electrical Engineering
//               </p>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//             <div className="flex flex-col items-center p-6">
//               <div className="w-32 h-32 mb-4 relative">
//                 <img
//                   src="https://via.placeholder.com/150"
//                   alt="Prof. M. Sharma"
//                   className="rounded-full w-full h-full object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Prof. M. Sharma
//               </h2>
//               <p className="text-gray-600 text-center mt-2">
//                 Professor of Mechanical Engineering
//               </p>
//             </div>
//           </div>

//           {/* Card 4 */}
//           <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//             <div className="flex flex-col items-center p-6">
//               <div className="w-32 h-32 mb-4 relative">
//                 <img
//                   src="https://via.placeholder.com/150"
//                   alt="Prof. A. Gupta"
//                   className="rounded-full w-full h-full object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Prof. A. Gupta
//               </h2>
//               <p className="text-gray-600 text-center mt-2">
//                 Professor of Civil Engineering
//               </p>
//             </div>
//           </div>
//           <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//             <div className="flex flex-col items-center p-6">
//               <div className="w-32 h-32 mb-4 relative">
//                 <img
//                   src="https://via.placeholder.com/150"
//                   alt="Prof. A. Gupta"
//                   className="rounded-full w-full h-full object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Prof. A. Gupta
//               </h2>
//               <p className="text-gray-600 text-center mt-2">
//                 Professor of Civil Engineering
//               </p>
//             </div>
//           </div>
//           <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//             <div className="flex flex-col items-center p-6">
//               <div className="w-32 h-32 mb-4 relative">
//                 <img
//                   src="https://via.placeholder.com/150"
//                   alt="Prof. A. Gupta"
//                   className="rounded-full w-full h-full object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Prof. A. Gupta
//               </h2>
//               <p className="text-gray-600 text-center mt-2">
//                 Professor of Civil Engineering
//               </p>
//             </div>
//           </div>
//           <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//             <div className="flex flex-col items-center p-6">
//               <div className="w-32 h-32 mb-4 relative">
//                 <img
//                   src="https://via.placeholder.com/150"
//                   alt="Prof. A. Gupta"
//                   className="rounded-full w-full h-full object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Prof. A. Gupta
//               </h2>
//               <p className="text-gray-600 text-center mt-2">
//                 Professor of Civil Engineering
//               </p>
//             </div>
//           </div>
//           <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//             <div className="flex flex-col items-center p-6">
//               <div className="w-32 h-32 mb-4 relative">
//                 <img
//                   src="https://via.placeholder.com/150"
//                   alt="Prof. A. Gupta"
//                   className="rounded-full w-full h-full object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Prof. A. Gupta
//               </h2>
//               <p className="text-gray-600 text-center mt-2">
//                 Professor of Civil Engineering
//               </p>
//             </div>
//           </div>
//           <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//             <div className="flex flex-col items-center p-6">
//               <div className="w-32 h-32 mb-4 relative">
//                 <img
//                   src="https://via.placeholder.com/150"
//                   alt="Prof. A. Gupta"
//                   className="rounded-full w-full h-full object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Prof. A. Gupta
//               </h2>
//               <p className="text-gray-600 text-center mt-2">
//                 Professor of Civil Engineering
//               </p>
//             </div>
//           </div>
//           <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//             <div className="flex flex-col items-center p-6">
//               <div className="w-32 h-32 mb-4 relative">
//                 <img
//                   src="https://via.placeholder.com/150"
//                   alt="Prof. A. Gupta"
//                   className="rounded-full w-full h-full object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Prof. A. Gupta
//               </h2>
//               <p className="text-gray-600 text-center mt-2">
//                 Professor of Civil Engineering
//               </p>
//             </div>
//           </div>
//           <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//             <div className="flex flex-col items-center p-6">
//               <div className="w-32 h-32 mb-4 relative">
//                 <img
//                   src="https://via.placeholder.com/150"
//                   alt="Prof. A. Gupta"
//                   className="rounded-full w-full h-full object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Prof. A. Gupta
//               </h2>
//               <p className="text-gray-600 text-center mt-2">
//                 Professor of Civil Engineering
//               </p>
//             </div>
//           </div>
//           <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
//             <div className="flex flex-col items-center p-6">
//               <div className="w-32 h-32 mb-4 relative">
//                 <img
//                   src="https://via.placeholder.com/150"
//                   alt="Prof. A. Gupta"
//                   className="rounded-full w-full h-full object-cover"
//                 />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-800">
//                 Prof. A. Gupta
//               </h2>
//               <p className="text-gray-600 text-center mt-2">
//                 Professor of Civil Engineering
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <div className="relative min-h-screen">
//       <div className="bg-white text-black  absolute inset-0 flex items-center ">
//        */}

//       {/* </div>
//  </div> */}
//     </>
//   );
// }

// export default Committee;

import React from "react";
import Footer from "../components/Footer";

function Committee() {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-blue-100 to-white">
      <div className=" relative w-full z-15 h-60 bg-[url('./banner.png')]"></div>
      <div className="text-black w-full mt-4 pl-36 text-4xl font-bold font-custom   bg-white ">
        <h1>CO-CONVENORS:</h1>
        <span className="relative inline-block  left-0 bottom-0 w-72 h-1 bg-red-900"></span>
      </div>
      <div className="relative min-h-screen bg-gray-100">
        <div className="bg-white text-black absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
              <div className="flex flex-col items-center p-6">
                <div className="w-32 h-32 mb-4 relative">
                  <img
                    src="./profile.png"
                    alt=""
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Prof. Sweta Singh
                </h2>
                <p className="text-gray-600 text-center mt-2">
                  Professor of Electronics Engineering
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
              <div className="flex flex-col items-center p-6">
                <div className="w-32 h-32 mb-4 relative">
                  <img
                    src="./profile.png"
                    alt="Prof. J. Doe"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Prof. Anuarg Singh
                </h2>
                <p className="text-gray-600 text-center mt-2">
                  Professor of Electronics Engineering
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
              <div className="flex flex-col items-center p-6">
                <div className="w-32 h-32 mb-4 relative">
                  <img
                    src="./profile.png"
                    alt="Prof. M. Sharma"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Prof. Preeti Kharwar
                </h2>
                <p className="text-gray-600 text-center mt-2">
                  Professor of Electronics Engineering
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
              <div className="flex flex-col items-center p-6">
                <div className="w-32 h-32 mb-4 relative">
                  <img
                    src="./profile.png"
                    alt="Prof. A. Gupta"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Prof. Gaurav Verma
                </h2>
                <p className="text-gray-600 text-center mt-2">
                  Professor of Electronics Engineering
                </p>
              </div>
            </div>
            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
              <div className="flex flex-col items-center p-6">
                <div className="w-32 h-32 mb-4 relative">
                  <img
                    src="./profile.png"
                    alt="Prof. A. Gupta"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Prof. Snehi Saraswati
                </h2>
                <p className="text-gray-600 text-center mt-2">
                  Professor of Electronics Engineering
                </p>
              </div>
            </div>
            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
              <div className="flex flex-col items-center p-6">
                <div className="w-32 h-32 mb-4 relative">
                  <img
                    src="./profile.png"
                    alt="Prof. A. Gupta"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Prof. Somya Mishra
                </h2>
                <p className="text-gray-600 text-center mt-2">
                  Professor of Electronics Engineering
                </p>
              </div>
            </div>
            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
              <div className="flex flex-col items-center p-6">
                <div className="w-32 h-32 mb-4 relative">
                  <img
                    src="./profile.png"
                    alt="Prof. A. Gupta"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Mr. Yatendra Mishra
                </h2>
                <p className="text-gray-600 text-center mt-2">
                  Professor of Electronics Engineering
                </p>
              </div>
            </div>
            <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
              <div className="flex flex-col items-center p-6">
                <div className="w-32 h-32 mb-4 relative">
                  <img
                    src="./profile.png"
                    alt="Prof. A. Gupta"
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Ms. Eti Srivastav
                </h2>
                <p className="text-gray-600 text-center mt-2">
                  Professor of Electronics Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-black w-full mt-4 pl-36 text-4xl font-bold font-custom   bg-white">
        <h1>ADVISORY BOARD:</h1>
        <span className="relative inline-block  left-0 bottom-0 w-72 h-1 bg-red-900"></span>
      </div>

      <div className=" relative w-full z-15 h-100 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <div className="w-32 h-32 mb-4 relative">
                <img
                  src="https://media.licdn.com/dms/image/v2/C4E03AQFEcQYNXo36KA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516580728601?e=1732752000&v=beta&t=VG7OYZOw3mpRcePS3s5f3DxCswDbllOQhCd6Vmz7M3s"
                  alt="Prof. Anand Mohan"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Anand Mohan
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <div className="w-32 h-32 mb-4 relative">
                <img
                  src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=fLkbEL8AAAAJ&citpid=2"
                  alt="Prof. K.P. Singh"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. K.P.Singh
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <div className="w-32 h-32 mb-4 relative">
                <img
                  src="https://www.cipet.gov.in/our-team/images/shishir-sinha2.jpg"
                  alt="Prof. Shishir Sinhna"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Shishir Sinha
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director General, CIPET India
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <div className="w-32 h-32 mb-4 relative">
                <img
                  src="https://i.postimg.cc/6pWBW8Dg/PKJ-Desk-Photo-1.jpg"
                  alt="Prof. P.K. Jain"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. P.K. Jain
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director NIT Patna
              </p>
            </div>
          </div>
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <div className="w-32 h-32 mb-4 relative">
                <img
                  src="https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-1/347605178_969420800880342_2064817528606716454_n.jpg?stp=c0.0.959.959a_dst-jpg_s200x200&_nc_cat=110&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=CaOTvipbC-4Q7kNvgHwsEc3&_nc_ht=scontent.fdel29-1.fna&_nc_gid=Aie6mWNQeeKvZ7_OQCtUO0H&oh=00_AYBJBfDQ2UX53KWaaYpSIwFo3rt9fWYuvb4a03KqrNNjyg&oe=66F9F5EF"
                  alt="Prof. A. Gupta"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Ashutosh Kumar Singh
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director IIIT Bhopal
              </p>
            </div>
          </div>
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <div className="w-32 h-32 mb-4 relative">
                <img
                  src="https://nitj.ac.in/files/1715231314602-Director1.jpg"
                  alt="Prof. B.K. Kanaujia"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. B.K. Kanaujia
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director NIT Jalandhar
              </p>
            </div>
          </div>
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <div className="w-32 h-32 mb-4 relative">
                <img
                  src="https://www.iiitm.ac.in/images/demo/teachers/1650440085_Prof.-Sri-Niwas-Singh.jpg"
                  alt="Prof. S.N. Singh"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. S.N. Singh
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director IIITM Gwalior
              </p>
            </div>
          </div>
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <div className="w-32 h-32 mb-4 relative">
                <img
                  src="http://www.mmmut.ac.in/images/Prof.J.P.Saini1.jpg"
                  alt="Prof. J.P. Saini"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. J.P. Saini
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Vice Chancellor, MMMUT Gorakhpur
              </p>
            </div>
          </div>
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <div className="w-32 h-32 mb-4 relative">
                <img
                  src="https://www.mnnit.ac.in/userprofile/uploads/Sir_new.jpg"
                  alt="Prof. Rajeev Tripathi"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Rajeev Tripathi
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor MNNIT Prayagraj
              </p>
            </div>
          </div>
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <div className="w-32 h-32 mb-4 relative">
                <img
                  src="https://home.iitk.ac.in/~kvs/img/kvs_home.jpg"
                  alt="Prof. Kumar Vaibhav"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Kumar Vaibhav
              </h2>
              <p className="text-gray-600 text-center mt-2">IIT-Kanpur</p>
            </div>
          </div>
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <div className="w-32 h-32 mb-4 relative">
                <img
                  src="./profile.png"
                  alt="Prof. A. Gupta"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Y.K. Mishraa
              </h2>
              <p className="text-gray-600 text-center mt-2">
                (Superannuated) KNIT Sultanpur
              </p>
            </div>
          </div>
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <div className="w-32 h-32 mb-4 relative">
                <img
                  src="https://i1.rgstatic.net/ii/profile.image/891714390740994-1589612686389_Q128/Rakesh-Singh-61.jpg"
                  alt="Prof. R.K. Singh"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. R. K. Singh
              </h2>
              <p className="text-gray-600 text-center mt-2">
                (Superannuated) KNIT Sultanpur
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black  mt-4  text-4xl font-bold font-custom w-full pl-36  bg-white">
        <h1>INSTITUTE ADVISORY BOARD:</h1>
        <span className="relative inline-block  left-0 bottom-0 w-72 h-1 bg-red-900"></span>
      </div>
      <div className=" relative w-full z-15 h-100 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Anand Mohan
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. K.P.Singh
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Shishir Sinha
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director General, CIPET India
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. P.K. Jain
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director NIT Patna
              </p>
            </div>
          </div>
          {/* Card 1 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Anand Mohan
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. K.P.Singh
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Shishir Sinha
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director General, CIPET India
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. P.K. Jain
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director NIT Patna
              </p>
            </div>
          </div>
          {/* Card 1 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Anand Mohan
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. K.P.Singh
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Shishir Sinha
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director General, CIPET India
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. P.K. Jain
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director NIT Patna
              </p>
            </div>
          </div>
          {/* Card 1 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Anand Mohan
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. K.P.Singh
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Shishir Sinha
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director General, CIPET India
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. P.K. Jain
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director NIT Patna
              </p>
            </div>
          </div>
          {/* Card 1 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Anand Mohan
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. K.P.Singh
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Shishir Sinha
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director General, CIPET India
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. P.K. Jain
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director NIT Patna
              </p>
            </div>
          </div>
          {/* Card 1 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Anand Mohan
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. K.P.Singh
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Shishir Sinha
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director General, CIPET India
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. P.K. Jain
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director NIT Patna
              </p>
            </div>
          </div>
          {/* Card 1 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Anand Mohan
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. K.P.Singh
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Shishir Sinha
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director General, CIPET India
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. P.K. Jain
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director NIT Patna
              </p>
            </div>
          </div>
          {/* Card 1 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Anand Mohan
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. K.P.Singh
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Shishir Sinha
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director General, CIPET India
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. P.K. Jain
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director NIT Patna
              </p>
            </div>
          </div>
          {/* Card 1 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Anand Mohan
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. K.P.Singh
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Shishir Sinha
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director General, CIPET India
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. P.K. Jain
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director NIT Patna
              </p>
            </div>
          </div>
          {/* Card 1 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Anand Mohan
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. K.P.Singh
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Professor (Emeritus) IIT-BHU
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. Shishir Sinha
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director General, CIPET India
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <div className="flex flex-col items-center p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Prof. P.K. Jain
              </h2>
              <p className="text-gray-600 text-center mt-2">
                Director NIT Patna
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative min-h-screen">
      <div className="bg-white text-black  absolute inset-0 flex items-center ">
       */}

      {/* </div> 
 </div> */}
    </div>
  );
}

export default Committee;
