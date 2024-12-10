// src/pages/Contact.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" onChange={handleChange} required />
      <label>Email:</label>
      <input type="email" name="email" onChange={handleChange} required />
      <label>Message:</label>
      <textarea name="message" onChange={handleChange} required />
      <button className="btn btn-danger" type="submit">Submit</button>
     <Link to={'/'}> <button className="btn btn-danger mt-5 W-50%">LOG OUT</button></Link>
    </form>
    
  );
};

export default Contact;