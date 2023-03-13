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

const Mentenanta = () => {
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
      <Breadcrumb title={"Mentenanță și Administrare"} direction={"Prețuri"} />
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper  */}
      <main className="page-wrapper">
        {/* Start Pricing Tbale Area Site Prezentare  */}

        {/* Start Pricing Tbale Area MENTENANTA  */}
        <div
          className="rn-pricing-table-area  bg_color--5"
          style={{ borderTop: "1px solid #D3D3D3", paddingBottom: 50 }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner pt--50">
                  <h2 style={{ color: "#62cdd1" }}>
                    Administrare și mentenanță aplicații web și mobile
                  </h2>
                  <h4 style={{ color: "#62cdd1" }}>
                    <i>
                      Procesul de mentenanta și administrare este unul necesar
                      si presupune întretinerea și actualizarea periodică a
                      conținutului site-ului.
                    </i>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              {/* Start PRicing Table Area  */}
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing">
                  <div className="pricing-table-inner">
                    <div className="pricing-header">
                      <h4 className="title">Pentru Website prezentare</h4>
                      {/* <h5 className="title">
                        Perfect pentru business-uri mici
                      </h5> */}
                      <div className="pricing">
                        <span className="price" style={{ fontSize: 50 }}>
                          30 €/lună
                        </span>
                        {/* <span className="subtitle">USD Per Month</span> */}
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        <li>
                          <FiCheck /> Timp de interventie 24h
                        </li>
                        <li>
                          <FiCheck /> Back-up saptamanal (Daca se solicita
                          gazduirea)
                        </li>
                        <li>
                          <FiCheck /> Verificare periodica a functionalitatii
                          website-ului
                        </li>
                        <li>
                          <FiCheck /> Urmarirea traficului website-ului
                        </li>
                        <li>
                          <FiCheck /> Optimizare SEO on-page periodica a
                          website-ului
                        </li>
                        <li>
                          <FiCheck /> Optimizarea User eXperience a clienților
                          pe site
                        </li>
                        <li>
                          <FiCheck /> Administrare / verificare elemente de
                          content: texte, grafic, design
                        </li>
                        <li>
                          <FiCheck /> Verificare Page Rank in motoarele de
                          cautare
                        </li>
                        <li>
                          <FiCheck /> Suport tehnic gratuit
                        </li>
                        <li>
                          <FiCheck /> Urmarire si monitorizare uptime site web
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
              <div className="col-lg-4 col-md-6 col-12">
                {/* <div className="rn-pricing active"> */}
                <div className="rn-pricing">
                  <div className="pricing-table-inner">
                    <div className="pricing-header">
                      <h4 className="title">Pentru Magazine online</h4>
                      {/* <h5 className="title">
                        Perfect pentru business-uri mari
                      </h5> */}
                      <div className="pricing">
                        <span className="price" style={{ fontSize: 50 }}>
                          120 €/lună
                        </span>
                        {/* <span className="subtitle">USD Per Month</span> */}
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        <li>
                          <FiCheck /> Timp de interventie 24h
                        </li>
                        <li>
                          <FiCheck /> Back-up lunar si administrare Magazin Play
                          si APP Store
                        </li>
                        <li>
                          <FiCheck /> Verificare periodica a functionalitatii
                          website-ului
                        </li>
                        <li>
                          <FiCheck /> Optimizare SEO on-page periodica a
                          website-ului
                        </li>
                        <li>
                          <FiCheck /> Urmarirea traficului website-ului
                        </li>
                        <li>
                          <FiCheck /> Administrare catalog de produse
                        </li>
                        <li>
                          <FiCheck /> Gestionarea conturilor de utilizatori
                          (administratori) autorizati
                        </li>
                        <li>
                          <FiCheck /> Optimizarea User eXperience a clienților
                          pe site
                        </li>
                        <li>
                          <FiCheck /> Administrare / verificare elemente de
                          content: texte, grafic, design
                        </li>
                        <li>
                          <FiCheck /> Verificare Page Rank in motoarele de
                          cautare
                        </li>
                        <li>
                          <FiCheck /> Suport tehnic gratuit
                        </li>
                        <li>
                          <FiCheck /> Urmarire si monitorizare uptime site web
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
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing">
                  <div className="pricing-table-inner">
                    <div className="pricing-header">
                      <h4 className="title">Pentru Aplicații mobile</h4>
                      {/* <h5 className="title">
                        Perfect pentru business-uri mari
                      </h5> */}
                      <div className="pricing">
                        <span className="price" style={{ fontSize: 50 }}>
                          150 €/lună
                        </span>
                        {/* <span className="subtitle">USD Per Month</span> */}
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        <li>
                          <FiCheck /> Timp de interventie 24h
                        </li>
                        <li>
                          <FiCheck /> Back-up lunar (Daca se solicita gazduirea)
                        </li>
                        <li>
                          <FiCheck /> Verificare periodica a functionalitatii
                          aplicatiei
                        </li>
                        <li>
                          <FiCheck /> Optimizare ASO a aplicatiei
                        </li>
                        <li>
                          <FiCheck /> Urmarirea traficului aplicatiei
                        </li>
                        <li>
                          <FiCheck /> Administrare catalog de produse (pentru
                          aplicatii eCommerce)
                        </li>
                        <li>
                          <FiCheck /> Gestionarea conturilor de utilizatori
                          (administratori) autorizati
                        </li>
                        <li>
                          <FiCheck /> Optimizarea User eXperience a clienților
                          aplicatiei
                        </li>
                        <li>
                          <FiCheck /> Administrare / verificare elemente de
                          content: texte, grafic, design
                        </li>
                        <li>
                          <FiCheck /> Verificare performantei aplicatiei
                        </li>
                        <li>
                          <FiCheck /> Suport tehnic gratuit
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
export default Mentenanta;
