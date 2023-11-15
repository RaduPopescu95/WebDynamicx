import React, { Component } from "react";

import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Breadcrumb from "../../../components/Breadcrumb";
import Image from "next/image";
import Head from "next/head";

class DomeniuGazduire extends Component {
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
            Găzduire Web Performantă - Hosting - Server VPS - Web App Dynamicx
          </title>
          <meta
            name="description"
            content={
              "Experimentează un serviciu excepțional de găzduire web cu Sitebunker.ro. Profită de hosting de înaltă calitate în România, completat cu suport tehnic inclus și securitate de top."
            }
          />
          <meta
            name="og:title"
            content={
              "Găzduire Web Performantă - Hosting - Server VPS - Web App Dynamicx"
            }
          />
          <meta
            name="og:description"
            content={
              "Experimentează un serviciu excepțional de găzduire web cu Sitebunker.ro. Profită de hosting de înaltă calitate în România, completat cu suport tehnic inclus și securitate de top."
            }
          />

          <meta
            property="og:url"
            content={"https://webappdynamicx.ro/servicii/domeniu-gazduire"}
          />
        </Head>
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        <Breadcrumb
          title={"Inregistrare Domenii Rapid si in Siguranta"}
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
                            src="/assets/images/service/hosting.png"
                            alt="Hosting"
                            width={650}
                            height={600}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <h4 className="title">
                            Inregistrare Domenii Rapid si in Siguranta
                          </h4>
                          <p>
                            Înregistrarea domeniilor în mod rapid și sigur este
                            esențială pentru succesul online al afacerii tale.
                            Oferim un serviciu de înregistrare a domeniilor care
                            garantează o procesare eficientă și protecție maximă
                            a datelor.
                          </p>

                          <p>
                            Pe lângă înregistrarea domeniilor, oferim și
                            servicii de gazduire web de înaltă calitate.
                            Infrastructura noastră asigură o funcționare fără
                            probleme și o disponibilitate ridicată a site-ului
                            tău.
                          </p>

                          <p>
                            Optează pentru serviciul nostru integrat de
                            înregistrare domenii și gazduire pentru a beneficia
                            de o soluție completă și sigură, care să susțină
                            creșterea afacerii tale în mediul online.
                          </p>
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
export default DomeniuGazduire;
