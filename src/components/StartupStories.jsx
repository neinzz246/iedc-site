import React from "react";
import { motion } from "framer-motion";
import "./StartupStories.css";

const stories = [
  {
    name: "TechNest",
    founder: "Aisha Mathew",
    image: "/images/technest.jpg",
    story: "Empowering 200+ young innovators through AI-driven tools.",
  },
  {
    name: "GreenBite",
    founder: "Rahul Dev",
    image: "/images/greenbite.jpg",
    story: "Turning kitchen waste into compost — now supplying 50+ cafes.",
  },
  {
    name: "AeroSwift",
    founder: "Neha Thomas",
    image: "/images/aeroswift.jpg",
    story: "Drone-based logistics startup reducing delivery times by 60%.",
  },
  {
    name: "ByteBloom",
    founder: "Arjun R",
    image: "/images/bytebloom.jpg",
    story: "Helping small businesses go digital with one-click online store tools.",
  },
];

export default function StartupStories() {
  return (
    <section className="startup-stories-section">
      <h2 className="section-title">Startup Stories</h2>
      <div className="stories-grid">
        {stories.map((s, i) => {
          const direction = i % 2 === 0 ? -50 : 50; // alternate slide left/right
          return (
            <motion.div
              className="story-card"
              key={i}
              initial={{ opacity: 0, x: direction }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <img src={s.image} alt={s.name} className="story-img" />
              <h3 className="story-name">{s.name}</h3>
              <p className="story-founder">By {s.founder}</p>
              <p className="story-desc">{s.story}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
