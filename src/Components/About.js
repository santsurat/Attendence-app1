//import { Typography } from "@mui/material";
import React from "react";


const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Us</h2>
        <p>We are a passionate team dedicated to providing high-quality Web app to our customers. Our mission is to...</p>
        <p>Since our establishment in 2021, we have been striving to...</p>
        <p>At [Work From Home], we strongly believe in...</p>


        <h3>Meet the Team</h3>
        <div className="team-member">
          <img src="team_member1.jpg" alt="Team Member 1 " />
          <h4>Uday Pratap Singh</h4>
          <p>Co-Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="team_member2.jpg" alt="Team Member 2 " />
          <h4>SANT SURAT</h4>
          <p>Product Manager</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </section>
  );
};

export default AboutSection;
