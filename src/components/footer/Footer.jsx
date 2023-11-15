import React, { Component } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

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
                    <span>Ai o întrebare sau doresti o oferta?</span>
                    <h2>
                      Contacteaza-ne <br /> Azi!
                    </h2>
                    <Link className="rn-button-style--2" href="/contact">
                      <span>Contact</span>
                    </Link>
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
                            <Link href="/">Home</Link>
                          </li>
                          <li>
                            <Link href="/servicii">Servicii</Link>
                          </li>
                          <li>
                            <Link href="/despre-noi">Despre noi</Link>
                          </li>
                          {/* <li>
                            <Link href="/pricing-table">Preturi</Link>
                          </li> */}
                          <li>
                            <Link href="/contact">Contact</Link>
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
                            <a href="tel:+40774592098">0774 592 098</a>
                          </li>
                        </ul>

                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <Link href={`${val.link}`}>{val.Social}</Link>
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
                          Copyright © 2023 WebAppDynamicx. Toate drepturile
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
