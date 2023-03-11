import React, { Component } from "react";

class About extends Component {
  render() {
    let title = "Ai nevoie de un website pentru afacerea ta?",
      description =
        "Realizăm website-uri și aplicații mobile unice cu o identitate vizuală performantă în mediul online. WebDynamicx este o agenție care vă oferă servicii complete de: creare site de prezentare, creare magazin online, aplicații mobile crossplatform iOS / Android, analiză și optimizare SEO, dar și găzduire website.";
    return (
      <React.Fragment>
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="thumbnail">
                  <img
                    className="w-100"
                    src="/assets/images/about/about-1.jpeg"
                    alt="About Images"
                  />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">{title}</h2>
                    <p className="description">{description}</p>
                  </div>
                  <div className="row mt--30 mt_sm--10">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">
                          Creare website prezentare și magazine online
                        </h3>
                        <p>
                          Succesul afacerii tale stă într-un website bine pus la
                          punct, personalizat în functie de nevoile domeniului
                          de activitate, bazat pe cele mai noi tehnologii și
                          optimizat pentru a oferi o experiență unică.
                          Serviciile noastre sunt gândite pentru a te ajuta să
                          ai un raport preț calitate excelent.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">
                          Creaza-ti propria aplicatie mobilea in doar cateva
                          zile!
                        </h3>
                        <p>
                          Vă oferim posibilitatea de a crea aplicații mobile
                          pentru telefoanele Android si Iphone! O aplicație
                          mobilă în combinație cu adaptarea site-ului la
                          versiunea mobilă este o strategie de afaceri
                          profitabilă. Noi vă creăm o aplicație care să vă ajute
                          sa vă creșteți traficul și să fiți mult mai aproape de
                          clienții dumneavoastră.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default About;
