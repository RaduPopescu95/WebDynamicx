"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./LatestProjects.scss";

const LatestProjects = () => {
  // Doar ultimul proiect (cel mai recent)
  const latestProject = {
    name: "Studio by Cristian",
    description: "Website de prezentare, realizat cu tehnologii moderne și design responsive.",
    url: "https://www.studiobycristian.com",
    image: "/images/gallery/studiobycristian.png",
    category: "Website Prezentare",
    completedDate: "August 2025"
  };

  const handleVisitProject = (url) => {
    // Track pentru analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "Portfolio",
        event_label: url,
        value: 1
      });
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="latest-project-simple">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="title-style-one text-center mb-50 lg-mb-30" data-aos="fade-up">
              <div className="sc-title text-uppercase">Ultimul Proiect</div>
              <h2 className="main-title fw-normal tx-dark m0">
                Cel mai recent <span>proiect</span> finalizat.
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12" data-aos="fade-up">
            <div className="project-card-minimal">
              <div className="project-image-wrapper">
                <Image
                  src={latestProject.image}
                  alt={latestProject.name}
                  width={2936}
                  height={1408}
                  className="project-image"
                />
                <div className="project-overlay">
                  <button 
                    className="visit-btn"
                    onClick={() => handleVisitProject(latestProject.url)}
                    aria-label={`Vizitează ${latestProject.name}`}
                  >
                    <i className="bi bi-arrow-up-right"></i>
                    Vizitează Site-ul
                  </button>
                </div>
              </div>
              
              <div className="project-info-external">
                <div className="project-header">
                  <h3 className="project-title">{latestProject.name}</h3>
                  <span className="project-category">{latestProject.category}</span>
                </div>
                <p className="project-description">{latestProject.description}</p>
                <div className="project-actions">
                  <button 
                    className="visit-site-btn"
                    onClick={() => handleVisitProject(latestProject.url)}
                  >
                    <i className="bi bi-globe"></i>
                    Vizitează Site-ul
                  </button>
                  <div className="project-date">
                    <i className="bi bi-calendar-check"></i>
                    {latestProject.completedDate}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
