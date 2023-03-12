import React from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import ScrollToTop from "react-scroll-up";
import {
  FiChevronUp,
  FiCheck,
  FiLock,
  FiArrowRight,
  FiSmartphone,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const PricingTable = () => {
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
      <Breadcrumb title={"Prețuri"} />
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
              <div className="col-lg-4 col-md-6 col-12">
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
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-pricing active">
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
              <div className="col-lg-4 col-md-6 col-12">
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
              <div className="col-lg-4 col-md-6 col-12">
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
                          <FiCheck /> Creare logo <b> 1 variantă</b>
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

                        <li>
                          <FiLock />
                          Modul facturare PDF
                        </li>

                        <li>
                          <FiLock />
                          Google Analytics
                        </li>

                        <li>
                          Asistenta tehnică <b>PERMANENT</b>
                        </li>
                        <li>
                          Termen de realizare <b>10 - 14 zile</b>
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
                <div className="rn-pricing active">
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

                        <li>
                          <FiLock />
                          Modul facturare PDF
                        </li>

                        <li>
                          <FiLock />
                          Google Analytics
                        </li>

                        <li>
                          Asistenta tehnică <b>PERMANENT</b>
                        </li>
                        <li>
                          Termen de realizare <b>14 - 21 zile</b>
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

                        <li>
                          <FiCheck />
                          Modul facturare PDF
                        </li>

                        <li>
                          <FiCheck />
                          Google Analytics
                        </li>

                        <li>
                          Asistenta tehnică <b>PERMANENT</b>
                        </li>
                        <li>
                          Termen de realizare <b>14 - 31 zile</b>
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

        {/* Start Pricing Tbale Area Aplicatie mobila
         */}
        {/* <div className="rn-pricing-table-area ptb--120 bg_color--5"> */}
        <div className="rn-pricing-table-area pb--120  bg_color--5">
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
              <div className="col-lg-5 col-md-7 col-12">
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
                          plus se adauga la pretul total 15 euro
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
                          Asistenta tehnică <b>PERMANENT</b>
                        </li>
                        <li>
                          Termen de realizare{" "}
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
                <div className="rn-pricing active">
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
export default PricingTable;
