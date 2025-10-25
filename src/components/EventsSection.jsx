import React, { useState } from "react";
import Slider from "react-slick";
import eventsData from "../data/eventsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./EventsSection.css";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div className="slick-arrow next" onClick={onClick}>
    &#10095;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow prev" onClick={onClick}>
    &#10094;
  </div>
);

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const filteredEvents = eventsData.filter(event => event.type === activeTab);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="events" className="events-section">
      <div className="container">
        <h2 className="section-title">Our Events</h2>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={activeTab === "upcoming" ? "active" : ""}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Events
          </button>
          <button
            className={activeTab === "past" ? "active" : ""}
            onClick={() => setActiveTab("past")}
          >
            Past Events
          </button>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {filteredEvents.map(event => (
            <div className="event-card" key={event.id}>
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-desc">{event.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
