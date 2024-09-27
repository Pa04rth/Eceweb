import React from "react";
import { Calendar, MapPin, Book, Users, Globe, Phone } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
      <div className=" relative w-full z-15 h-60 bg-[url('./banner.png')]"></div>

      <main className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                src="/col-img1.jpg?height=400&width=600"
                alt="KNIT Campus"
                className="h-64 w-full object-cover md:w-96 md:h-full"
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                About Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Established in 1976, Kamla Nehru Institute of Technology,
                Sultanpur is a leading technical institution producing top-grade
                engineers with world-class skills. As an autonomous government
                engineering institute (under 2f and 12B of UGC Act), we're
                affiliated to Dr. APJ Abdul Kalam Technical University, Lucknow,
                India.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We offer B.Tech. and M.Tech. courses in Civil, Electrical,
                Mechanical, Electronics, Computer Science & Engineering, and
                Information Technology disciplines, as well as an M.C.A.
                program. Our institute also provides testing and consultancy
                services to neighboring industries and various agencies.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Key Features
            </h2>
            <ul className="space-y-4">
              {[
                { icon: Calendar, text: "Established in 1976" },
                { icon: MapPin, text: "Located in Sultanpur, Uttar Pradesh" },
                { icon: Book, text: "Offers B.Tech, M.Tech, and MCA programs" },
                { icon: Users, text: "Produces top-grade engineers" },
                {
                  icon: Globe,
                  text: "Affiliated to Dr. APJ Abdul Kalam Technical University",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <item.icon className="mr-3 text-blue-500 w-6 h-6" />
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Departments
            </h2>
            <ul className="space-y-2 text-gray-700">
              {[
                "Civil Engineering",
                "Electrical Engineering",
                "Mechanical Engineering",
                "Electronics Engineering",
                "Computer Science & Engineering",
                "Information Technology",
                "Master of Computer Applications (MCA)",
              ].map((dept, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  {dept}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <MapPin className="mr-3 text-blue-500 w-6 h-6" />
              <span className="text-gray-700">
                Sultanpur, Uttar Pradesh, India - 228118
              </span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-3 text-blue-500 w-6 h-6" />
              <span className="text-gray-700">+91 5362 240454</span>
            </div>
            <div className="flex items-center">
              <Globe className="mr-3 text-blue-500 w-6 h-6" />
              <a
                href="http://www.knit.ac.in"
                className="text-blue-600 hover:underline"
              >
                www.knit.ac.in
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; 2023 Kamla Nehru Institute of Technology. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
