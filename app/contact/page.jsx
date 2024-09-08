import BlockContact from "@/components/contact/BlockContact";
import ContactForm from "@/components/contact/ContactForm";
import Map from "@/components/contact/Map";
import DefaultFooter from "@/components/footer/DefaultFooter";
import DefaulHeader from "@/components/header/DefaulHeader";
export const metadata = {
  title: "Contact || Web App Dynamicx",
};
const ContactV1 = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-130 lg-mt-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-6 col-md-7 m-auto">
              <div
                className="title-style-fourteen text-center mb-20 lg-mb-50"
                data-aos="fade-up"
              >
                <div className="sc-title">CONTACT</div>
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Echipa{" "}
                  <span className="position-relative">
                    noastra <img src="/images/shape/shape_186.svg" alt="icon" />
                  </span>
                  este aici sa te ajute.
                </h2>
              </div>
              {/* /.title-style-fourteen */}
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <div className="contact-section-one mt-60 lg-mt-30">
        <div className="container">
          <div className="row">
            <BlockContact />
          </div>
        </div>
        {/* End .container */}

        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-9 m-auto">
              <h2
                className="tx-dark text-center mt-100 mb-80 lg-mt-40 lg-mb-40"
                data-aos="fade-up"
              >
                Ai o întrebare sau doresti o oferta?
              </h2>
            </div>
            <div className="col-xl-11 m-auto">
              <ContactForm />
              {/* /.form-style-one */}
            </div>
          </div>
        </div>
        {/* End .container */}
        <Map />
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default ContactV1;
