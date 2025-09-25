import React, { useState, useEffect } from 'react';
import "./Card.css";

const Card = (props) => {
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  // Start the timer
  useEffect(() => {
    if (running && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setRunning(false);
    }
  }, [running, timeLeft]);

  const handleChange = (e) => {
    const val = e.target.value;
    setInput(val);
    props.setName(val);

    // count only alphabets (a-z, A-Z)
    const alphaCount = val.replace(/[^a-zA-Z]/g, "").length;
    setCount(alphaCount);

    // start timer on first keypress
    if (!running && timeLeft === 60) {
      setRunning(true);
    }
  };

  const resetGame = () => {
    setInput("");
    setCount(0);
    setTimeLeft(60);
    setRunning(false);
    props.setName("");
  };

  return (
    <div className="container">
      <div className="left">
        <h2>Alphabet Count</h2>
        <p> Time Left: {timeLeft}s</p>
        <p> Alphabets: {count}</p>
        <button onClick={resetGame}>Reset</button>
      </div>

      <div className="right">
        <h1>CHECK YOUR TYPING SPEED </h1>
        <h2>Made by Faraz Khan</h2>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          disabled={!running && timeLeft === 0}
          placeholder="Start typing..."
        />
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};

export default Card;
