import React, { Component } from "react";

import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Breadcrumb from "../../../components/Breadcrumb";
import Image from "next/image";
import Head from "next/head";

class LogoDesign extends Component {
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
            Creare Logo Design și Identitate Vizuală - Brand Creators - Web App
            Dynamicx
          </title>
          <meta
            name="description"
            content={
              "Specializați în crearea de logo-uri și identități vizuale unice, ne dedicăm misiunii de a colabora cu afaceri mici și mijlocii pentru a le oferi identități vizuale personalizate și adecvate. Ne focusăm pe designul de logo-uri, sigle și elaborarea de manuale de identitate vizuală, toate gândite pentru a facilita interacțiunea eficientă cu publicul tău."
            }
          />
          <meta
            name="og:title"
            content={
              "Creare Logo Design și Identitate Vizuală - Brand Creators - Web App Dynamicx"
            }
          />
          <meta
            name="og:description"
            content={
              "Specializați în crearea de logo-uri și identități vizuale unice, ne dedicăm misiunii de a colabora cu afaceri mici și mijlocii pentru a le oferi identități vizuale personalizate și adecvate. Ne focusăm pe designul de logo-uri, sigle și elaborarea de manuale de identitate vizuală, toate gândite pentru a facilita interacțiunea eficientă cu publicul tău."
            }
          />

          <meta
            property="og:url"
            content={"https://webappdynamicx.ro/servicii/logo-design"}
          />
        </Head>
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        <Breadcrumb
          title={"Creare Logo Design și Identitate Vizuală"}
          direction={"Servicii"}
        />

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
                            src="/assets/images/service/logodesign.png"
                            alt="Logo Design Image"
                            width={650}
                            height={600}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h4 className="title" style={{ lineHeight: 1.2 }}>
                            Ne specializăm în crearea de logo-uri și identități
                            vizuale distinctive, personalizate pentru fiecare
                            afacere în parte.
                          </h4>
                          <p>
                            Scopul nostru este să colaborăm cu afacerile mici și
                            mijlocii pentru a dezvolta identități vizuale
                            personalizate și adecvate. Suntem specializați în
                            crearea de logo-uri, sigle și manuale de identitate
                            vizuală, concepute pentru a optimiza interacțiunea
                            cu publicul tău țintă.
                          </p>
                          <p>
                            Indiferent dacă ești la început cu un side business
                            și ai nevoie de un logo, sau vizezi un rebranding
                            complet pentru o firmă existentă, necesitând o
                            identitate vizuală integrală, pachetele noastre sunt
                            concepute să satisfacă orice cerință. Acestea se
                            personalizează în funcție de specificul fiecărui
                            business, iar costurile sunt stabilite clar de la
                            început, după ce toate detaliile proiectului sunt
                            definite.
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
                            Pentru fiecare proiect în domeniul designului de
                            logo și identitate vizuală, elaborăm mai multe
                            variante inițiale de concepte pentru logo.
                          </p>

                          <p>
                            Aceste concepte inițiale de design logo sunt create
                            în etapa preliminară a proiectului, fiind primele
                            schițe ale logo-ului, dezvoltate pe baza brief-ului
                            primit și a discuțiilor avute cu clientul.
                          </p>

                          <p>
                            Pe baza acestor prime schițe, vom efectua modificări
                            necesare pentru a ajunge la o versiune finală a
                            designului logo-ului, care să fie cu adevărat
                            reprezentativă pentru afacerea ta.
                          </p>
                          <p>
                            La încheierea proiectului, vei primi logo-ul tău în
                            diverse versiuni și formate de fișiere. Vei primi
                            următoarele variante ale logo-ului:
                          </p>

                          <ul className="liststyle" style={{ marginTop: 10 }}>
                            <li>Logo design în culorile originale</li>
                            <li>
                              Logo design în culori inversate - pentru fundaluri
                              închise
                            </li>
                            <li>Logo design în culori alb/negru</li>
                            <li>
                              Fișiere vectoriale în formaturi AI, EPS și PDF -
                              pot fi scalate la orice dimensiuni fără a se
                              pierde din calitatea grafică și sunt cele pe care
                              le vei folosi la tipărire.
                            </li>
                            <li>
                              Fișiere web sau de tip raster în formaturi JPG,
                              PNG și SVG - fișiere de tip raster ce sunt
                              potrivite pentru a fi folosite în mediul online
                              (site). Dacă sunt folosite la print, rezultatele
                              finale vor fi de slabă calitate.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <Image
                            className="w-100"
                            src="/assets/images/service/logoexamples.png"
                            alt="Logo examples"
                            width={650}
                            height={600}
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
export default LogoDesign;
