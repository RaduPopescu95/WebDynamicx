"use client";

import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./ContactPopup.scss";

const ContactPopup = ({ isOpen, onClose }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

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
            setTimeout(() => {
              setIsLoading(false);
              setShowMessage(true);
              // Mesajul de succes rămâne afișat până când utilizatorul închide manual
            }, 1500); // Simulează timp de procesare pentru loading
          },
          (error) => {
            console.log("Failed...", error.text);
            setIsLoading(false);
            // Poți adăuga aici un mesaj de eroare dacă vrei
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

  // Close popup when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Reset states when closing
  const handleClose = () => {
    setIsLoading(false);
    setShowMessage(false);
    onClose();
  };

  // Handle WhatsApp click without closing popup
  const handleWhatsAppClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    // Track conversion if needed
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11120750022/whatsapp_conversion",
      });
    }
    // Open WhatsApp without closing popup
    window.open("https://wa.me/40774550758?text=Bună ziua! Cum mă puteți ajuta?", "_blank");
  };

  // Handle phone click without closing popup
  const handlePhoneClick = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    // Track conversion if needed
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11120750022/phone_conversion",
      });
    }
    // Initiate phone call without closing popup
    window.location.href = "tel:+40774550758";
  };

  // Close popup on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="contact-popup-overlay" onClick={handleOverlayClick}>
      <div className="contact-popup">
        <div className="contact-popup__header">
          <h3 className="contact-popup__title">Contactează-ne</h3>
          <button 
            className="contact-popup__close" 
            onClick={handleClose}
            aria-label="Închide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path 
                d="M18 6L6 18M6 6L18 18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="contact-popup__body">
          {isLoading && (
            <div className="contact-popup__loading">
              <div className="loading-spinner">
                <div className="spinner"></div>
              </div>
              <p>Se trimite mesajul...</p>
            </div>
          )}
          
          {showMessage && (
            <div className="contact-popup__success">
              <div className="success-icon">✅</div>
              <h4>Mesaj trimis cu succes!</h4>
              <p>Mulțumim pentru mesaj! Vă vom contacta în cel mai scurt timp posibil.</p>
              <div className="quick-contact">
                <p><strong>Vrei să iei legătură mai repede?</strong></p>
                <div className="quick-actions">
                  <button className="quick-btn whatsapp-btn" onClick={handleWhatsAppClick}>
                    <i className="bi bi-whatsapp"></i>
                    WhatsApp
                  </button>
                  <button className="quick-btn phone-btn" onClick={handlePhoneClick}>
                    <i className="bi bi-telephone"></i>
                    Sună-ne
                  </button>
                </div>
              </div>
              <button className="close-success-btn" onClick={handleClose}>
                <i className="bi bi-x-lg"></i>
                Închide
              </button>
            </div>
          )}
          
          {!isLoading && !showMessage && (
            <form onSubmit={handleSubmit} className="contact-popup__form">
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Numele tău*"
                  name="name"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Adresă e-mail*"
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Număr telefon*"
                  name="phone"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Subiect*"
                  name="subject"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <textarea
                  placeholder="Mesajul tău*"
                  name="message"
                  rows="4"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <button 
                type="submit" 
                className={`contact-popup__submit ${isLoading ? 'loading' : ''}`}
                disabled={isLoading || showMessage}
              >
                {isLoading ? (
                  <>
                    <div className="btn-spinner"></div>
                    Se trimite...
                  </>
                ) : (
                  'Trimite mesaj'
                )}
              </button>
            </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
