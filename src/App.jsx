import React, { useState } from "react";
import Carousel from "./components/Carousel";

export default function App() {
  const [paused, setPaused] = useState(false);
  const [delay, setDelay] = useState(5000); // default 5 sec

  return (
    <div className="app-root">
      {/* Header */}
      <header className="topbar">
        <div className="logo">
          <img src="/images/logo.webp" alt="GODFLIX" className="logo-img" />
          <span className="logo-text">GODFLIX</span>
        </div>

        <div className="controls-header">
          <div className="control-item">
            <label>Timer</label>
            <select
              value={delay}
              onChange={(e) => setDelay(Number(e.target.value))}
            >
              <option value={2000}>2 sec</option>
              <option value={5000}>5 sec</option>
              <option value={7000}>7 sec</option>
              <option value={10000}>10 sec</option>
            </select>
          </div>

          <div className="control-item">
            <button onClick={() => setPaused((p) => !p)}>
              {paused ? "▶ Play" : "⏸ Pause"}
            </button>
          </div>
        </div>
      </header>

      {/* Carousel */}
      <Carousel paused={paused} delay={delay} />

      {/* Footer */}
      <footer className="footer">Shree Swami Samartha Seva Sar Sangh❤️</footer>
    </div>
  );
}
