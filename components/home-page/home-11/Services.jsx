import Link from "next/link";

const Services = () => {
  const servicesData = [
    {
      icon: "/images/icon/icon_09.svg",
      title: "Logo design",
      link: "/servicii/logo-design",
      description:
        "Creăm logo-uri unice și memorabile care reflectă identitatea brandului tău.",
      delay: 0,
    },
    {
      icon: "/images/icon/icon_51.svg",
      title: "Magazin online",
      link: "/servicii/creare-magazin-online",
      description:
        "Dezvoltăm magazine online optimizate pentru vânzări și promovare eficientă în motoarele de căutare.",
      delay: 100,
    },
    {
      icon: "/images/icon/icon_11.svg",
      title: "Aplicații mobile",
      link: "/servicii/dezvoltare-aplicatii-mobile",
      description:
        "Construim aplicații mobile inovatoare, adaptate nevoilor tale, pentru toate platformele majore.",
      delay: 200,
    },
    {
      icon: "/images/icon/icon_11.svg",
      title: "Creare site web",
      link: "/servicii/dezvoltare-site-web",
      description:
        "Realizăm site-uri web moderne și responsive, cu design atractiv și funcționalitate impecabilă.",
      delay: 300,
    },
    {
      icon: "/images/icon/icon_11.svg",
      title: "Domeniu și găzduire",
      link: "/servicii/domeniu-gazduire",
      description:
        "Oferim servicii complete de înregistrare domenii și găzduire web rapide și sigure.",
      delay: 400,
    },
  ];


  return (
    <>
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`col-lg-4 col-md-6 d-flex mt-40`}
          data-aos-delay={service.delay}
          data-aos="fade-up"
        >
          <div className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30">
            <div className="icon d-flex align-items-end">
              <img src={service.icon} alt={service.title} className="lazy-img" />
            </div>
            <span className="d-block fs-18 opacity-75 mt-35 mb-10">
              {service.title}
            </span>
            <h4 className="fw-500 mb-35">{service.description}</h4>
            <Link href={service.link} className="read-btn mt-auto tran3s">
              <img src="/images/icon/icon_12.svg" alt={service.title} className="lazy-img" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Services;
