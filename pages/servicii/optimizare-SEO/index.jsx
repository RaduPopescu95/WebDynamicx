import React, { Component } from "react";

import Footer from "../../../components/footer/Footer";
import Header from "../../../components/header/Header";
import Breadcrumb from "../../../components/Breadcrumb";
import Head from "next/head";
import Image from "next/image";

class OptimizareSeo extends Component {
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
            Agentie SEO - Optimizare Site - Servicii SEO - Web App Dynamicx
          </title>
          <meta
            name="description"
            content={
              "Oferim servicii SEO eficiente, care vor creste traficul pe website-ul tau si te vor ajuta sa obtii clienti valorosi pentru afacerea ta."
            }
          />
          <meta
            name="og:title"
            content={
              "Agentie SEO - Optimizare Site - Servicii SEO - Web App Dynamicx"
            }
          />
          <meta
            name="og:description"
            content={
              "Oferim servicii SEO eficiente, care vor creste traficul pe website-ul tau si te vor ajuta sa obtii clienti valorosi pentru afacerea ta."
            }
          />

          <meta
            property="og:url"
            content={"https://webappdynamicx.ro/servicii/optimizare-SEO"}
          />
        </Head>

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        <Breadcrumb title={"Optimizare SEO"} direction={"Servicii"} />

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
                            src="/assets/images/service/seoservice.png"
                            alt="SEO OPTIMIZATION"
                            width={650}
                            height={600}
                            style={{
                              maxWidth: "85%",
                              height: "70%",
                              marginLeft: 35,
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <p>
                            Mai mult de 90% dintre experiențele online încep cu
                            un motor de căutare, iar aproximativ 75% dintre
                            utilizatori nu trec de prima pagină de rezultate.
                            Acesta este motivul pentru care este crucial să te
                            afli pe prima pagină pentru a profita de traficul
                            organic oferit de motoarele de căutare. Cei care
                            conștientizează valoarea unei poziționări superioare
                            în rezultatele Google sunt deja un pas înainte față
                            de concurență.
                          </p>
                          <p>
                            Te sprijinim în dezvoltarea afacerii tale prin
                            optimizarea site-ului și asigurându-ne că acesta
                            ocupă o poziție de top în rezultatele motorului de
                            căutare (SERP). Dezvoltăm strategii SEO
                            personalizate și eficiente, cu rezultate tangibile,
                            adaptate nevoilor specifice ale fiecărui business.
                          </p>
                          <h4 className="title" style={{ lineHeight: 1.2 }}>
                            Etapele procesului de optimizare SEO
                          </h4>
                          <ul className="liststyle">
                            <li>Audit</li>
                            <li>SEO on-page</li>
                            <li>SEO off-page</li>
                          </ul>
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
export default OptimizareSeo;
