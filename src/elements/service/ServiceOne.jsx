import React, { Component } from "react";

const ServiceList = [
  {
    icon: "01",
    title: "Executie Rapida",
    description:
      "În functie de numarul de pagini si de complexitatea lucrarii, termenele de executie pentru crearea unui site web sau a unei aplicatii mobile pot varia între 5 si 30 zile lucratoare.",
  },
  {
    icon: "02",
    title: "Design Responsive",
    description:
      "În cele mai multe cazuri vizitatorii site-ului vor interactiona pentru prima data cu o varianta adaptata pentru dispozitive mobile, motiv pentru care la crearea oricarui site web un design responsive este o conditie esențiala pentru elaborarea unor website-uri moderne.",
  },
  {
    icon: "03",
    title: "Aplicatii Cross Platform",
    description:
      "Avand experienta cu tehnologii cross platform, aici la Web App Dynamicx echipa noastra de programatori de aplicatii mobile va dezvolta pentru afacerea ta o aplicatie mobila sigura, scalabila si sustenabila, atat pentru Android cat si pentru IOS.",
  },
];

class ServiceOne extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          {ServiceList.map((val, i) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
              <div className="service service__style--1">
                {/* <div className="icon">
                  <img
                    src={`/assets/images/icons/icon-${val.icon}.png`}
                    alt="Digital Agency"
                  />
                </div> */}
                <div className="content">
                  <h4 className="title">{val.title}</h4>
                  <p>{val.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceOne;
