"use client";

import React, { useState } from "react";
import ContactPopup from "./ContactPopup";
import "./BottomNavbar.scss";
import "./ContactPopup.scss";

const BottomNavbar = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const handlePhoneCall = () => {
    // Trigger conversion tracking pentru telefon
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11120750022/phone_conversion",
      });
    }
    window.location.href = "tel:+40774550758";
  };

  const handleWhatsApp = () => {
    // Trigger conversion tracking pentru WhatsApp
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11120750022/Erj4CKvAuKsaEMbb5LYp",
      });
    }
    window.open("https://wa.me/40774550758?text=Bună ziua! Cum mă puteți ajuta?", "_blank");
  };

  const handleContact = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-11120750022/contact_conversion",
      });
    }
    setIsContactPopupOpen(true);
  };

  return (
    <>
      <div className="bottom-navbar">
      <button 
        className="bottom-navbar__btn bottom-navbar__btn--phone"
        onClick={handlePhoneCall}
        aria-label="Sună-ne"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09501 3.90347 2.12788 3.62476 2.21649 3.36162C2.3051 3.09849 2.44738 2.85669 2.63482 2.65162C2.82226 2.44655 3.05023 2.28271 3.30421 2.17052C3.5582 2.05833 3.83276 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06648 2.16708 8.43298 2.48353C8.79948 2.79999 9.03491 3.23945 9.10999 3.72C9.25218 4.68007 9.50909 5.62273 9.87999 6.53C10.0197 6.88792 10.0626 7.27691 10.0044 7.65382C9.94628 8.03073 9.78865 8.38541 9.54999 8.68L8.38999 9.84C9.80689 12.3679 11.8622 14.4232 14.39 15.84L15.55 14.68C15.8446 14.4413 16.1992 14.2837 16.5761 14.2256C16.953 14.1674 17.342 14.2103 17.7 14.35C18.6073 14.7209 19.5499 14.9778 20.51 15.12C20.9947 15.1958 21.4389 15.4349 21.7555 15.8063C22.0721 16.1777 22.2424 16.6533 22.24 17.14L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Sună</span>
      </button>

      <button 
        className="bottom-navbar__btn bottom-navbar__btn--whatsapp"
        onClick={handleWhatsApp}
        aria-label="Scrie pe WhatsApp"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382C17.367 14.382 17.281 14.313 17.235 14.215C17.041 13.749 16.811 13.298 16.544 12.861C16.491 12.765 16.525 12.646 16.621 12.593C16.717 12.54 16.836 12.574 16.889 12.67C17.138 13.081 17.352 13.506 17.531 13.943C17.584 14.039 17.55 14.158 17.454 14.211C17.437 14.219 17.455 14.382 17.472 14.382ZM16.045 11.725C15.986 11.725 15.93 11.695 15.896 11.644C15.629 11.207 15.325 10.787 14.984 10.385C14.931 10.329 14.931 10.243 14.987 10.19C15.043 10.137 15.129 10.137 15.182 10.193C15.542 10.614 15.865 11.058 16.149 11.522C16.202 11.618 16.168 11.737 16.072 11.79C16.062 11.725 16.053 11.725 16.045 11.725ZM14.308 9.715C14.249 9.715 14.193 9.685 14.159 9.634C13.818 9.232 13.44 8.855 13.025 8.503C12.969 8.447 12.969 8.361 13.025 8.308C13.081 8.255 13.167 8.255 13.22 8.311C13.655 8.681 14.052 9.076 14.412 9.497C14.465 9.593 14.431 9.712 14.335 9.765C14.326 9.715 14.317 9.715 14.308 9.715ZM12.25 7.983C12.191 7.983 12.135 7.953 12.101 7.902C11.686 7.55 11.236 7.228 10.754 6.937C10.658 6.884 10.624 6.765 10.677 6.669C10.73 6.573 10.849 6.539 10.945 6.592C11.448 6.895 11.919 7.231 12.355 7.598C12.451 7.651 12.485 7.77 12.432 7.866C12.398 7.917 12.342 7.947 12.283 7.947L12.25 7.983ZM10.061 6.592C10.002 6.592 9.946 6.562 9.912 6.511C9.43 6.22 8.914 5.967 8.365 5.754C8.269 5.701 8.235 5.582 8.288 5.486C8.341 5.39 8.46 5.356 8.556 5.409C9.126 5.631 9.662 5.895 10.165 6.198C10.261 6.251 10.295 6.37 10.242 6.466C10.208 6.517 10.152 6.547 10.093 6.547L10.061 6.592ZM7.674 5.409C7.615 5.409 7.559 5.379 7.525 5.328C7.01 5.115 6.462 4.942 5.891 4.811C5.795 4.792 5.729 4.7 5.748 4.604C5.767 4.508 5.859 4.442 5.955 4.461C6.548 4.596 7.118 4.774 7.655 4.996C7.751 5.049 7.785 5.168 7.732 5.264C7.698 5.315 7.642 5.345 7.583 5.345L7.674 5.409ZM5.18 4.461C5.121 4.461 5.065 4.431 5.031 4.38C4.515 4.167 3.967 3.994 3.396 3.863C3.3 3.844 3.234 3.752 3.253 3.656C3.272 3.56 3.364 3.494 3.46 3.513C4.053 3.648 4.623 3.826 5.16 4.048C5.256 4.101 5.29 4.22 5.237 4.316C5.203 4.367 5.147 4.397 5.088 4.397L5.18 4.461ZM2.686 3.513C2.627 3.513 2.571 3.483 2.537 3.432C2.022 3.219 1.474 3.046 0.903 2.915C0.807 2.896 0.741 2.804 0.76 2.708C0.779 2.612 0.871 2.546 0.967 2.565C1.56 2.7 2.13 2.878 2.667 3.1C2.763 3.153 2.797 3.272 2.744 3.368C2.71 3.419 2.654 3.449 2.595 3.449L2.686 3.513Z" fill="currentColor"/>
          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4876 3.36093 14.891 4 16.1317L3 21L7.86827 20C9.109 20.6391 10.5124 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>WhatsApp</span>
      </button>

      <button 
        className="bottom-navbar__btn bottom-navbar__btn--contact"
        onClick={handleContact}
        aria-label="Contactează-ne"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Contact</span>
      </button>
      </div>

      <ContactPopup 
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
      />
    </>
  );
};

export default BottomNavbar;
