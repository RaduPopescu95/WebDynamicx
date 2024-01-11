import React, { Component } from "react";

import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Breadcrumb from "../../../components/Breadcrumb";
import Image from "next/image";
import Head from "next/head";
import { lineHeight } from "@mui/system";

class MagazinOnline extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>
            Creare Magazin Online - Realizare Magazin Online - Pret Magazin -
            Web App Dynamicx
          </title>
          <meta
            name="description"
            content={
              "Servicii de creare a magazinelor online eficiente, menite să îți sporească vânzările. Începe pe calea succesului în lumea digitală cu primul tău magazin online!"
            }
          />
          <meta
            name="og:title"
            content={
              "Creare Magazin Online - Realizare Magazin Online - Pret Magazin - Web App Dynamicx"
            }
          />
          <meta
            name="og:description"
            content={
              "Servicii de creare a magazinelor online eficiente, menite să îți sporească vânzările. Începe pe calea succesului în lumea digitală cu primul tău magazin online!"
            }
          />

          <meta
            property="og:url"
            content={"https://webappdynamicx.ro/servicii/creare-magazin-online"}
          />
        </Head>
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        <Breadcrumb title={"Creare magazin online"} direction={"Servicii"} />

        {/* Start Page Wrapper */}
        <div className="rn-service-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-details-inner">
                  <div className="inner">
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="thumb">
                          <Image
                            className="w-100"
                            src="/assets/images/service/onlineshop.png"
                            alt="Magazin Online Web App Dynamicx"
                            width={650}
                            height={600}
                            style={{ width: "70%", height: "70%" }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h4 className="title" style={{ lineHeight: 1.2 }}>
                            Începe-ți afacerea online
                          </h4>
                          <p>
                            Alătură-te nouă și concentrează-te pe obiectivele
                            tale, în timp ce noi dezvoltăm pentru tine un
                            magazin online intuitiv și ușor de administrat,
                            optimizat pentru a atinge performanțe maxime.
                          </p>
                          <p>
                            Punem la dispoziție soluții integrale pentru
                            comerțul electronic, echilibrând experiența optimă a
                            utilizatorului cu funcționalitatea impecabilă,
                            adecvate atât pentru afaceri nou-înființate, cât și
                            pentru cele consolidate.
                          </p>
                          <p>
                            Site-urile create de noi se disting prin design
                            atrăgător și performanță excelentă în clasament,
                            oferind soluții de afaceri scalabile ce susțin
                            dezvoltarea pe termen lung și sunt orientate spre
                            maximizarea vânzărilor.
                          </p>
                          <p>
                            Vei avea la dispoziție un magazin online ușor de
                            operat și accesibil, oferind un proces de achiziție
                            clar și simplificat pentru clienți.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    <div className="row sercice-details-content align-items-center">
                      <div className="col-lg-6 col-12 order-2 order-lg-1">
                        <div className="details mt_md--30 mt_sm--30">
                          <p>
                            Propunem soluții ce includ o structură SEO
                            eficientă, catalog organizat de produse,
                            funcționalități avansate pentru creșterea vânzărilor
                            și loializarea clienților, plus o gestiune intuitivă
                            și rapidă a comenzilor, toate susținute de un
                            backend structurat.
                          </p>

                          <p>
                            Indiferent dacă afacerea ta se încadrează în
                            categoria B2B sau B2C, suntem pregătiți să
                            satisfacem cerințele tale de eCommerce. Dacă ai
                            nevoie de personalizări software specifice, te afli
                            în locul ideal, deoarece aceasta este una dintre
                            competențele noastre cheie.
                          </p>

                          <ul className="liststyle" style={{ marginTop: 30 }}>
                            <ul className="liststyle">
                              <li>Adaptat specificului pieței românești;</li>
                              <li>
                                Capacitate nelimitată pentru categorii, produse
                                și articole;
                              </li>
                              <li>
                                Sistem CMS ușor de utilizat pentru actualizări
                                rapide și eficiente ale conținutului;
                              </li>
                              <li>
                                Optimizare pentru maximizarea vânzărilor, cu
                                acces la statistici actualizate;
                              </li>
                              <li>
                                Design unic și atractiv, conceput pentru a
                                stimula interacțiunea;
                              </li>
                              <li>
                                Compatibilitate SEO, viteză excelentă de
                                încărcare, responsive pe dispozitive mobile;
                              </li>
                              <li>
                                Automatizare pentru facturare, gestionare
                                curieri, import/export de produse și procesator
                                de plată integrat;
                              </li>
                            </ul>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <img
                            className="w-100"
                            src="/assets/images/service/service-02.png"
                            alt="Service Images"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Wrapper */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default MagazinOnline;
