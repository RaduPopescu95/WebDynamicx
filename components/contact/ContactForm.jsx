"use client";

import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [showMessage, setShowMessage] = useState(false);

  // ▶️ 1. Adăugăm tracking pe PAGE LOAD
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "ads_conversion_Contact_Us_1", {
        event_category: "engagement",
        event_label: "Page Load",
      });
    }
  }, []);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (typeof window !== "undefined" && window.gtag) {
      // Tracking suplimentar (opțional)
      window.gtag("event", "ads_conversion_Contact_Us_1", {
        event_category: "conversion",
        event_label: "Form Submit",
      });
      // Evenimentul specific de conversie Google Ads:
      window.gtag("event", "conversion", {
        send_to: "AW-11120750022/-bXQCMjLuKsaEMbb5LYp",
      });
    }

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
                required="required"
              />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                type="email"
                placeholder="Adresă e-mail*"
                name="email"
                required="required"
              />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                type="text"
                placeholder="Număr telefon*"
                name="phone"
                required="required"
              />
            </div>
          </div>

       

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <input
                type="text"
                placeholder="Subiect*"
                name="subject"
                required="required"
              />
            </div>
          </div>

          <div className="col-12">
            <div className="input-group-meta form-group mb-30">
              <textarea
                placeholder="Mesajul tău*"
                name="message"
                required="required"
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
