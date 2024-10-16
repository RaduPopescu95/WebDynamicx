import Image from "next/image";

const FancyFeatures = () => {
  const items = [
    "Solutii personalizate pentru fiecare proiect.",
    "Echipa dedicata de experti in tehnologie.",
    "Lansari rapide si eficiente.",
    "Colaborare transparenta la fiecare pas.",
  ];

  return (
    <div className="row">
      <div className="col-xl-5 col-lg-6 ms-auto order-lg-last">
        <div className="block-style-one ps-xxl-5" data-aos="fade-left">
          <div className="title-style-one">
            <div className="sc-title">
              Over
              <span
                className="text-decoration-underline"
                style={{ color: "#007bff" }}
              >
                200 clienti
              </span>
            </div>
            <h2 className="main-title fw-normal tx-dark m0">
              Oferim <span>Servicii</span> cu calitate de top.
            </h2>
          </div>
          {/* /.title-style-one */}
          <p className="text-lg tx-dark pt-60 pb-45 lg-pt-30 lg-pb-10">
            Oferim servicii premium, orientate spre excelență și satisfacția
            clientului.
          </p>
          <ul className="style-none list-item fs-18">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        {/* /.block-style-one */}
      </div>
      {/* End .col-xl-5 */}

      <div className="col-lg-6 col-md-10 order-lg-first" data-aos="fade-right">
        <div className="img-meta d-inline-block position-relative md-mt-40">
        <Image
    src="/images/media/img_40.png"
    alt="media"
    width={648}
    height={698}
    layout="responsive" // redimensionează imaginea în mod responsive
  />
        </div>
        {/* /.img-meta */}
      </div>
    </div>
  );
};

export default FancyFeatures;
