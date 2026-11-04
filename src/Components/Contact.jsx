import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {

  const API_URL = `http://${window.location.hostname}:30500`;
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/api/contact/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Error sending message");
    }
  };

  return (
    <section className="contact" id="contact">

      <h2>Contact Us</h2>
      <p>Have questions? Send us a message.</p>

      <form onSubmit={handleSubmit} className="contact-form">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>

      </form>
    </section>
  );
};

export default Contact;
