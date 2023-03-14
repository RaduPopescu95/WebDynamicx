import React, { Component } from "react";

class About extends Component {
  render() {
    let title = "Ai nevoie de un website pentru afacerea ta?",
      description =
        "Realizam website-uri si aplicatii mobile unice cu o identitate vizuală performanta în mediul online. Web App Dynamicx este o agenție care va ofera servicii complete de: creare site de prezentare, creare magazin online, aplicatii mobile crossplatform iOS / Android, analiza si optimizare SEO, dar si gazduire website.";
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
                          Creare website prezentare si magazine online
                        </h3>
                        <p>
                          Succesul afacerii tale sta intr-un website bine pus la
                          punct, personalizat in functie de nevoile domeniului
                          de activitate, bazat pe cele mai noi tehnologii si
                          optimizat pentru a oferi o experienta unica.
                          Serviciile noastre sunt gandite pentru a te ajuta sa
                          ai un raport pret calitate excelent.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                        <h3 className="title">
                          Îti cream propria aplicatie mobila în doar cateva
                          zile!
                        </h3>
                        <p>
                          Va oferim posibilitatea de a crea aplicatii mobile
                          pentru telefoanele Android si Iphone! O aplicatie
                          mobila in combinatie cu adaptarea site-ului la
                          versiunea mobila este o strategie de afaceri
                          profitabila. Noi va cream o aplicatie care sa va ajute
                          sa va cresteti traficul si sa fiti mult mai aproape de
                          clientii dumneavoastra.
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
