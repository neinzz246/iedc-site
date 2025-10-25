import React, { useEffect, useState } from "react";


export default function Header() {
  const [text, setText] = useState("");
  const fullText = "IEDC MACE";
  const typingSpeed = 150; // ms
  const pauseDuration = 1000; // pause before restarting

  useEffect(() => {
    let i = 0;
    let forward = true;

    const type = () => {
      if (forward) {
        if (i < fullText.length) {
          setText(fullText.slice(0, i + 1));
          i++;
        } else {
          forward = false;
          setTimeout(type, pauseDuration);
          return;
        }
      } else {
        if (i > 0) {
          setText(fullText.slice(0, i - 1));
          i--;
        } else {
          forward = true;
          setTimeout(type, typingSpeed);
          return;
        }
      }
      setTimeout(type, typingSpeed);
    };

    type();
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <div className="logo-wrap">
          {/* ✅ use absolute path since image is in public/assets */}
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
