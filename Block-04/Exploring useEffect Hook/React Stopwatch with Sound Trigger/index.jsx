import React, { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  // Reference for audio (free sound)
  const beepRef = useRef(
    new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg")
  );

  // Handle start
  const startStopwatch = () => {
    setRunning(true);
  };

  // Handle stop
  const stopStopwatch = () => {
    setRunning(false);
  };

  // Reset (optional)
  const resetStopwatch = () => {
    setRunning(false);
    setSeconds(0);
  };

  // Effect for timer
  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  // Effect to play sound at 10 seconds
  useEffect(() => {
    if (seconds === 10) {
      if (beepRef.current) {
        beepRef.current.play();
      } else {
        console.log("⏰ Ding! 10 seconds reached!");
      }
    }
  }, [seconds]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f9f9f9",
      }}
    >
      <h1>⏱ Stopwatch</h1>
      <h2>{seconds} seconds</h2>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={startStopwatch}
          disabled={running}
          style={{
            padding: "10px 20px",
            margin: "5px",
            border: "none",
            borderRadius: "6px",
            background: "green",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Start
        </button>
        <button
          onClick={stopStopwatch}
          disabled={!running}
          style={{
            padding: "10px 20px",
            margin: "5px",
            border: "none",
            borderRadius: "6px",
            background: "red",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Stop
        </button>
        <button
          onClick={resetStopwatch}
          style={{
            padding: "10px 20px",
            margin: "5px",
            border: "none",
            borderRadius: "6px",
            background: "gray",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
