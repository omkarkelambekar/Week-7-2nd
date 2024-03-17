
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (you can replace this with your actual form submission logic)
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact">
      <h2><u>Contact Us</u></h2>
      {formSubmitted ? (
        <p>Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"><u>Name:</u></label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email"><u>Email:</u></label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="message"><u>Message:</u></label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit"><u>Submit</u></button>
        </form>
      )}
    </section>
  );
}

export default ContactForm;
