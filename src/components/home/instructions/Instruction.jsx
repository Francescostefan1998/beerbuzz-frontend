import React from "react";
import "./instruction.css";
import NavBar from "../../home/navBar/NavBar";

const Instruction = () => {
  return (
    <div className="instruction">
      <NavBar />
      <div className="instruction-page-container">
        <h1>Instructions</h1>
        <p>Welcome to our app! Here's how to use it:</p>
        <ol>
          <li>Step 1: Do this thing.</li>
          <li>Step 2: Do this other thing.</li>
          <li>Step 3: Finally, do this last thing.</li>
        </ol>
        <p>That's it! Enjoy using our app.</p>
      </div>
    </div>
  );
};

export default Instruction;
