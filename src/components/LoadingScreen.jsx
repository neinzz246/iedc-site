import React, { useEffect } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loading-overlay">
      <div className="text-container">
        {/* Hidden placeholder to align the final "i" */}
        <span className="letter placeholder-i">i</span>

        {/* Word animation */}
        <span className="letter">E</span>
        <span className="letter">D</span>
        <span className="letter">C</span>
        <span className="letter"> </span>
        <span className="letter">M</span>
        <span className="letter">A</span>
        <span className="letter">C</span>
        <span className="letter">E</span>

        {/* Jumping 'i' animation */}
        <span className="jumping-i">
          i<span className="dot-final"></span>
        </span>
      </div>

      {/* Logo fade-in */}
      <img src="/logo.png" alt="IEDC MACE Logo" className="logo" />

      {/* Sparkles */}
      <div className="spark spark1"></div>
      <div className="spark spark2"></div>
      <div className="spark spark3"></div>
    </div>
  );
}
