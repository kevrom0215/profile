import React, { useState } from "react";
import "../../styles/global.css";
import "./Playground.css"

const Playground = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update state with the input value
  };
  return (
    <div className="wrapper">
      <div className="playground-item">
        <form>
          <label htmlFor="userInput">Your Input: </label>
          <input
            type="text"
            id="userInput"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type something here..."
          />
        </form>
        <div style={{ marginTop: "20px" }}>
          <h2>Output:</h2>
          <p>{inputValue}</p> {/* Display the current input value */}
        </div>
      </div>
      <div className="playground-item">
        <p>hello</p>
      </div>
    </div>
  );
};

export default Playground;
