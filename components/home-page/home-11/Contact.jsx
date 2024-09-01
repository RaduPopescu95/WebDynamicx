import Form from "./Form";

const Contact = () => {
  const contentData = {
    imgSrc: "/images/icon/icon_60.svg",
    title: "Discuta cu expertii nostri in dezvoltare.",
    subtitle:
      "Suntem aici pentru a te ajuta sa iti transformi ideile in realitate digitala.",
    urgent: "Ai nevoie de ajutor rapid?",
    phone: "0774 550 758",
  };

  return (
    <div className="row align-items-center">
      <div className="col-lg-5" data-aos="fade-right">
        <img src={contentData.imgSrc} alt="img" className="lazy-img" />
        <div className="title-style-one mt-35 mb-30">
          <h2 className="main-title fw-normal tx-dark m0">
            {contentData.title}
          </h2>
        </div>
        <p className="text-lg tx-dark mb-55 lg-mb-30">{contentData.subtitle}</p>
        <div className="fw-500 fs-18 ur-text mb-5">{contentData.urgent}</div>
        <div className="call-btn">
          <span className="fs-18 tx-dark d-inline-block">Suna acum!</span>{" "}
          <a href={"tel:" + contentData.phone} className="tx-dark tran3s">
            {contentData.phone}
          </a>
        </div>
      </div>

      {/* End .col-lg-5 */}

      <div className="col-xl-5 col-lg-6 ms-auto" data-aos="fade-left">
        <div className="form-bg-wrapper position-relative rounded bg-white pe-4 ps-4 pe-lg-5 ps-lg-5 pt-60 pb-50 md-mt-60">
          <div className="form-style-two">
            <Form />
          </div>
          {/* /.form-style-two */}

          <div className="shapes shape-text fw-500 fs-20 tx-dark text-center">
            Compleateaza <br />
            formularul
          </div>
          <img
            src="/images/shape/shape_90.svg"
            alt="img"
            className="lazy-img shapes shape-one"
          />
          <img
            src="/images/shape/shape_91.svg"
            alt="img"
            className="lazy-img shapes shape-two"
          />
        </div>
        {/* /.form-bg-wrapper */}
      </div>
    </div>
  );
};

export default Contact;
