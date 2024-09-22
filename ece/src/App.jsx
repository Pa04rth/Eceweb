import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import Footer from "./components/Footer";
import "./App.css";
import Navbar from "./components/Navbar";
import AboveNav from "./components/AboveNav";
function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or some async operation
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Example delay
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (

        <div className="">
          <img src="./col-img2.jpg" className="absolute z-[-1] w-full" />
          <AboveNav />
          <Navbar />
        </div>
      )}
    </div>
  );
}

export default App;
