import React, { Component } from "react";

const ServiceList = [
  {
    icon: "01",
    title: "Execuție Rapidă",
    description:
      "În funcție de numărul de pagini și de complexitatea lucrării, termenele de execuție pentru crearea unui site web sau a unei aplicații mobile pot varia între 5 si 30 zile lucratoare.",
  },
  {
    icon: "02",
    title: "Design Responsive",
    description:
      "În cele mai multe cazuri vizitatorii site-ului vor interacționa pentru prima dată cu o variantă adaptată pentru dispozitive mobile, motiv pentru care la crearea oricărui site web un design responsive este o condiție esențială pentru elaborarea unor website-uri moderne.",
  },
  {
    icon: "03",
    title: "Aplicații Cross Platform",
    description:
      "Având experiență cu tehnologii cross platform, aici la Web Dynamicx echipa noastră de programatori de aplicații mobile va dezvolta pentru afacerea ta o aplicație mobilă sigură, scalabilă și sustenabilă, atât pentru Android cât și pentru IOS",
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
