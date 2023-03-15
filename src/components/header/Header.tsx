import React, { Component } from "react";
import Link, { LinkProps } from "next/link";
import { HTMLProps, FC } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import LinkButton from "./LinkButton";

class Header extends Component {
  constructor(props: any) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    // this.subMetuTrigger = this.subMetuTrigger.bind(this);
    // window.addEventListener("load", function () {
    //   console.log("All assets are loaded");
    // });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  menuListTrigger() {
    // document.querySelector(".header-wrapper").classList.toggle("menu-open");

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
  }

  render() {
    // var elements = document.querySelectorAll(".has-droupdown > a");
    // for (var i in elements) {
    //   if (elements.hasOwnProperty(i)) {
    //     elements[i].onclick = function () {
    //       this.parentElement
    //         .querySelector(".submenu")
    //         .classList.toggle("active");
    //       this.classList.toggle("open");
    //     };
    //   }
    // }
    const { logo, color = "default-color", services } = this.props;
    let logoUrl;

    logoUrl = (
      <img src="/assets/images/logo/webnobg.png" alt="Digital Agency" />
    );

    return (
      <header
        className={`header-area formobile-menu header--transparent ${color} ${services}`}
      >
        <div
          className="header-wrapper"
          id="header-wrapper"
          style={{ marginTop: 20 }}
        >
          <div className="header-left">
            <div style={{ width: "200px" }}>
              <Link href="/">{logoUrl}</Link>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                {/* exemplu droupdown */}
                <li>
                  <Link href="/home">Home</Link>
                </li>

                <li>
                  <Link href="/service">Servicii</Link>
                </li>
                <li>
                  <Link href="/about">Despre noi</Link>
                </li>

                <li className="has-droupdown">
                  <Link legacyBehavior href="">
                    <a href="" onClick={this.menuListTrigger}>
                      Preturi
                    </a>
                  </Link>

                  <ul className="submenu">
                    <li>
                      <Link href="/website-prezentare">Website Prezentare</Link>
                    </li>
                    <li>
                      <Link href="/logo-design">Logo Design</Link>
                    </li>
                    <li>
                      <Link href="/magazin-online">Magazin Online</Link>
                    </li>
                    <li>
                      <Link href="/aplicatie-mobila">Aplicatie mobila</Link>
                    </li>
                    <li>
                      <Link href="/mentenanta-administrare">
                        Mentenata si administrare
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/politica-confidentialitate">
                    Politica confidentialitate
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
