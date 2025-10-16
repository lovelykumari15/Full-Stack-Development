import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      {/* Outer Box */}
      <div
        style={{
          width: "300px",
          backgroundColor: "#f5f5f5",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          textAlign: "left",
        }}
      >
        <h2 style={{ textAlign: "center" }}>React Tutorial</h2>

        <h4>Topics</h4>
        <ul>
          <li>Basics</li>
          <li>Single Page App</li>
          <li>Rendering</li>
          <li>DOM & Virtual DOM</li>
          <li>JSX</li>
          <li>React</li>
        </ul>

        <button
          onClick={() => setCount(count + 1)}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Count: {count}
        </button>
      </div>
    </div>
  );
}

export default App;