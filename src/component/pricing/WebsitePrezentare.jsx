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

const WebsitePrezentare = () => {
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
      <Breadcrumb title={"Website Prezentare"} destination={"Prețuri"} />
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper  */}
      <main className="page-wrapper">
        {/* Start Pricing Tbale Area Site Prezentare  */}
        <div className="rn-pricing-table-area  bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner pt--100">
                  <h2 style={{ color: "#62cdd1" }}>Site de prezentare</h2>
                  <h3 style={{ color: "#62cdd1" }}>
                    TOATE PACHETELE INCLUD 100% Design Responsive
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              {/* Start PRicing Table Area  */}
              <div
                className="col-lg-4 col-md-6 col-12"
                style={{ marginBottom: 30 }}
              >
                <div className="rn-pricing">
                  <div className="pricing-table-inner">
                    <div className="pricing-header">
                      <h5 className="title">Pachet StartUP</h5>
                      <h5 className="title">
                        Perfect pentru business-uri mici
                      </h5>
                      <div className="pricing">
                        <span className="price">190 €</span>
                        {/* <span className="subtitle">USD Per Month</span> */}
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        <li>
                          <FiCheck /> Numar pagini 1 - 5
                        </li>
                        <li>
                          <FiCheck /> Asistenta in achizitionarea domeniului
                        </li>
                        <li>
                          <FiCheck /> Interfata dedicata mobil/tablet
                        </li>
                        <li>
                          <FiCheck /> Optimizare SEO on-page
                        </li>
                        <li>
                          <FiCheck /> Creare logo <b> 1 varianta</b>
                        </li>
                        <li>
                          <FiCheck /> Indexare in google.ro
                        </li>
                        <li>
                          <FiCheck /> Galerie foto profesionala
                        </li>
                        <li>
                          <FiCheck /> Pagini dinamice
                        </li>
                        <li>
                          <FiCheck />
                          Integrare iconuri si link catre social media
                        </li>
                        <li>
                          <FiCheck />
                          Implementare harta Google Map
                        </li>
                        <li>
                          <FiCheck />
                          Formular de contact
                        </li>
                        <li>
                          <FiCheck />
                          Functionalitati GDPR si alerta cookies
                        </li>
                        <li>
                          <FiCheck />
                          Blog <b>OPTIONAL</b>
                        </li>
                        <li>
                          <FiLock />
                          Google Analytics
                        </li>
                        <li>
                          <FiLock />
                          Fereastra Pop-up
                        </li>
                        <li>
                          Asistenta tehnică <b>PERMANENT</b>
                        </li>
                        <li>
                          Termen de realizare <b>5 - 7 zile</b>
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

              {/* Start PRicing Table Area  */}
              <div
                className="col-lg-4 col-md-6 col-12"
                style={{ marginBottom: 30 }}
              >
                {/* <div className="rn-pricing active"> */}
                <div className="rn-pricing">
                  <div className="pricing-table-inner">
                    <div className="pricing-header">
                      <h5 className="title">Pachet Business</h5>
                      <h5 className="title">
                        Perfect pentru business-uri mari
                      </h5>
                      <div className="pricing">
                        <span className="price">390 €</span>
                        {/* <span className="subtitle">USD Per Month</span> */}
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        <li>
                          <FiCheck /> Numar pagini 5 - 15
                        </li>
                        <li>
                          <FiCheck /> Asistenta in achizitionarea domeniului
                        </li>
                        <li>
                          <FiCheck /> Interfata dedicata mobil/tablet
                        </li>
                        <li>
                          <FiCheck /> Optimizare SEO on-page
                        </li>
                        <li>
                          <FiCheck /> Creare logo <b> 2 variante</b>
                        </li>
                        <li>
                          <FiCheck /> Indexare in google.ro
                        </li>
                        <li>
                          <FiCheck /> Galerie foto profesionala
                        </li>
                        <li>
                          <FiCheck /> Pagini dinamice
                        </li>
                        <li>
                          <FiCheck />
                          Integrare iconuri si link catre social media
                        </li>
                        <li>
                          <FiCheck />
                          Implementare harta Google Map
                        </li>
                        <li>
                          <FiCheck />
                          Formular de contact
                        </li>
                        <li>
                          <FiCheck />
                          Functionalitati GDPR si alerta cookies
                        </li>
                        <li>
                          <FiCheck />
                          Blog <b>OPTIONAL</b>
                        </li>
                        <li>
                          <FiCheck />
                          Google Analytics
                        </li>
                        <li>
                          <FiCheck />
                          Fereastra Pop-up
                        </li>
                        <li>
                          Asistenta tehnică <b>PERMANENT</b>
                        </li>
                        <li>
                          Termen de realizare <b>7 - 14 zile</b>
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

              {/* Start PRicing Table Area  */}
              <div
                className="col-lg-4 col-md-6 col-12"
                style={{ marginBottom: 30 }}
              >
                <div className="rn-pricing">
                  <div className="pricing-table-inner">
                    <div className="pricing-header">
                      <h5 className="title">Pachet Business PRO</h5>
                      <h5 className="title">
                        Perfect pentru business-uri mari
                      </h5>
                      <div className="pricing">
                        <span className="price">690 €</span>
                        {/* <span className="subtitle">USD Per Month</span> */}
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        <li>
                          <FiCheck /> Numar pagini nelimitat
                        </li>
                        <li>
                          <FiCheck /> Asistenta in achizitionarea domeniului
                        </li>
                        <li>
                          <FiCheck /> Interfata dedicata mobil/tablet
                        </li>
                        <li>
                          <FiCheck /> Optimizare SEO on-page
                        </li>
                        <li>
                          <FiCheck /> Creare logo <b> 3 variante</b>
                        </li>
                        <li>
                          <FiCheck /> Indexare in google.ro
                        </li>
                        <li>
                          <FiCheck /> Galerie foto profesionala
                        </li>
                        <li>
                          <FiCheck /> Pagini dinamice
                        </li>
                        <li>
                          <FiCheck />
                          Integrare iconuri si link catre social media
                        </li>
                        <li>
                          <FiCheck />
                          Implementare harta Google Map
                        </li>
                        <li>
                          <FiCheck />
                          Formular de contact
                        </li>
                        <li>
                          <FiCheck />
                          Functionalitati GDPR si alerta cookies
                        </li>
                        <li>
                          <FiCheck />
                          Blog <b>OPTIONAL</b>
                        </li>
                        <li>
                          <FiCheck />
                          Google Analytics
                        </li>
                        <li>
                          <FiCheck />
                          Fereastra Pop-up
                        </li>
                        <li>
                          Asistenta tehnică <b>PERMANENT</b>
                        </li>
                        <li>
                          Termen de realizare <b>14 - 30 zile</b>
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
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      {/* Start Footer Area  */}
      <Footer />
      {/* End Footer Area  */}
    </>
  );
};
export default WebsitePrezentare;
