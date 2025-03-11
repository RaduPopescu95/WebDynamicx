"use client";

import React, { useRef } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const sliderRef = useRef(null);

  const testimonialData = [
    {
      background: "#4CAF50",
      imgSrc: "/images/icon/icon_61.svg",
      content:
        "Aplicația mea de tarot și horoscop a fost un succes datorită acestei agenții. Au înțeles perfect viziunea mea.",
      avatarSrc: "/images/media/img_23.jpg",
      name: "Cristina Zurba",
      location: "România",
    },
    {
      background: "#825EFF",
      imgSrc: "/images/icon/icon_61.svg",
      content:
        "Colaborarea cu această agenție a fost excelentă. Echipa lor a depășit toate așteptările.",
      avatarSrc: "/images/media/img_18.jpg",
      name: "Andrei Popescu",
      location: "România",
    },
    {
      background: "#11D09F",
      imgSrc: "/images/icon/icon_61.svg",
      content:
        "Sunt foarte mulțumită de site-ul creat pentru afacerea mea. Profesioniști rapizi și de încredere.",
      avatarSrc: "/images/media/img_19.jpg",
      name: "Ioana Ionescu",
      location: "România",
    },
    {
      background: "#FFB900",
      imgSrc: "/images/icon/icon_61.svg",
      content:
        "Aplicația dezvoltată a îmbunătățit mult experiența clienților noștri. Recomand cu încredere!",
      avatarSrc: "/images/media/img_20.jpg",
      name: "Mihai Georgescu",
      location: "România",
    },
    {
      background: "#FF5E5E",
      imgSrc: "/images/icon/icon_61.svg",
      content:
        "Serviciile de găzduire sunt de top. De când am mutat site-ul la ei, nu am avut probleme.",
      avatarSrc: "/images/media/img_21.jpg",
      name: "Ana Tudor",
      location: "România",
    },
    {
      background: "#EF4DD5",
      imgSrc: "/images/icon/icon_61.svg",
      content:
        "Suportul tehnic este prompt și de ajutor. Orice problemă a fost rezolvată rapid și eficient.",
      avatarSrc: "/images/media/img_22.jpg",
      name: "Radu Vasile",
      location: "România",
    },
];


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div className="slider-wrapper feedback_slider_five" data-aos="fade-up">
        <Slider ref={sliderRef} {...settings} arrows={false}>
          {testimonialData.map((testimonial, index) => (
            <div className="item" key={index}>
              <div className="feedback-block-five bg-white">
                <div
                  className="icon p-3 d-flex align-items-center justify-content-center rounded-circle"
                  style={{ background: testimonial.background }}
                >
                  <img src={testimonial.imgSrc} alt="img" />
                </div>
                <p className="tx-dark mt-20 pb-30">{testimonial.content}</p>
                <div className="d-flex align-items-center">
                  {/* <img
                    src={testimonial.avatarSrc}
                    alt="img"
                    className="avatar rounded-circle"
                  /> */}
                  <h6 className="name fs-20 fw-500 m0 ps-4">
                    {testimonial.name}
                    {/* <span className="d-block fw-normal">
                      {testimonial.location}
                    </span> */}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <ul
        className="slider-arrows slick-arrow-three d-flex justify-content-center style-none"
        data-aos="fade-left"
      >
        <li
          className="prev_f2 slick-arrow rounded-circle text-center fs-20 tran3s"
          onClick={handlePrevClick}
        >
          <i className="bi bi-chevron-left" />
        </li>
        <li
          className="next_f2 slick-arrow rounded-circle text-center fs-20 tran3s"
          onClick={handleNextClick}
        >
          <i className="bi bi-chevron-right" />
        </li>
      </ul>
    </>
  );
};

export default Testimonial;
