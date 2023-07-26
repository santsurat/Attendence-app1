import React from "react";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h2>Contact Us</h2>
          <p>Email: ups10@gmail.com.com</p>
          <p>Phone: 7295018814</p>
          <p>Address: chhota govindpur near vivek vidyalaya, jamshedpur, India</p>
        </div>

        <div className="footer-section navigation-links">
          <h2>Quick Links</h2>
          <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li> <Link to="/">Body</Link></li> */}
          <li>
            {" "}
            <Link to="About">About Us</Link>
          </li>
          <li>
            <Link to="Contact">Contact us</Link>
          </li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <h2>Follow Us</h2>
          <ul>
          <li><a href="https://www.linkdien.com/example">LinkedIn</a></li>
          <li><a href="https://www.twitter.com/example">Twitter</a></li>
          <li><a href="https://www.instagram.com/example">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} sant surat. All rights reserved.</p>
        <p><a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Use</a></p>
      </div>
    </footer>
  );
};

export default Footer;
