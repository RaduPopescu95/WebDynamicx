"use client";

import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [showMessage, setShowMessage] = useState(false);

  const gtag_report_conversion = (callback) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-16914216527/BzuPCMLbhLYaEM_sqYE_",
        event_callback: callback,
      });
    } else {
      callback(); // fallback dacă gtag nu este disponibil
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const callback = () => {
      emailjs
        .sendForm(
          "service_4bilcxr",
          "template_i97xbjh",
          event.target,
          "0YKYBGFsUcHd1F4jC"
        )
        .then(
          (result) => {
            console.log("Email successfully sent!", result.text);
            setShowMessage(true);
          },
          (error) => {
            console.log("Failed...", error.text);
          }
        );
    };

    gtag_report_conversion(callback);
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
            <div className="input-group-meta form-group mb-30">
              <input
                type="text"
                placeholder="Numele tău*"
                name="name"
                required
              />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                type="email"
                placeholder="Adresă e-mail*"
                name="email"
                required
              />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                type="text"
                placeholder="Număr telefon*"
                name="phone"
                required
              />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                type="text"
                placeholder="Subiect*"
                name="subject"
                required
              />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <textarea
                placeholder="Mesajul tău*"
                name="message"
                required
              />
            </div>
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn-twentyOne fw-500 tran3s d-block"
            >
              Trimite mesaj
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
