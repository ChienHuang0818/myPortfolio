import React, { useState } from "react";
import { FaEnvelope, FaCheck, FaSpinner, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "../../App.css";

function ContactMe() {
  const EMAILJS_SERVICE_ID = "service_qwm3p29";
  const EMAILJS_TEMPLATE_ID = "template_nu6pem8";
  const EMAILJS_PUBLIC_KEY = "5rJbA13vU7HMOhnaN";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "chienhuang0818@gmail.com",
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully!", response.status, response.text);
      setSubmitStatus("success");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div className="contact--container">
        <h2 className="contact--title">Contact Me</h2>
        <p className="contact--text">
          If you have any inquiries or would like to collaborate, feel free to reach out.
        </p>

        <form className="contact--form" onSubmit={handleSubmit}>
          <div className="form-instruction">
            <p>📧 Fill out the form below and click "Send Email" to send directly to my inbox</p>
          </div>

          <div className="form--group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form--group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form--group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form--group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`contact--submit--btn ${isSubmitting ? "submitting" : ""} ${
              submitStatus ? submitStatus : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="spinner" /> Processing...
              </>
            ) : submitStatus === "success" ? (
              <>
                <FaCheck /> Sent Successfully!
              </>
            ) : submitStatus === "error" ? (
              <>
                <FaEnvelope /> Try Again
              </>
            ) : (
              <>
                <FaPaperPlane /> Send Email
              </>
            )}
          </button>

          {/* Status Message */}
          {submitStatus && (
            <div className={`submit-status ${submitStatus}`}>
              {submitStatus === "success" && (
                <p>✅ Email sent successfully! I'll get back to you soon</p>
              )}
              {submitStatus === "error" && (
                <p>❌ Sending failed, please check your internet connection or try again later</p>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
