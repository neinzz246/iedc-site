import React, { useState } from "react";

export default function MissionCard({ title, short, details }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mission-card">
      <div className="mission-box">
        <p className="mission-short">{short}</p>
        <div className="mission-footer">
          <button className="mission-btn" onClick={() => setOpen(!open)}>
            {title}
          </button>
          <button className="arrow" onClick={() => setOpen(!open)}>></button>
        </div>
      </div>

      {open && (
        <div className="mission-detail">
          <p>{details}</p>
        </div>
      )}
    </div>
  );
}
