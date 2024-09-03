import Image from "next/image";
import React from "react";

const blocksData = [
  {
    id: 1,
    iconSrc: "/images/icon/icon_152.svg",
    title: "Servicii de Calitate",
    content: "Oferim servicii de cea mai înaltă calitate, adaptate nevoilor tale specifice, pentru a asigura succesul proiectelor tale.",
    dataAos: "fade-up",
    dataAosDelay: "",
  },
  {
    id: 2,
    iconSrc: "/images/icon/icon_153.svg",
    title: "Suport 24x7",
    content: "Echipa noastră este disponibilă non-stop pentru a-ți oferi suport tehnic și consultanță, indiferent de ora sau zi.",
    dataAos: "fade-up",
    dataAosDelay: "100",
  },
  {
    id: 3,
    iconSrc: "/images/icon/icon_154.svg",
    title: "Prețuri Avantajoase",
    content: "Îți oferim soluții de dezvoltare la prețuri competitive, fără a compromite calitatea sau performanța.",
    dataAos: "fade-up",
    dataAosDelay: "200",
  },
  {
    id: 4,
    iconSrc: "/images/icon/icon_155.svg",
    title: "100% De Încredere",
    content: "Construim parteneriate de lungă durată, bazate pe încredere și transparență, asigurându-ne că fiecare client este pe deplin mulțumit.",
    dataAos: "fade-up",
    dataAosDelay: "300",
  },
  // Adăugați mai multe blocuri după cum este necesar
];



const Block = () => {
  return (
    <>
      {blocksData.map((block) => (
        <div className="col-sm-6" key={block.id}>
          <div
            className="card-style-twentyFour bg-white mt-30"
            data-aos={block.dataAos}
            data-aos-delay={block.dataAosDelay}
          >
            <div className="icon">
              <Image
                width={45}
                height={42}
                src={block.iconSrc}
                alt="icon"
                className="lazy-img mh-100"
              />
            </div>
            <h4 className="fw-bold tx-dark mt-30 mb-15">{block.title}</h4>
            <p className="fs-18">{block.content}</p>
          </div>
          {/* /.card-style-twentyFour */}
        </div>
      ))}
    </>
  );
};

export default Block;
