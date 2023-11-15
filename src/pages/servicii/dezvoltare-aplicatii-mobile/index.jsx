import React, { Component } from "react";

import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Breadcrumb from "../../../components/Breadcrumb";
import Head from "next/head";
import Image from "next/image";

class DezvoltareAplicatiiMobile extends Component {
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
            Dezvoltare aplicatii de mobil iOS si Android - React Native - Web
            App Dynamicx
          </title>
          <meta
            name="description"
            content={
              "Ca o companie specializată în dezvoltarea cu React Native, oferim servicii de creare a aplicațiilor mobile utilizând acest cunoscut framework JavaScript, destinat construirii de aplicații mobile native."
            }
          />
          <meta
            name="og:title"
            content={
              "Dezvoltare aplicatii de mobil iOS si Android - React Native - Web App Dynamicx"
            }
          />
          <meta
            name="og:description"
            content={
              "Ca o companie specializată în dezvoltarea cu React Native, oferim servicii de creare a aplicațiilor mobile utilizând acest cunoscut framework JavaScript, destinat construirii de aplicații mobile native."
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
          title={
            "Realizare Aplicatii Mobile Native Android, IOS (Iphone) Incarcare în PlayStore si AppStore"
          }
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
                            src="/assets/images/service/reactnative.png"
                            alt="React Native Dezvoltare Aplicatii mobile"
                            width={650}
                            height={600}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h4 className="title" style={{ lineHeight: 1.2 }}>
                            Dezvoltam aplicatii mobile de la €300
                          </h4>
                          <p>
                            Abordăm fiecare proiect cu maximă seriozitate, dar
                            provocările ne stimulează cu adevărat. Odată cu
                            creșterea complexității unui proiect, crește și
                            entuziasmul echipei noastre, unindu-se forțele și
                            ideile pentru a atinge obiectivele propuse.
                          </p>

                          <p>
                            Suntem pasionați de dezvoltarea de aplicații mobile
                            și ne entuziasmează utilizarea tehnologiilor noi.
                            Procesul nostru de dezvoltare implică toate
                            departamentele, dovedind astfel că metodele noastre
                            interne și abordările în dezvoltarea aplicațiilor
                            mobile sunt ideale pentru proiectele complexe pe
                            care le întreprindem.
                          </p>
                          <p>
                            Ai o idee pentru o aplicație destinată
                            smartphone-urilor sau tabletelor și crezi că va fi
                            un hit? Putem transforma acea idee în realitate
                            rapid și la prețuri accesibile. Livrăm mai mult
                            decât o simplă aplicație mobilă - oferim o
                            experiență completă. Vei beneficia constant de
                            suportul unei echipe dedicate pentru dezvoltarea
                            proiectului tău. Specialiștii noștri au o vastă
                            experiență în dezvoltarea de aplicații mobile pentru
                            diverse dispozitive, incluzând telefoane, tablete
                            sau brățări de fitness.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    <div className="row sercice-details-content align-items-center">
                      <div className="col-lg-6 col-12 order-2 order-lg-1">
                        <div className="details mt_md--30 mt_sm--30">
                          <h4 className="title">Aplicatii native si hibride</h4>
                          <p>
                            Există două categorii principale de aplicații
                            mobile, fiecare cu propriile avantaje și
                            dezavantaje. Pe de o parte, avem aplicațiile native,
                            care exploatează funcții esențiale ale
                            dispozitivelor mobile precum camera video sau
                            GPS-ul. Pe de altă parte, sunt aplicațiile axate pe
                            conținut, cum ar fi rețelele sociale. Avem
                            experiență în dezvoltarea ambelor tipuri de
                            aplicații și suntem pregătiți să te sprijinim,
                            indiferent de nevoile tale specifice în domeniul
                            aplicațiilor mobile.
                          </p>
                          <h4 className="title">
                            Dezvoltare Aplicații React Native
                          </h4>
                          <p>
                            A avea o aplicație mobilă dedicată afacerii tale
                            este un aspect esențial pe care nu ar trebui să îl
                            neglijezi, având în vedere potențialul imens de
                            generare a veniturilor.
                          </p>
                          <p>
                            Ca firmă specializată în dezvoltarea de aplicații
                            mobile cu React Native, oferim servicii de
                            dezvoltare utilizând acest framework JavaScript
                            pentru a crea aplicații mobile native eficiente și
                            performante.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <Image
                            className="w-100"
                            src="/assets/images/service/apps2.png"
                            alt="Dezvoltare Aplicatii mobile"
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
export default DezvoltareAplicatiiMobile;
