import React, { useState, useRef } from "react";
// Correct import
import eventsData from "../data/eventsData.js";
import "./EventsSection.css";

export default function Events() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 0.8;
    if (direction === "left") container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    else container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const eventsToShow = eventsData.filter(event => event.type === activeTab);

  return (
    <section className="events-section" id="events">
      <h2 className="section-title">Our Events</h2>

      <div className="tabs">
        <button
          className={activeTab === "upcoming" ? "active" : ""}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={activeTab === "past" ? "active" : ""}
          onClick={() => setActiveTab("past")}
        >
          Past
        </button>
      </div>

      <div className="carousel-wrapper">
        <button className="carousel-btn prev" onClick={() => scroll("left")}>&lt;</button>

        <div className="events-container" ref={scrollRef}>
          {eventsToShow.map(event => (
            <div className="event-card" key={event.id}>
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-desc">{event.description}</p>
            </div>
          ))}
        </div>

        <button className="carousel-btn next" onClick={() => scroll("right")}>&gt;</button>
      </div>
    </section>
  );
}
