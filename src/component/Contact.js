import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import Footer from './Footer';
import axios from 'axios'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneno: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const today = new Date().toISOString().split('T')[0];
  const handleSubmit = (e) => {
    axios.post("https://localhost:7221/api/Event/contact",formData);
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent!");
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      date :'',
      phoneno: '',
      message: '',
    });
  };

  return (
    <div>
    <motion.div
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="contact-left"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="subtitle">LET'S TALK, SHALL WE?</p>
        <h1 className="headline">
          Want to plan <br /> a surprise?
        </h1>
      </motion.div>

      <motion.div
        className="contact-right"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-row">
            <input
              type="text"
              name="firstname"
              placeholder="First Name *"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="Date"
            name="date"
            // placeholder="*"
            value={formData.date}
            onChange={handleChange}
            min={today}
            required
          />
          <input
            type="tel"
            name="phoneno"
            placeholder="Phone *"
            value={formData.phoneno}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Write a message"
            value={formData.message}
            onChange={handleChange}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>

        </form>
      </motion.div>
    </motion.div>
   <Footer />
   </div>
  );
};

export default Contact;
