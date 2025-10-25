import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import MissionGrid from "./components/MissionGrid";
import StartupStories from "./components/StartupStories";
import EventsSection from "./components/EventsSection.jsx";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="app">
          <Header />
          <NavBar />
          <main className="page">
            {/* Home Section */}
            <motion.section
              id="home"
              className="snap-section"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Hero />
            </motion.section>

            {/* Missions Section */}
            <motion.section
              id="missions"
              className="snap-section"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <MissionGrid />
            </motion.section>

            {/* Startup Stories Section */}
            <motion.section
              id="startup-stories"
              className="snap-section"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <StartupStories />
            </motion.section>

            {/* Events Section */}
            <motion.section
              id="events"
              className="snap-section"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <EventsSection />
            </motion.section>

            {/* Team Section */}
            <motion.section
              id="our-team"
              className="snap-section"
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <TeamSection />
            </motion.section>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
