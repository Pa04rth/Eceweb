import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import Navbar from "./components/Navbar";
import AboveNav from "./components/AboveNav";

import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or some async operation
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  // Example delay
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <AboveNav className="" />
          <Navbar />
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide  h-screen  z-[0] "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <img src="./crousel1-2.jpg" class="d-block  w-100 " alt="..." />
              </div>
              <div className="carousel-item">
                <img src="./crousel2-2.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="./crousel3-3.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <Footer className=" mt-10" />
        </div>
      )}
    </div>
  );
}

export default App;
