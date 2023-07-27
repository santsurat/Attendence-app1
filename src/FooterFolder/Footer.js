import React from "react";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer className="footer">
      

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

        

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sant Surat,Inc</p>
        <p><a href="/privacy" style={{color:'white'}}>Privacy Policy</a> | <a href="/terms" style={{color:'white'}}>Terms of Use</a></p>
      </div>
    </footer>
  );
};

export default Footer;
