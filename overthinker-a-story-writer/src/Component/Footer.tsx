import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Learn more about our company, mission, and team.</p>
          <Link style={{color:"white"}} to="/about">About Us</Link>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Have questions? Get in touch with us.</p>
          <a style={{color:"white"}} href="mailto:support@example.com">support@overthinker.com</a>
          <p>+91 96280 20787</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>
              <Link to="/services/service1">Writing</Link>
            </li>
            <li>
              <Link to="/services/service2">Editing</Link>
            </li>
            <li>
              <Link to="/services/service3">Updating</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Newsletter Signup</h4>
          <p>Subscribe to our newsletter to stay updated.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-section">
          <h4>Social Media</h4>
          <ul className="social-media-links">
            <li>
              <a
                href="https://www.instagram.com/imanchalsingh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/imanchalsingh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/anchal-singh-a22a75268/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.threads.net/@imanchalsingh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} OverThinker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
