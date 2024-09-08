"use client";

import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Code for handling form submission
  };

  const content = {
    heading: "Transformam ideile în realitate digitala",
    subheading:
      "Dezvoltăm website-uri și aplicații mobile personalizate pentru a-ți aduce afacerea la următorul nivel.",
    btnText: "Incepe Proiectul",
  };

  return (
    <>
      <h1 className="hero-heading fw-light tx-dark">
        <span className="position-relative">{content.heading}</span>
      </h1>
      <p className="text-lg mb-75 pt-60 lg-mb-40 lg-pt-40">
        {content.subheading}
      </p>
      <div
        className="subscribe-form m-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* <p className="m0 pt-10 fw-500 tx-dark fs-15"> */}
        <Link
          href="/contact"
          className="text-decoration-underline cta-button-main-page tran3s fw-500"
        >
          {content.btnText}
        </Link>
        {/* </p> */}
      </div>
    </>
  );
};

export default Hero;
