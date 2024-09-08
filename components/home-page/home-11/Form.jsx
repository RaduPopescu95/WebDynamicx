"use client";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_4bilcxr", // ID-ul serviciului
        "template_i97xbjh", // ID-ul template-ului
        event.target,
        "0YKYBGFsUcHd1F4jC" // Cheia publică API
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setShowMessage(true);
          event.target.reset(); // Resetează formularul după trimitere
        },
        (error) => {
          console.log("Failed...", error.text);
        }
      );
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <div className="form-style-one" data-aos="fade-up">
      {showMessage && (
        <div className="alert alert-success fixed-bottom mb-0 text-center">
          Mulțumim pentru mesaj! Vă vom contacta în cel mai scurt timp posibil.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="messages" />
        <div className="row controls">
          <div className="col-12">
            <div className="input-group-meta form-group mb-20">
              <input
                type="text"
                placeholder="Numele tau*"
                name="name"
                required="required"
                data-error="Name is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta form-group mb-20">
              <input
                type="number"
                placeholder="Numar telefon*"
                name="phone"
                required="required"
                data-error="Phone number is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta form-group mb-20">
              <input
                type="email"
                placeholder="Email*"
                name="email"
                required="required"
                data-error="Valid email is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>

          {/* Input pentru Subject */}
          <div className="col-12">
            <div className="input-group-meta form-group mb-20">
              <input
                type="text"
                placeholder="Subiect*"
                name="subject"
                required="required"
                data-error="Subject is required."
              />
              <div className="help-block with-errors" />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta form-group mb-15">
              <textarea
                placeholder="Mesajul tau*"
                name="message"
                required="required"
                data-error="Please, leave us a message."
                defaultValue={""}
              />
              <div className="help-block with-errors" />
            </div>
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn-thirteen w-100 fw-500 tran3s text-uppercase"
            >
              TRIMITE MESAJ
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
