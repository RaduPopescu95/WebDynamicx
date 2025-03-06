"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const PortfolioGallery6 = () => {
  const [filter, setFilter] = useState("*");

  return (
    <div className="portfolio-gallery-seven pt-30">
      <div className="container">
        <ul className="style-none text-center isotop-menu-wrapper g-control-nav-two">
          <li
            className={filter === "*" ? "is-checked" : ""}
            onClick={() => setFilter("*")}
          >
            Toate
          </li>
          <li
            className={filter === "website" ? "is-checked" : ""}
            onClick={() => setFilter("website")}
          >
            Website prezentare
          </li>
          <li
            className={filter === "Aplicatii mobile" ? "is-checked" : ""}
            onClick={() => setFilter("Aplicatii mobile")}
          >
            Aplicatii mobile
          </li>
          <li
            className={filter === "Magazine online" ? "is-checked" : ""}
            onClick={() => setFilter("Magazine online")}
          >
            Magazine online
          </li>
        </ul>

        <div className="row pt-90 lg-pt-50">
          {/* Imaginea 1 */}
          {(filter === "*" || filter === "website") && (
            <div className="col-lg-12 website">
              <div className="portfolio-block-six mb-40">
                <div className="img-meta position-relative">
                  <Image
                    width={1320}
                    height={600}
                    src="/images/portofolio/magazin.png"
                    alt="gallery"
                    className="w-100 tran5s"
                  />
                  <Link href={`/portfolio/1`}>
                    <span
                      role="button"
                      className="fancybox tran3s overlay-icon zoom-icon"
                      title="Click for large view"
                    >
                      <i className="bi bi-plus"></i>
                    </span>
                  </Link>
                  <div className="caption tran3s d-flex justify-content-end flex-column">
                    <span className="tag">website</span>
                    <h6>
                      <Link href={`/portfolio/1`} className="pj-title">
                        Proiect 1
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Imaginea 2 */}
          {(filter === "*" || filter === "Aplicatii mobile") && (
            <div className="col-lg-12 Aplicatii mobile">
              <div className="portfolio-block-six mb-40">
                <div className="img-meta position-relative">
                  <Image
                    width={1320}
                    height={600}
                    src="/images/portofolio/magazin.png"
                    alt="gallery"
                    className="w-100 tran5s"
                  />
                  <Link href={`/portfolio/2`}>
                    <span
                      role="button"
                      className="fancybox tran3s overlay-icon zoom-icon"
                      title="Click for large view"
                    >
                      <i className="bi bi-plus"></i>
                    </span>
                  </Link>
                  <div className="caption tran3s d-flex justify-content-end flex-column">
                    <span className="tag">Aplicatii mobile</span>
                    <h6>
                      <Link href={`/portfolio/2`} className="pj-title">
                        Proiect 2
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Imaginea 3 */}
          {(filter === "*" || filter === "Magazine online") && (
            <div className="col-lg-12 Magazine online">
              <div className="portfolio-block-six mb-40">
                <div className="img-meta position-relative">
                  <Image
                    width={1320}
                    height={600}
                    src="/images/portofolio/magazin.png"
                    alt="gallery"
                    className="w-100 tran5s"
                  />
               <Link href="https://www.design-and-gift.ro" target="_blank">
                    <span
                      role="button"
                      className="fancybox tran3s overlay-icon zoom-icon"
                      title="Click for large view"
                    >
                      <i className="bi bi-plus"></i>
                    </span>
                  </Link>
                  <div className="caption tran3s d-flex justify-content-end flex-column">
                    <h6>
                      <Link href="https://www.design-and-gift.ro"  className="pj-title">
                        Magazin Online
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Imaginea 3 */}
          {(filter === "*" || filter === "Magazine online") && (
            <div className="col-lg-12 Magazine online">
              <div className="portfolio-block-six mb-40">
                <div className="img-meta position-relative">
                  <Image
                    width={1320}
                    height={600}
                    src="/images/portofolio/magazin2.png"
                    alt="gallery"
                    className="w-100 tran5s"
                  />
               <Link href="https://www.design-and-gift.ro" target="_blank">
                    <span
                      role="button"
                      className="fancybox tran3s overlay-icon zoom-icon"
                      title="Click for large view"
                    >
                      <i className="bi bi-plus"></i>
                    </span>
                  </Link>
                  <div className="caption tran3s d-flex justify-content-end flex-column">
                    <h6>
                      <Link href="https://www.design-and-gift.ro"  className="pj-title">
                        Magazin Online
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Imaginea 4 */}
          {(filter === "*" || filter === "dev") && (
            <div className="col-lg-12 dev">
              <div className="portfolio-block-six mb-40">
                <div className="img-meta position-relative">
                  <Image
                    width={1320}
                    height={600}
                    src="/images/portofolio/magazin.png"
                    alt="gallery"
                    className="w-100 tran5s"
                  />
                  <Link href={`/portfolio/4`}>
                    <span
                      role="button"
                      className="fancybox tran3s overlay-icon zoom-icon"
                      title="Click for large view"
                    >
                      <i className="bi bi-plus"></i>
                    </span>
                  </Link>
                  <div className="caption tran3s d-flex justify-content-end flex-column">
                    <span className="tag">Development</span>
                    <h6>
                      <Link href={`/portfolio/4`} className="pj-title">
                        Proiect 4
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Imaginea 5 */}
          {(filter === "*" || filter === "website") && (
            <div className="col-lg-12 website">
              <div className="portfolio-block-six mb-40">
                <div className="img-meta position-relative">
                  <Image
                    width={1320}
                    height={600}
                    src="/images/portofolio/magazin.png"
                    alt="gallery"
                    className="w-100 tran5s"
                  />
                  <Link href={`/portfolio/5`}>
                    <span
                      role="button"
                      className="fancybox tran3s overlay-icon zoom-icon"
                      title="Click for large view"
                    >
                      <i className="bi bi-plus"></i>
                    </span>
                  </Link>
                  <div className="caption tran3s d-flex justify-content-end flex-column">
                    <span className="tag">website</span>
                    <h6>
                      <Link href={`/portfolio/5`} className="pj-title">
                        Proiect 5
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery6;
