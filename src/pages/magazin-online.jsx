import React from "react";

import ScrollToTop from "react-scroll-up";
import {
  FiChevronUp,
  FiCheck,
  FiLock,
  FiArrowRight,
  FiSmartphone,
} from "react-icons/fi";
import Link from "next/link";
// import PageHelmet from "../common/Helmet";
import Header from "../components/header/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/footer/Footer";

const MagazinOnline = () => {
  return (
    <>
      {/* <PageHelmet pageTitle="Pricing Table" /> */}

      {/* Start Header Area  */}
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* End Header Area  */}

      {/* Start Breadcrump Area */}
      <Breadcrumb title={"Magazin Online"} direction={"Prețuri"} />
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper  */}
      <main className="page-wrapper">
        {/* Start Pricing Tbale Area Magazin Online  */}
        <div className="rn-pricing-table-area  bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner pt--100">
                  <h2 style={{ color: "#62cdd1" }}>Magazin online</h2>
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
                        <span className="price">270 €</span>
                        {/* <span className="subtitle">USD Per Month</span> */}
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        <li>
                          <FiCheck /> Numar produse 1 - 50
                        </li>
                        <li>
                          <FiCheck /> Asistenta in achizitionarea domeniului
                        </li>
                        <li>
                          <FiCheck /> Interfata dedicata mobil/tablet
                        </li>
                        <li>
                          <FiCheck /> Design personalizat
                        </li>
                        <li>
                          <FiCheck /> Slide prima pagina
                        </li>
                        <li>
                          <FiCheck /> Optimizare SEO on-page
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
                          <FiCheck /> Creare logo <b>OPTIONAL</b>
                        </li>
                        <li>
                          <FiCheck />
                          Plata online cu card <b>OPTIONAL</b>
                        </li>
                        <li>
                          <FiLock />
                          Filtre produse
                        </li>
                        <li>
                          <FiLock />
                          Sistem discount
                        </li>
                        <li>
                          <FiLock />
                          Fereastra Pop-up
                        </li>
                        <li>
                          <FiLock />
                          Sistem live chat
                        </li>

                        {/* <li>
                          <FiLock />
                          Modul facturare PDF
                        </li> */}

                        <li>
                          <FiLock />
                          Google Analytics
                        </li>

                        <li>
                          Asistenta tehnică <b>gratuit până la 6 luni</b>
                        </li>
                        <li>
                          Termen de realizare <b>10 - 14 zile</b>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <Link className="rn-btn" href="/contact">
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
                {/* For active from beggining */}
                {/* <div className="rn-pricing active"> */}
                <div className="rn-pricing">
                  <div className="pricing-table-inner">
                    <div className="pricing-header">
                      <h5 className="title">Pachet Business</h5>
                      <h5 className="title">
                        Perfect pentru business-uri mari
                      </h5>
                      <div className="pricing">
                        <span className="price">420 €</span>
                        {/* <span className="subtitle">USD Per Month</span> */}
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        <li>
                          <FiSmartphone /> Numar produse 50 - 150
                        </li>
                        <li>
                          <FiSmartphone /> Asistenta in achizitionarea
                          domeniului
                        </li>
                        <li>
                          <FiCheck /> Interfata dedicata mobil/tablet
                        </li>
                        <li>
                          <FiCheck /> Design personalizat
                        </li>
                        <li>
                          <FiCheck /> Slide prima pagina
                        </li>
                        <li>
                          <FiCheck /> Optimizare SEO on-page
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
                          <FiCheck /> Creare logo <b>OPTIONAL</b>
                        </li>
                        <li>
                          <FiCheck />
                          Plata online cu card <b>OPTIONAL</b>
                        </li>
                        <li>
                          <FiCheck />
                          Filtre produse
                        </li>
                        <li>
                          <FiCheck />
                          Sistem discount
                        </li>
                        <li>
                          <FiCheck />
                          Fereastra Pop-up
                        </li>
                        <li>
                          <FiLock />
                          Sistem live chat
                        </li>
                        {/* 
                        <li>
                          <FiLock />
                          Modul facturare PDF
                        </li> */}

                        <li>
                          <FiLock />
                          Google Analytics
                        </li>

                        <li>
                          Asistenta tehnică <b>gratuit până la 6 luni</b>
                        </li>
                        <li>
                          Termen de realizare <b>14 - 21 zile</b>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <Link className="rn-btn" href="/contact">
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
                          <FiCheck /> Numar produse nelimitat
                        </li>
                        <li>
                          <FiCheck /> Asistenta in achizitionarea domeniului
                        </li>
                        <li>
                          <FiCheck /> Interfata dedicata mobil/tablet
                        </li>
                        <li>
                          <FiCheck /> Design personalizat
                        </li>
                        <li>
                          <FiCheck /> Slide prima pagina
                        </li>
                        <li>
                          <FiCheck /> Optimizare SEO on-page
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
                          <FiCheck /> Creare logo <b>OPTIONAL</b>
                        </li>
                        <li>
                          <FiCheck />
                          Plata online cu card <b>OPTIONAL</b>
                        </li>
                        <li>
                          <FiCheck />
                          Filtre produse
                        </li>
                        <li>
                          <FiCheck />
                          Sistem discount
                        </li>
                        <li>
                          <FiCheck />
                          Fereastra Pop-up
                        </li>
                        <li>
                          <FiCheck />
                          Sistem live chat
                        </li>

                        {/* <li>
                          <FiCheck />
                          Modul facturare PDF
                        </li> */}

                        <li>
                          <FiCheck />
                          Google Analytics
                        </li>

                        <li>
                          Asistenta tehnică <b>gratuit până la 6 luni</b>
                        </li>
                        <li>
                          Termen de realizare <b>14 - 31 zile</b>
                        </li>
                      </ul>
                    </div>
                    <div className="pricing-footer">
                      <Link className="rn-btn" href="/contact">
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
export default MagazinOnline;
