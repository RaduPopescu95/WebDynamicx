import React, { Component } from "react";
import Link from "next/link";

class Breadcrumb extends Component {
  render() {
    const { title, parent, direction } = this.props;
    return (
      <React.Fragment>
        <div
          className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1"
          data-black-overlay="6"
          style={{
            backgroundColor: "#021b39",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner pt--100">
                  <h2 style={{ color: "#62cdd1" }}>{title}</h2>
                  {/* <h2 className="title" style={{ color: "#62cdd1" }}>
                    {title}
                  </h2> */}
                  <ul className="page-list">
                    <li className="breadcrumb-item">
                      <p style={{ color: "white" }}>
                        {direction ? direction : "Home"}
                      </p>
                    </li>
                    {parent ? (
                      <li className="breadcrumb-item">{parent}</li>
                    ) : (
                      ""
                    )}
                    <li
                      className="breadcrumb-item active"
                      style={{ color: "#62cdd1" }}
                    >
                      {title}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Breadcrumb;
