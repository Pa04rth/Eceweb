import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or some async operation
    setTimeout(() => {
      setLoading(false);
    }, 5000); // Example delay
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1>Hello all</h1>
        </div>
      )}
    </div>
  );
}

export default App;
