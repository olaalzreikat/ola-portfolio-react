import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY,
    ).then(() => {
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    }).catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  const inputStyle = {
    width: "100%", background: "#f5f0e8",
    border: "1px solid rgba(194,92,42,0.2)",
    borderRadius: "16px", padding: "16px 20px",
    color: "#2d1f14", fontSize: "1rem",
    outline: "none", transition: "border-color 0.2s",
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-24">
      <RevealOnScroll>
        <div className="w-full max-w-2xl px-8">
          <h2 className="text-5xl font-bold mb-3 text-center" style={{ color: "#2d1f14" }}>Get in Touch</h2>
          <p className="text-center mb-12" style={{ color: "#9c8070", fontFamily: "'Caveat', cursive", fontSize: "1.3rem" }}>Have a project in mind? I'd love to hear from you.</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" id="name" name="name" required placeholder="Name"
              value={formData.name} style={inputStyle}
              onFocus={e => e.target.style.borderColor = "#c25c2a"}
              onBlur={e => e.target.style.borderColor = "rgba(194,92,42,0.2)"}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <input type="email" id="email" name="email" required placeholder="Email"
              value={formData.email} style={inputStyle}
              onFocus={e => e.target.style.borderColor = "#c25c2a"}
              onBlur={e => e.target.style.borderColor = "rgba(194,92,42,0.2)"}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <textarea id="message" name="message" required rows={5} placeholder="Message"
              value={formData.message} style={{ ...inputStyle, resize: "none" }}
              onFocus={e => e.target.style.borderColor = "#c25c2a"}
              onBlur={e => e.target.style.borderColor = "rgba(194,92,42,0.2)"}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            <button type="submit"
              className="w-full py-3 px-6 rounded-xl text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#c25c2a", color: "#fff" }}>
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
