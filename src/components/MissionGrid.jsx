import React from "react";
import MissionCard from "./MissionCard";

const missions = [
  {
    id: 1,
    title: "MISSION",
    short: "enturies, but also the leap into electronic typesetting, remaining essentially unchanged. I",
    details:
      "Detailed mission content 1. Put real mission text here. It will expand/collapse when you click >."
  },
  {
    id: 2,
    title: "MISSION",
    short: "try. Lorem Ihe 1500s, when an ecimen book...",
    details:
      "Detailed mission content 2. Put real mission text here."
  },
  {
    id: 3,
    title: "MISSION",
    short: "try. Lorem Ihe 1500s, when an ecimen book...",
    details:
      "Detailed mission content 3. Put real mission text here."
  }
];

export default function MissionGrid() {
  return (
    <div className="container mission-section">
      <h2 className="section-title">Missions</h2>
      <div className="missions-grid">
        {missions.map(m => (
          <MissionCard key={m.id} {...m} />
        ))}
      </div>
    </div>
  );
}
