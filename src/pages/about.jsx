import React, { Component } from "react";
// import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../components/Breadcrumb";
import CounterOne from "../components/counters/CounterOne";
import Testimonial from "../components/Testimonial";
import BrandTwo from "../components/BrandTwo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Head from "next/head";

class About extends Component {
  render() {
    let title = "Despre noi",
      description =
        "Relația cu fiecare client este foarte importantă pentru noi și continuă mult timp după ce proiectul a luat sfărșit și a intrat în funcțiune.  Ne ocupăm de multe lucruri din spatele scenei, astfel încât să nu mai fie nevoie să o faci personal.";
    return (
      <div>
        {/* <PageHelmet pageTitle="About" /> */}
        <Head>
          <title>WebAppDynamicx - dezvoltare software</title>
          <meta
            name="description"
            content="Servicii creare dezvoltare website de prezentare, magazin online, aplicatii mobile ANDROID / IOS, creare logo / sigla vectoriala, optimizare SEO."
          />
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
          <meta
            name="keywords"
            content="Creare site, creare magazine online, creare aplicatie mobila, Android, IOS, optimizare SEO, mentenanta site, administrare site, gazduire"
          ></meta>
          <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Despre noi"} />
        {/* End Breadcrump Area */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/about/about-3.jpeg"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">
                            SUNTEM ORIENTAȚI SPRE CALITATE
                          </h3>
                          <p>
                            Calitatea serviciilor este obiectivul nostru
                            principal.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                          <h3 className="title">PRETURI ACCESIBILE</h3>
                          <p>
                            Serviciile noastre sunt gândite pentru a te ajuta să
                            ai un raport preț calitate excelent.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start CounterUp Area */}
        {/* <div className="rn-counterup-area pb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <h3 className="fontWeight500">Our Fun Facts</h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div> */}
        {/* End CounterUp Area */}

        {/* Start Finding Us Area  */}
        {/* <div className="rn-finding-us-area rn-finding-us bg_color--1">
          <div className="inner">
            <div className="content-wrapper">
              <div className="content">
                <h4 className="theme-gradient">Find Your Work Now</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that.
                </p>
                <a className="rn-btn btn-white" href="/about">
                  Get Started
                </a>
              </div>
            </div>
            <div className="thumbnail">
              <div className="image">
                <img
                  src="/assets/images/about/finding-us-01.png"
                  alt="Finding Images"
                />
              </div>
            </div>
          </div>
        </div> */}
        {/* End Finding Us Area  */}

        {/* Start Team Area  */}
        {/* <div className="rn-team-area bg_color--1 ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title service-style--3 text-center mb--25">
                  <h2 className="title">Skilled Team</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/team/team-01.jpg"
                      alt="Blog Images"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">Jone Due</h4>
                    <p className="designation">Sr. Web Developer</p>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="http://linkedin.com/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/team/team-02.jpg"
                      alt="Blog Images"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">BM. Alamin</h4>
                    <p className="designation">Sr. Web Developer</p>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="http://linkedin.com/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="team">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/team/team-03.jpg"
                      alt="Blog Images"
                    />
                  </div>
                  <div className="content">
                    <h4 className="title">Jone Due</h4>
                    <p className="designation">Sr. Web Developer</p>
                  </div>
                  <ul className="social-icon">
                    <li>
                      <a href="https://www.facebook.com/">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="http://linkedin.com/">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Team Area  */}

        {/* Start Testimonial Area */}
        {/* <div className="rn-testimonial-area bg_color--5 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div> */}
        {/* End Testimonial Area */}

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
      </div>
    );
  }
}
export default About;
