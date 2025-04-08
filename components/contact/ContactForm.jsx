"use client";

import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [showMessage, setShowMessage] = useState(false);

  // 🔁 Funcția oferită de Google pentru tracking cu întârziere
  const gtagSendEvent = (callback) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "ads_conversion_Contact_Us_1", {
        event_callback: callback,
        event_timeout: 2000,
      });
    } else {
      callback(); // fallback imediat
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const callback = () => {
      // După ce s-a trimis conversia, trimitem și emailul
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

    // Trimite evenimentul de conversie și așteaptă 2 secunde înainte de callback
    gtagSendEvent(callback);
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
