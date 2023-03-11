import React, { useState } from "react";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <p className="success-message">
      Mesajul tău a fost transmis cu succes. Te vom contacta în curând!
    </p>
  );
};
function ContactForm({ props }) {
  const [result, showresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rap6768",
        "webdynamicx_contact_rap6",
        e.target,
        "user_AFM5cdJFbJQz9Vv8tTvEB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  return (
    <form action="" onSubmit={sendEmail}>
      <div className="rn-form-group">
        <input type="text" name="nume" placeholder="Numele tău" required />
      </div>

      <div className="rn-form-group">
        <input type="email" name="email" placeholder="Email" required />
      </div>

      <div className="rn-form-group">
        <input
          type="number"
          name="telefon"
          placeholder="Număr Telefon"
          required
        />
      </div>

      <div className="rn-form-group">
        <input type="text" name="subiect" placeholder="Subiect" required />
      </div>

      <div className="rn-form-group">
        <textarea name="mesaj" placeholder="Mesajul tău" required></textarea>
      </div>

      <div className="rn-form-group">
        <button
          className="rn-button-style--2 btn-solid"
          type="submit"
          value="submit"
          name="submit"
          id="mc-embedded-subscribe"
        >
          Trimite
        </button>
      </div>

      <div className="rn-form-group">{result ? <Result /> : null}</div>
    </form>
  );
}
export default ContactForm;
