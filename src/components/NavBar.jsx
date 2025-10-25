import React from "react";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#home">Home</a>
        <a href="#events">Events</a>
        <a href="#startup-stories">Startup Stories</a>
        <a href="#our-team">Our Team</a>
        <a href="#contact">Contact Us</a>
      </div>
    </nav>
  );
}
