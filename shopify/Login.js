import React, { useState } from "react";
import "./form.css";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._-]+@[a-z]+\.[a-z]{2,4}$/.test(email);
  };

  const isValidPhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = {};

    if (formData.name.trim() === "") {
      validationError.name = "Name is required";
    }
    if (!isValidEmail(formData.email)) {
      validationError.email = "Invalid Email";
    }
    if (!isValidPhone(formData.phone)) {
      validationError.phone = "Invalid Phone Number";
    }

    if (Object.keys(validationError).length === 0) {
      alert("Form Submitted!");
    } else {
      setErrors(validationError);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Form Validation</h1>
      <label>Name</label>&nbsp;
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Enter your name"
        onChange={handleChange}
      />
      {errors.name && <div>{errors.name}</div>}
      <br />
      <br />
      <label>Email</label>&nbsp;
      <input
        type="text"
        name="email"
        value={formData.email}
        placeholder="Enter your email"
        onChange={handleChange}
      />
      {errors.email && <div>{errors.email}</div>}
      <br />
      <br />
      <label>Phone Number</label>&nbsp;
      <input
        type="text"
        name="phone"
        value={formData.phone}
        placeholder="Enter your phone number"
        onChange={handleChange}
      />
      {errors.phone && <div>{errors.phone}</div>}
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
