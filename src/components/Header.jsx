import React, { useEffect, useState } from "react";

export default function Header() {
  const [text, setText] = useState("");
  const typingSpeed = 150; // ms
  const pauseDuration = 1000; // pause before restarting

  // ✅ Full text as array of elements
  const fullTextArray = [
    <span key="i" className="i-dot">
      i<span className="dot"></span>
    </span>,
    "E", "D", "C", " ", "M", "A", "C", "E"
  ];

  useEffect(() => {
    let index = 0;
    let forward = true;

    const type = () => {
      if (forward) {
        if (index < fullTextArray.length) {
          setText(fullTextArray.slice(0, index + 1));
          index++;
          setTimeout(type, typingSpeed);
        } else {
          forward = false;
          setTimeout(type, pauseDuration); // pause at full text
        }
      } else {
        if (index > 0) {
          setText(fullTextArray.slice(0, index - 1));
          index--;
          setTimeout(type, typingSpeed);
        } else {
          forward = true;
          setTimeout(type, typingSpeed);
        }
      }
    };

    type();
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <div className="logo-wrap">
          <img src="/logo.png" alt="IEDC MACE" className="logo" />
        </div>
        <div className="title-wrap">
          <h1 className="site-title typewriter">{text}</h1>
          <div className="tagline">
            <span>innovate</span>
            <span className="sep">|</span>
            <span>ideate</span>
            <span className="sep">|</span>
            <span>create</span>
          </div>
        </div>
      </div>
    </header>
  );
}

