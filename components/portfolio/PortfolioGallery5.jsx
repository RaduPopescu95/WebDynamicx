"use client";

import { useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Link from "next/link";
import Image from "next/image";

const PortfolioGallery5 = () => {
  // Array-ul cu datele pentru portofoliu
  const items = [
    {
      id: 1,
      category: "website-prezentare",
      name: "Firma de asigurari 'Jano'",
      tag: "Website Prezentare",
      image: "/images/gallery/website-prezentare.jpg",
      projectInfo: {
        date: "12 Martie, 2024",
        clientName: "Client Jano, România",
        projectType: "UI/UX, Web Design",
      },
    },
    {
      id: 2,
      category: "aplicatii-mobile",
      name: "Aplicație Mobilă Android si Ios 'Cristina Zurba'",
      tag: "Aplicatii mobile",
      image: "/images/gallery/aplicatie-mobila.jpg",
      projectInfo: {
        date: "01 Ianuarie, 2024",
        clientName: "Client Zurba Cristina, Romania",
        projectType: "Mobile App",
      },
    },
    {
      id: 3,
      category: "magazine-online",
      name: "Magazin online Design and Gift",
      tag: "Magazin Online",
      image: "/images/gallery/magazin-online.jpg",
      projectInfo: {
        date: "10 Septembrie, 2023",
        clientName: "Client Z, SUA",
        projectType: "E-Commerce, Web Dev",
      },
    },
    {
      id: 4,
      category: "website-prezentare",
      name: "Website prezentare pentru Alex Hotel",
      tag: "Website Prezentare",
      image: "/images/gallery/hotel.jpg",
      projectInfo: {
        date: "21 Decembrie, 2023",
        clientName: "Client Alex, Romania",
        projectType: "Mobile App, UI/UX",
      },
    },
    {
      id: 5,
      category: "aplicatii-mobile",
      name: "Aplicatie mobila pentru saloane 'Style Connect'",
      tag: "Aplicatii mobile",
      image: "/images/gallery/stylec-connect.jpg",
      projectInfo: {
        date: "21 Decembrie, 2023",
        clientName: "Client Style Connect, Romania",
        projectType: "Mobile App, UI/UX",
      },
    },
    {
      id: 6,
      category: "aplicatii-web",
      name: "Aplicatie Web pentru gestionarea programarilor firmei tale",
      tag: "Aplicatie Web",
      image: "/images/gallery/aplicatie-web-programari.jpg",
      projectInfo: {
        date: "21 August, 2024",
        clientName: "Client Doccure",
        projectType: "Mobile App, UI/UX",
      },
    },
    {
      id: 7,
      category: "blog-personal",
      name: "Website de tip blog",
      tag: "Blog personal",
      image: "/images/gallery/blog-personal.jpg",
      projectInfo: {
        date: "23 Februarie, 2024",
        clientName: "Client Promovare Digitala",
        projectType: "Mobile App, UI/UX",
      },
    },
 
  ];

  const [filter, setFilter] = useState("*");

  // Filtrare în funcție de categorie.
  // Dacă filter === "*", afișăm toate item-urile
  const filteredItems =
    filter === "*"
      ? items
      : items.filter((item) => item.category.includes(filter));

  return (
    <div className="portfolio-gallery-seven pt-30">
      <div className="container">
        {/* Meniul de filtre */}
        {/* <ul className="style-none text-center isotop-menu-wrapper g-control-nav-two">
          <li
            className={filter === "*" ? "is-checked" : ""}
            onClick={() => setFilter("*")}
          >
            Toate
          </li>
          <li
            className={filter === "website-prezentare" ? "is-checked" : ""}
            onClick={() => setFilter("website-prezentare")}
          >
            Website prezentare
          </li>
          <li
            className={filter === "aplicatii-mobile" ? "is-checked" : ""}
            onClick={() => setFilter("aplicatii-mobile")}
          >
            Aplicații mobile
          </li>
          <li
            className={filter === "magazine-online" ? "is-checked" : ""}
            onClick={() => setFilter("magazine-online")}
          >
            Magazine online
          </li>
        </ul> */}

        {/* Galeria */}
        <div className="row pt-90 lg-pt-50">
          <Gallery>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`col-lg-6 col-md-6 mb-40 ${item.category}`}
              >
                <div className="portfolio-block-six">
                  <div className="img-meta position-relative">
                    <Image
                      width={800}
                      height={833}
                      src={item.image}
                      alt={item.name}
                      className="w-100 tran5s portofolio-image"
                    />
                    {/* Butonul pentru zoom / fullscreen */}
                    <Item
                      original={item.image}
                      thumbnail={item.image}
                      width={800}
                      height={833}
                    >
                      {({ ref, open }) => (
                        <span
                          role="button"
                          className="fancybox tran3s overlay-icon zoom-icon"
                          title="Click for large view"
                          ref={ref}
                          onClick={open}
                        >
                          <i className="bi bi-plus"></i>
                        </span>
                      )}
                    </Item>

                    <div className="caption tran3s d-flex justify-content-end flex-column">
                      <span className="tag">{item.tag}</span>
                      <h6>
                        <Link href={`#`} className="pj-title">
                          {item.name}
                        </Link>
                      </h6>
                    </div>
                    {/* ./caption */}
                  </div>
                </div>
              </div>
            ))}
          </Gallery>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery5;
