import React, { Component, useRef } from "react";

// import PageHelmet from "../component/common/Helmet";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
// import GoogleMapReact from "google-map-react";
import ContactTwo from "../../components/contact/ContactTwo";
import BrandTwo from "../../components/BrandTwo";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Head from "next/head";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      <>
        <Head>
          <title>Website prezentare, aplicatii mobile, magazin online</title>
          <meta
            name="description"
            content="Servicii creare dezvoltare website de prezentare, magazin online, aplicatii mobile ANDROID / IOS, creare logo / sigla vectoriala, optimizare SEO."
          />
          <meta
            name="keywords"
            content="Creare site, creare magazine online, creare aplicatie mobila, Android, IOS, optimizare SEO, mentenanta site, administrare site, gazduire"
          ></meta>

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://webappdynamicx.ro/contact" />

          <meta
            property="og:title"
            content="WebAppDynamicx - Dezvoltare Website, Aplicatii Mobile, Magazin
      Online, SEO, logo design, sigla"
          />
          <meta
            property="og:description"
            content="Web App Dynamicx ofera servicii de dezvoltare site, realizare website de prezentare, magazin online, aplicatii mobile ANDROID / IOS, creare logo / sigla vectoriala, optimizare SEO."
          />
        </Head>

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        <Head>
          <title>Web App Dynamicx</title>
          <meta
            name="description"
            content="Servicii creare dezvoltare website de prezentare, magazin online, aplicatii mobile ANDROID / IOS, creare logo / sigla vectoriala, optimizare SEO."
          />
          <meta
            name="keywords"
            content="Creare site, creare magazine online, creare aplicatie mobila, Android, IOS, optimizare SEO, mentenanta site, administrare site, gazduire"
          ></meta>

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="www.webappdynamicx.ro" />
          <meta
            property="og:title"
            content="WebAppDynamicx - Dezvoltare Website, Aplicatii Mobile, Magazin
      Online, SEO, logo design, sigla"
          />
          <meta
            property="og:description"
            content="Web App Dynamicx ofera servicii de dezvoltare site, realizare website de prezentare, magazin online, aplicatii mobile ANDROID / IOS, creare logo / sigla vectoriala, optimizare SEO."
          />
          <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--17"
          data-black-overlay="6"
          style={{ backgroundColor: "#021b39" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">
                    Contact WebAppDynamicx
                  </h2>
                  <p>
                    Dacă vrei sa afli mai multe despre viitorul tău site de
                    prezentare, magazin online sau aplicație mobilă,
                    contacteaza-ne fara ezitare!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Contact Top Area  */}
        <div className="rn-contact-top-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiHeadphones />
                  </div>
                  <div className="inner">
                    <h4 className="title">Număr de telefon</h4>
                    <p>
                      <a href="tel:+40774592098">0774 592 098</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                <div className="rn-address">
                  <div className="icon">
                    <FiMail />
                  </div>
                  <div className="inner">
                    <h4 className="title">Adresă e-mail</h4>
                    <p>
                      <a href="mailto:webdynamicx@gmail.com">
                        webdynamicx@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}

              {/* Start Single Address  */}
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                <div className="rn-address">
                  <div className="icon">
                    <FiMapPin />
                  </div>
                  <div className="inner">
                    <h4 className="title">Locație</h4>
                    <p>Str. Cernauti, Târgoviște, Dâmbovița</p>
                  </div>
                </div>
              </div>
              {/* End Single Address  */}
            </div>
          </div>
        </div>
        {/* End Contact Top Area  */}

        {/* Start Contact Page Area  */}
        <div className="rn-contact-page ptb--120 bg_color--1">
          <ContactTwo />
        </div>
        {/* End Contact Page Area  */}

        {/* Start Contact Map  */}
        {/* <div className="rn-contact-map-area position-relative">
          <div style={{ height: "650px", width: "100%" }}>
            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div> */}
        {/* End Contact Map  */}

        {/* Start Brand Area */}
        {/* <div className="rn-brand-area brand-separation bg_color--5 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <BrandTwo />
              </div>
            </div>
          </div>
        </div> */}
        {/* End Brand Area */}

        {/* Start Back To Top */}
        {/* <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div> */}
        {/* End Back To Top */}

        <Footer />
      </>
    );
  }
}
export default Contact;
