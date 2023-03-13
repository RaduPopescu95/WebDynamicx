import React, { Component } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialShare = [
  {
    Social: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=100090988634219",
  },
  // { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  {
    Social: <FaInstagram />,
    link: "https://www.instagram.com/webdynamicx/?next=%2F",
  },
  // { Social: <FaTwitter />, link: "https://twitter.com/" },
];

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer-area">
          <div className="footer-wrapper">
            <div className="row align-items-center row--0">
              <div className="col-lg-6">
                <div className="footer-left">
                  <div className="inner">
                    <span>Ai o întrebare sau dorești o oferta?</span>
                    <h2>
                      Contactează-ne <br /> Azi!
                    </h2>
                    <a className="rn-button-style--2" href="/contact">
                      <span>Contact</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-right" data-black-overlay="6">
                  <div className="row">
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="footer-link">
                        {/* <h4>Quick Link</h4> */}
                        <ul className="ft-link">
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/service">Servicii</Link>
                          </li>
                          <li>
                            <Link to="/about">Despre noi</Link>
                          </li>
                          {/* <li>
                            <Link to="/pricing-table">Preturi</Link>
                          </li> */}
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="footer-link">
                        {/* <h4>Say Hello</h4> */}
                        <ul className="ft-link">
                          <li>
                            <a href="mailto:webdynamicx@gmail.com">
                              webdynamicx@gmail.com
                            </a>
                          </li>
                          <li>
                            <a href="tel:+40787813831">0787813831</a>
                          </li>
                        </ul>

                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <a href={`${val.link}`}>{val.Social}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className="col-lg-12">
                      <div className="copyright-text">
                        <p>
                          Copyright © 2023 WebDynamicx. Toate drepturile
                          rezervate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;
