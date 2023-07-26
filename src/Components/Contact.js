import React from "react";
 // Make sure to create a CSS file (ContactUs.css) and link it properly

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>

      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form action="/submit_contact" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: ups10@gmail.com</p>
        <p>Phone: 7295018814</p>
        <p>Address: chhota govindpur near vivek vidyalaya, jamshedpur, India</p>

        <h2>Find Us</h2>
        <div className="map-container">
        <iframe title="gmap_iframe" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=jamshedpur dayalbagh education instiute&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>

        <h2>Follow Us</h2>
        <ul>
          <li><a href="https://www.linkdien.com/example">LinkedIn</a></li>
          <li><a href="https://www.twitter.com/example">Twitter</a></li>
          <li><a href="https://www.instagram.com/example">Instagram</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
