import React from "react";
import "./contact.css";
import NavBar from "../home/navBar/NavBar";

const Contact = () => {
  return (
    <div className="contact">
      <NavBar />
      <div className="contact-page">
        <h1>Contact Us</h1>
        <p>Fill out the form below to get in touch with us:</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
