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
import Head from "next/head";

const LogoDesign = () => {
  return (
    <>
      {/* <PageHelmet pageTitle="Pricing Table" /> */}
      <Head>
        <title>WebAppDynamicx - logo design</title>
        <meta
          name="Descriere"
          content="Web App Dynamicx ofera servicii de dezvoltare site, realizare website de prezentare, magazin online, aplicatii mobil ANDROID / IOS, creare logo / sigla vectoriala, optimizare SEO."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="www.webappdynamicx.ro" />
        <meta
          property="og:title"
          content="WebAppDynamicx - Dezvoltare Website, Aplicatii Mobile, Magazin
      Online, SEO, logo design, sigla"
        />
        <meta
          property="og:description"
          content="Web App Dynamicx ofera servicii de dezvoltare site, realizare website de prezentare, magazin online, aplicatii mobile ANDROID / IOS, creare logo / sigla vectoriala, optimizare SEO."
        />
        <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Start Header Area  */}
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* End Header Area  */}

      {/* Start Breadcrump Area */}
      <Breadcrumb title={"Logo Design"} direction={"Prețuri"} />
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
                    Servicii Logo design - creare siglă vectorială firmă
                  </h2>
                  <h4 style={{ color: "#62cdd1" }}>
                    <i>
                      Oferim soluții unice și creative pentru afacerea ta.
                      Folosind cercetare, expertiză și tehnici moderne, cream
                      logo-uri care transmit valorile și identitatea afacerii
                      tale. Lucrăm cu fiecare client în parte pentru a înțelege
                      nevoile și a livra rezultate de calitate
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
                      <h3 className="title">LOGO BASIC</h3>
                      {/* <h5 className="title">
                        Perfect pentru business-uri mici
                      </h5> */}
                      <div className="pricing">
                        <span className="price" style={{ fontSize: 50 }}>
                          25 €
                        </span>
                        {/* <span className="subtitle">USD Per Month</span> */}
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        <li>
                          <FiCheck /> Design Modern
                        </li>
                        <li>
                          <FiCheck /> Timp de realizare 48 de ore
                        </li>
                        <li>
                          <FiCheck /> Revizuiri design: 3
                        </li>
                        <li>
                          <FiCheck /> Format livrare: JPG, PNG
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
              <div className="col-lg-4 col-md-6 col-12">
                {/* <div className="rn-pricing active"> */}
                <div className="rn-pricing">
                  <div className="pricing-table-inner">
                    <div className="pricing-header">
                      <h3 className="title">LOGO PROFESIONAL</h3>
                      {/* <h5 className="title">
                        Perfect pentru business-uri mari
                      </h5> */}
                      <div className="pricing">
                        <span className="price" style={{ fontSize: 50 }}>
                          40 €
                        </span>
                        {/* <span className="subtitle">USD Per Month</span> */}
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        <li>
                          <FiCheck /> Design Profesional
                        </li>
                        <li>
                          <FiCheck /> Timp de realizare 48 de ore
                        </li>
                        <li>
                          <FiCheck /> Revizuiri design: 5
                        </li>
                        <li>
                          <FiCheck /> 2 concepte initiale de design
                        </li>
                        <li>
                          <FiCheck /> Format livrare: JPG, PNG, SVG
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
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing">
                  <div className="pricing-table-inner">
                    <div className="pricing-header">
                      <h3 className="title">LOGO PREMIUM</h3>
                      {/* <h5 className="title">
                        Perfect pentru business-uri mari
                      </h5> */}
                      <div className="pricing">
                        <span className="price" style={{ fontSize: 50 }}>
                          65 €
                        </span>
                        {/* <span className="subtitle">USD Per Month</span> */}
                      </div>
                    </div>
                    <div className="pricing-body">
                      <ul className="list-style--1">
                        <li>
                          <FiCheck /> Design Profesional
                        </li>
                        <li>
                          <FiCheck /> Timp de realizare 24 de ore
                        </li>
                        <li>
                          <FiCheck /> Revizuiri design: 10
                        </li>
                        <li>
                          <FiCheck /> 3 concepte initiale de design
                        </li>
                        <li>
                          <FiCheck /> Format livrare: JPG, PNG, SVG, PDF
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
export default LogoDesign;
