import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // Success message
  const [errors, setErrors] = useState(""); // Validation / send errors
  const [sending, setSending] = useState(false); // Sending state

  // Update form state
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Simple validation
  function validate() {
    if (!form.name || !form.email || !form.message) {
      return "All fields are required";
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      return "Invalid email address";
    }
    return "";
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setErrors(validationError);
      return;
    }

    setErrors("");
    setSending(true);

    // Send email via EmailJS using env variables
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setErrors("Something went wrong. Please try again.");
        }
      )
      .finally(() => setSending(false));
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        value={form.message}
        onChange={handleChange}
      />

      <button type="submit" className="submit-btn" disabled={sending}>
        {sending ? "Sending..." : "Send Message"}
      </button>

      {errors && <p className="error">{errors}</p>}
      {status && <p className="success">{status}</p>}
    </form>
  );
}
