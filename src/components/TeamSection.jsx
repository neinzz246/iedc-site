import React, { useState } from "react";
import teamData from "../data/teamData";
import "./TeamSection.css";

export default function TeamSection() {
  const [openTeam, setOpenTeam] = useState(null);
  const [showMore, setShowMore] = useState(false);

  // Separate core members (first 20) and other members
  const coreMembers = teamData.slice(0, 20);
  const otherMembers = teamData.slice(20);

  // Group other members by team
  const groupedTeams = otherMembers.reduce((acc, member) => {
    if (!acc[member.team]) acc[member.team] = [];
    acc[member.team].push(member);
    return acc;
  }, {});

  const toggleTeam = (team) => {
    setOpenTeam(openTeam === team ? null : team);
  };

  return (
    <section id="our-team" className="snap-section team-section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">
          Meet the incredible people behind each division
        </p>

        {/* Core Team */}
        <h3 className="team-title" style={{ marginTop: "20px" }}>Core Team</h3>
        <div className="team-grid">
          {coreMembers.map((member) => (
            <div key={member.id} className="team-card">
              <img src={member.photo} alt={member.name} className="team-photo" />
              <h3 className="team-name">{member.name}</h3>
              <p className="team-position">{member.position}</p>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {otherMembers.length > 0 && (
          <div style={{ textAlign: "center", margin: "30px 0" }}>
            <button
              className="show-more-btn"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        )}

        {/* Other Teams (collapsible) */}
        {showMore &&
          Object.keys(groupedTeams).map((team) => (
            <div key={team} className="team-group">
              <div
                className={`team-header ${openTeam === team ? "open" : ""}`}
                onClick={() => toggleTeam(team)}
              >
                <h3 className="team-title">{team}</h3>
                <span className="team-arrow" />
              </div>

              {openTeam === team && (
                <div className="team-grid">
                  {groupedTeams[team].map((member) => (
                    <div key={member.id} className="team-card">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="team-photo"
                      />
                      <h3 className="team-name">{member.name}</h3>
                      <p className="team-position">{member.position}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </section>
  );
}
