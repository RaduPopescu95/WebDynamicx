import React, { Component } from "react";
import ServiceOne from "../services/ServiceOne";

class SliderOne extends Component {
  render() {
    return (
      <div
        className="slider-activation"
        style={{
          backgroundColor: "#021b39",
          backgroundImage: 'url("/assets/images/pattern-1.png")',
        }}
      >
        {/* Start Single Slide */}
        <div
          className="slide slide-style-1 slider-fixed--height d-flex align-items-center"
          data-black-overlay="6"
        >
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  {/* <h1 className="title theme-gradient">Agentie Web design și dezvoltre aplicații mobile <br /> Servicii complete de development in Romania </h1> */}
                  <h1
                    className="title theme-gradient"
                    style={{ marginTop: 50 }}
                  >
                    Dezvoltare Aplicatii Web si Mobile
                  </h1>
                </div>
              </div>
            </div>
            {/* Start Service Area */}
            <div className="service-wrapper service-white">
              <ServiceOne />
            </div>
            {/* End Service Area */}
          </div>
        </div>
        {/* End Single Slide */}
      </div>
    );
  }
}
export default SliderOne;
