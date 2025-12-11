import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./LoadingScreen.css";

export default function LoadingScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Duration of cube animation BEFORE fade-out starts
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2500); // adjust to match your cube animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="loader-wrapper"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onAnimationComplete={() => fadeOut && onFinish()}
    >
      <div className="cube">
        <div className="face front">iEDC</div>
        <div className="face back">iEDC</div>
        <div className="face left">iEDC</div>
        <div className="face right">iEDC</div>
        <div className="face top">iEDC</div>
        <div className="face bottom">iEDC</div>
      </div>

      
    </motion.div>
  );
}


