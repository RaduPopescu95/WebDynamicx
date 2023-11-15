import React, { Component } from "react";

import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Breadcrumb from "../../../components/Breadcrumb";
import Head from "next/head";
import Image from "next/image";

class SitePrezentare extends Component {
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
            Creare Site De Prezentare - Realizare Site - Creare Website
          </title>
          <meta
            name="description"
            content={
              "Website-ul tău este reflectarea identității tale și cel mai puternic instrument de marketing. Oferim asistență prin servicii de dezvoltare și design de site-uri de prezentare, combinând web design-ul creativ cu tehnici avansate de development."
            }
          />
          <meta
            name="og:title"
            content={
              "Creare Site De Prezentare - Realizare Site - Creare Website"
            }
          />
          <meta
            name="og:description"
            content={
              "Website-ul tău este reflectarea identității tale și cel mai puternic instrument de marketing. Oferim asistență prin servicii de dezvoltare și design de site-uri de prezentare, combinând web design-ul creativ cu tehnici avansate de development."
            }
          />

          <meta
            property="og:url"
            content={"https://webappdynamicx.ro/servicii/site-de-prezentare"}
          />
        </Head>

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        <Breadcrumb
          title={"Creare site de prezentare"}
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
                            src="/assets/images/service/service-01.png"
                            alt="Site de prezentare"
                            width={650}
                            height={600}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h4 className="title" style={{ lineHeight: 1.2 }}>
                            Dezvoltăm și livrăm website-uri „la cheie”,
                            optimizate pentru a stimula vânzările.
                          </h4>
                          <p>
                            Site-ul tău este oglinda afacerii tale și
                            principalul instrument de marketing. Te sprijinim în
                            crearea unui site de prezentare atrăgător, intuitiv
                            și eficient, care transformă vizitatorii în clienți,
                            oferindu-le o experiență de navigare excepțională.
                          </p>
                          <p>
                            În era digitală, prezența online este esențială
                            pentru succesul oricărei afaceri. La noi, crearea
                            unui site web nu se rezumă doar la design și
                            funcționalitate, ci implică o înțelegere profundă a
                            nevoilor afacerii tale. Ne concentrăm pe dezvoltarea
                            de soluții web personalizate, adaptate obiectivelor
                            tale specifice. Prin integrarea celor mai recente
                            tehnologii și practici SEO, ne asigurăm că site-ul
                            tău nu doar atrage vizitatori, dar și îi transformă
                            în clienți fideli. Colaborăm îndeaproape cu tine
                            pentru a crea un website care nu doar că arată
                            excepțional, dar este și ușor de navigat, oferind o
                            experiență de utilizare fluidă și plăcută.
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
                            Dezvoltăm site-uri web de înaltă performanță,
                            folosind tehnologii moderne precum React JS și Next
                            JS. Aceste site-uri sunt concepute pentru a genera
                            lead-uri eficiente și a impulsiona vânzările.
                          </p>
                          <p>
                            Investim pasiune și toate resursele noastre în
                            fiecare proiect, asigurându-ne că site-ul tău este
                            realizat cu măiestrie, oferind utilizatorilor o
                            experiență de navigare memorabilă și ajutându-te să
                            obții un return on investment (ROI) optim.
                          </p>
                          <p>
                            Fie că ai nevoie de un site de prezentare, un
                            magazin online sau o platformă complexă, suntem aici
                            pentru a transforma viziunea ta digitală în
                            realitate.
                          </p>
                          <h4 className="title">
                            Etapele realizării unui site web
                          </h4>
                          <ul className="liststyle">
                            <li>
                              Structurarea unui wiframe specific business-ului
                            </li>
                            <li>Conceptul grafic și crearea logo-ului</li>
                            <li>Realizare design responsive</li>
                            <li>Implementare bannere și animații</li>
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
export default SitePrezentare;
