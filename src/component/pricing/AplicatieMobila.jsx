import React from "react";

import ScrollToTop from "react-scroll-up";
import {
  FiChevronUp,
  FiCheck,
  FiLock,
  FiArrowRight,
  FiSmartphone,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PageHelmet from "../common/Helmet";
import Header from "../header/Header";
import Breadcrumb from "../../elements/common/Breadcrumb";
import Footer from "../footer/Footer";

const AplicatiiMobile = () => {
  return (
    <>
      <PageHelmet pageTitle="Pricing Table" />

      {/* Start Header Area  */}
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* End Header Area  */}

      {/* Start Breadcrump Area */}
      <Breadcrumb title={"Aplicații mobile"} direction={"Prețuri"} />
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper  */}
      <main className="page-wrapper">
        {/* Start Pricing Tbale Area Aplicatie mobila
         */}
        {/* <div className="rn-pricing-table-area ptb--120 bg_color--5"> */}
        <div className="rn-pricing-table-area bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner pt--100">
                  <h2 style={{ color: "#62cdd1" }}>Aplicații mobile</h2>
                  <h3 style={{ color: "#62cdd1" }}>
                    Dezvoltare Aplicatii Mobile pentru Android & IOS adaptate
                    perfect Afacerii tale
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row d-flex justify-content-center">
              {/* Start PRicing Table Area  */}
              <div
                className="col-lg-5 col-md-7 col-12"
                style={{ marginBottom: 30 }}
              >
                <div className="rn-pricing active">
                  <div className="pricing-table-inner">
                    <div className="pricing-header">
                      <div className="pricing">
                        <span className="price" style={{ fontSize: "50px" }}>
                          de la 400 €
                        </span>
                        {/* <span className="subtitle">USD Per Month</span> */}
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        <li>
                          <FiSmartphone /> Numarul de pagini: primele 3 sunt
                          incluse în preț, iar pentru fiecare pagina adaugata in
                          plus se adauga la pretul total <b>15 euro</b>
                        </li>
                        <li>
                          <FiSmartphone /> Design personalizat – inclus in pret
                        </li>
                        <li>
                          <FiSmartphone /> 100% Design Responsive - inclus in
                          pret
                        </li>
                        <li>
                          <FiSmartphone /> Pagini dinamice - inclus in pret
                        </li>
                        <li>
                          <FiSmartphone /> Integrare iconuri si link catre
                          social media – inclus in pret
                        </li>
                        <li>
                          <FiSmartphone /> Formular de contact -
                          <b>OPTIONAL (+ 100 euro)</b>
                        </li>
                        <li>
                          <FiSmartphone /> Google Analytics -
                          <b>OPTIONAL (+ 100 euro)</b>
                        </li>
                        <li>
                          <FiSmartphone /> INTEGRARE SOCIAL MEDIA –
                          <b>OPTIONAL (+ 150 euro)</b>
                        </li>
                        <li>
                          <FiSmartphone />  Integrare baza de date -{" "}
                          <b>OPTIONAL (+ 200 euro)</b>
                        </li>
                        <li>
                          <FiSmartphone /> Automatizare Email-uri -
                          <b>OPTIONAL (+50 euro)</b>
                        </li>

                        <ul
                          className="list-style--1"
                          style={{
                            color: "white",
                            fontSize: 17,
                          }}
                        >
                          <FiSmartphone style={{ marginRight: 5 }} />
                          Integrare functionalitati <b>eCommerce</b>:
                          <li>
                            <FiArrowRight /> Plata online cu card <b>25 euro</b>
                          </li>
                          <li>
                            <FiArrowRight /> Filtre produse <b>25 euro</b>
                          </li>
                          <li>
                            <FiArrowRight /> Sistem discount <b>25 euro</b>
                          </li>
                        </ul>

                        <li>
                          <FiSmartphone />
                          Generare de documente ( CSV, Word, PDF, Excel, etc.) –
                          <b> OPTIONAL (+ 150 euro)</b>
                        </li>
                        <li>
                          <FiSmartphone />
                          Chat Intern – <b> OPTIONAL (300 euro) </b>
                        </li>
                        <li>
                          <FiSmartphone />
                          Autentificare utilizator –{" "}
                          <b> OPTIONAL (100 euro) </b>
                        </li>
                        {/* <li>
                          <FiSmartphone />
                          Încărcare pe platforma Google play –{" "}
                          <b> OPTIONAL (40 euro pe an) </b>
                        </li>
                        <li>
                          <FiSmartphone />
                          Încărcare pe platforma Apple Store –{" "}
                          <b> OPTIONAL (110 euro pe an) </b>
                        </li> */}

                        <li>
                          Asistenta tehnică <b>gratuit timp de 6 luni</b>
                        </li>
                        <li>
                          Termen de realizare
                          <b>In functie de functionalitatile selectate</b>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <Link className="rn-btn" to={"/contact"}>
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* End PRicing Table Area  */}
            </div>
          </div>
        </div>
        {/* End Pricing Tbale Area  */}
      </main>
      {/* End Page Wrapper  */}

      {/* Start Back To Top */}
      {/* <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div> */}
      {/* End Back To Top */}

      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area  */}
    </>
  );
};
export default AplicatiiMobile;
