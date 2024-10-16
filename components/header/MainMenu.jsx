"use client";

import Link from "next/link";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
  contactItems,
  servicii,
  preturi,
} from "@/data/menu";

import Image from "next/image";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();

  const isActive = (link) => {
    return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image
                  src="/images/logo/logo_01.png"
                  alt="Web App Dynamicx"
                  width={125}
                  height={70}
                />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className="nav-item dropdown">
            <Link
              // className="nav-link dropdown-toggle"
              className={
                menuItems.some((menu) =>
                  menu.items.some((elm) => isActive(elm.link))
                )
                  ? "nav-link active-menu"
                  : "nav-link"
              }
              href="/"
            >
              Acasa
            </Link>
          </li>
          {/* End li (pages) */}

          <li className="nav-item dropdown">
            <Link
              // className="nav-link dropdown-toggle"
              className={
                pagesItems.some((menu) =>
                  menu.subItems.some((elm) => isActive(elm.link))
                ) || isActive("/despre-noi")
                  ? "nav-link active-menu"
                  : "nav-link"
              }
              href="/despre-noi"
            >
              Despre noi
            </Link>
          </li>
          {/* End li (pages) */}

          <li className="nav-item dropdown">
            <a
              // className="nav-link dropdown-toggle"
              className={
                preturi.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Preturi
            </a>
            <ul className="dropdown-menu">
              {preturi.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`dropdown-item ${
                      isActive(item.link) ? "active" : ""
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End li (portfolio) */}

          <li className="nav-item dropdown">
            <a
              // className="nav-link dropdown-toggle"
              className={
                servicii.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Servicii
            </a>
            <ul className="dropdown-menu">
              {servicii.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`dropdown-item ${
                      isActive(item.link) ? "active" : ""
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End li (portfolio) */}



          <li className="nav-item dropdown">
            <Link
              className={
                 isActive("/blog")
                  ? "nav-link active-menu"
                  : "nav-link"
              }
              href="/blog"
              role="button"
              // data-bs-toggle="dropdown"
              // data-bs-auto-close="outside"
              // aria-expanded="false"
            >
              Blog
            </Link>
            {/* <ul className="dropdown-menu">
              {contactItems.map((contact, index) => (
                <li key={index}>
                  <Link
                    href={contact.link}
                    className={`dropdown-item ${
                      isActive(contact.link) ? "active" : ""
                    }`}
                  >
                    <span>{contact.text}</span>
                  </Link>
                </li>
              ))}
            </ul> */}
          </li>
          {/* End li (BLOG) */}
          <li className="nav-item dropdown">
            <Link
              className={
                contactItems.some((elm) => isActive(elm.link))
                  ? "nav-link active-menu"
                  : "nav-link"
              }
              href="/contact"
              role="button"
              // data-bs-toggle="dropdown"
              // data-bs-auto-close="outside"
              // aria-expanded="false"
            >
              Contact
            </Link>
            {/* <ul className="dropdown-menu">
              {contactItems.map((contact, index) => (
                <li key={index}>
                  <Link
                    href={contact.link}
                    className={`dropdown-item ${
                      isActive(contact.link) ? "active" : ""
                    }`}
                  >
                    <span>{contact.text}</span>
                  </Link>
                </li>
              ))}
            </ul> */}
          </li>
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
              Conctactează-ne
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
