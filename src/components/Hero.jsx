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
          <div className="teaser">
            <h4>Got an idea?</h4>
            <p>
            Whether it’s just a thought or a half-built plan, iEDC helps you shape ideas
            into meaningful and impactful solutions.
            </p>
          </div>

          <div className="teaser">
            <h4>Build Something Real</h4>
            <p>
            Design, develop, and test real products with technical guidance, hands-on support, and collaborative teamwork.
            </p>
          </div>
          <div className="teaser">
            <h4>Grow Beyond Campus</h4>
            <p>
            Connect with mentors, communities, and opportunities to take your startup beyond the classroom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
