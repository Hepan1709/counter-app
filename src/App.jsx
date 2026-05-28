import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((prev) => prev + 1);
  }

  function decrease() {
    setCount((prev) => prev - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="container">
      <h1>Counter App</h1>

      <div
        className="count-box"
        style={{
          color: count < 0 ? "#e74c3c" : count > 0 ? "#27ae60" : "#888",
        }}
      >
        {count}
      </div>

      <div className="buttons">
        <button onClick={decrease} className="btn decrease">
          Decrease
        </button>
        <button onClick={reset} className="btn reset">
          Reset
        </button>
        <button onClick={increase} className="btn increase">
          Increase
        </button>
      </div>

      {count === 0 && <p className="output">Count is at zero</p>}
      {count > 10 && <p className="output">Getting high!</p>}
      {count < -10 && <p className="output">Getting low!</p>}
    </div>
  );
}

export default App;
