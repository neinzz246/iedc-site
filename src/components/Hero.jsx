import React from "react";

export default function Hero() {
  return (
    <div className="hero container">
      <div className="hero-left">
        <a href="#missions" className="hero-sub">Got an idea?</a>

        <p className="hero-text">
          Welcome to iEDC MACE — where innovation meets execution. Scroll down
          to explore missions, events and startup stories.
        </p>
        <a href="#missions" className="cta">Get Started</a>
      </div>

      <div className="hero-right">
        {/* three stacked yellow boxes (cards) shown as preview */}
        <div className="teaser-row">
          <div className="teaser">try. Lorem Ihe 1500s, when an ecimen book...</div>
          <div className="teaser">try. Lorem Ihe 1500s, when an ecimen book...</div>
          <div className="teaser">try. Lorem Ihe 1500s, when an ecimen book...</div>
        </div>
      </div>
    </div>
  );
}
