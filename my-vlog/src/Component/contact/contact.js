import React from 'react';

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us for any inquiries or questions.</p>
      <div className="contact-details">
        <h2>Contact Information</h2>
        <ul>
          <li>Email: example@example.com</li>
          <li>Phone: +1234567890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </div>
      <div className="contact-form">
        <h2>Send us a Message</h2>
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
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;

