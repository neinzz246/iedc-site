import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        {/* Contact Section */}
        <div className="footer-contact">
          <h3 className="footer-heading">Contact Us</h3>
          <p className="footer-description">
            Let’s collaborate, innovate, or just say hello! We’d love to hear from you.
          </p>

          <div className="footer-info">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <a href="mailto:your_email@example.com" className="info-text">
                your_email@example.com
              </a>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <a href="tel:+911234567890" className="info-text">
                +91 12345 67890
              </a>
            </div>
          </div>
        </div>

        {/* Social Section */}
        <div className="footer-social">
          <h3 className="footer-heading">Stay Connected</h3>
          <p className="footer-description">
            Follow us for updates, events, and opportunities.
          </p>
          <div className="social-links">
            <a
              href="https://instagram.com/your_insta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/in/your_linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://chat.whatsapp.com/your_community_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Organization Name — All rights reserved.</p>
      </div>
    </footer>
  );
}
