import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or some async operation
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Example delay
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1>Hello all</h1>

          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
