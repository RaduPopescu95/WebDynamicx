import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";

import Faq from "@/components/home-page/home-2/Faq";

import Link from "next/link";
import ProgressBar from "@/components/service-details/ProgressBar";
import Social from "@/components/service-details/Social";
export const metadata = {
  title: "Realizare Sigla Vectoriala Logo || Web App Dynamicx",
  openGraph: {
    title: "Realizare Sigla Vectoriala Logo || Web App Dynamicx",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/logo-design`,
  },
  manifest: `${process.env.NEXT_PUBLIC_SITE_URL}/manifest.json`,
  robots: {
    index: true,
    follow: true,
  },
};
const PortfolioV1 = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />
      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Începe-ți Identitatea Vizuală
                </div>
                <h1 className="main-title fw-500 tx-dark">
                  Creare Logo Design Sigla Vectoriala
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="/images/shape/shape_172.svg"
          alt="shap"
          className="lazy-img shapes shape-two"
        />
        <img
          src="/images/shape/shape_175.svg"
          alt="shap"
          className="lazy-img shapes shape-three"
        />
      </div>
      {/* 
			=============================================
				Service Details
			============================================== 
			*/}
      <div className="service-details position-relative mt-100 mb-170 md-mt-50 lg-mb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 order-lg-1">
              <div className="service-details-meta ps-lg-5">
                <h2 className="main-title tx-dark mb-30">
                  Ne specializăm în crearea de logo-uri și identități vizuale
                  distinctive, personalizate pentru fiecare afacere în parte.
                </h2>
                <p className="text-lg tx-dark">
                  Scopul nostru este să colaborăm cu afacerile mici și mijlocii
                  pentru a dezvolta identități vizuale personalizate și
                  adecvate. Suntem specializați în crearea de logo-uri, sigle și
                  manuale de identitate vizuală, concepute pentru a optimiza
                  interacțiunea cu publicul tău țintă.
                </p>
                <img
                  src="/images/media/logodesign.svg"
                  alt="media"
                  className="main-img-meta"
                />

                <p>
                  Indiferent dacă ești la început cu un side business și ai
                  nevoie de un logo, sau vizezi un rebranding complet pentru o
                  firmă existentă, necesitând o identitate vizuală integrală,
                  pachetele noastre sunt concepute să satisfacă orice cerință.
                  Acestea se personalizează în funcție de specificul fiecărui
                  business, iar costurile sunt stabilite clar de la început,
                  după ce toate detaliile proiectului sunt definite.
                </p>
                <p>
                  Pentru fiecare proiect în domeniul designului de logo și
                  identitate vizuală, elaborăm mai multe variante inițiale de
                  concepte pentru logo.
                </p>
                <p>
                  Aceste concepte inițiale de design logo sunt create în etapa
                  preliminară a proiectului, fiind primele schițe ale logo-ului,
                  dezvoltate pe baza brief-ului primit și a discuțiilor avute cu
                  clientul.
                </p>
                <p>
                  Pe baza acestor prime schițe, vom efectua modificări necesare
                  pentru a ajunge la o versiune finală a designului logo-ului,
                  care să fie cu adevărat reprezentativă pentru afacerea ta.
                </p>
                <div className="mt-50 lg-mt-30">
                  <div className="row gx-xxl-5">
                    <div className="col-lg-12">
                      <h4 className="sub-title mb-20 tx-dark">
                        La încheierea proiectului, vei primi logo-ul tău în
                        diverse versiuni și formate de fișiere. Vei primi
                        următoarele variante ale logo-ului:
                      </h4>
                      <ul className="style-none list-item md-mb-40">
                        <li>AdaLogo design în culorile originale</li>
                        <li>
                          Logo design în culori inversate - pentru fundaluri
                          închise
                        </li>
                        <li>Logo design în culori alb/negru</li>
                        <li>
                          Fișiere vectoriale în formaturi AI, EPS și PDF - pot
                          fi scalate la orice dimensiuni fără a se pierde din
                          calitatea grafică și sunt cele pe care le vei folosi
                          la tipărire.
                        </li>
                        <li>
                          Fișiere web sau de tip raster în formaturi JPG, PNG și
                          SVG - fișiere de tip raster ce sunt potrivite pentru a
                          fi folosite în mediul online (site). Dacă sunt
                          folosite la print, rezultatele finale vor fi de slabă
                          calitate.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="mt-60 mb-20 lg-mt-30 lg-mb-10">
                  <div className="row gx-xxl-5">
                    <ProgressBar />
                  </div>
                </div> */}

                {/* <h3 className="tx-dark mt-100 mb-50 lg-mt-50">
                  Any Questions find here.
                </h3>
                <Faq /> */}
              </div>
              {/* /.service-details-meta */}
            </div>
            {/* End .col-xl-9 */}

            <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
              <div className="service-sidebar pe-xxl-5 md-mt-60">
                <div className="service-category mb-40">
                  <h4 className="tx-dark mb-15">Servicii</h4>
                  <ul className="style-none">
                    <li>
                      <Link href="/servicii/dezvoltare-aplicatii-mobile">
                        Dezvoltare Aplicatii Mobile
                      </Link>
                    </li>
                    <li>
                      <Link href="/servicii/dezvoltare-site-web">
                        Dezvoltare Site Web
                      </Link>
                    </li>
                    <li className="current-page">
                      <Link href="/servicii/logo-design">Logo Design</Link>
                    </li>
                    <li>
                      <Link href="/servicii/creare-magazin-online">
                        Magazin Online
                      </Link>
                    </li>
                    <li>
                      <Link href="/servicii/domeniu-gazduire">
                        Domeniu si Gazduire
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* /.service-category */}

                {/* <div className="sidebar-quote mb-50">
                  <img
                    src="/images/icon/icon_150.svg"
                    alt="icon"
                    className="m-auto"
                  />
                  <p className="fw-500">
                    Evernote Web offers a complete lineup major linup browser
                  </p>
                  <div className="name">- Rashed Kabir</div>
                </div> */}
                {/* /.sidebar-quote */}
                {/* <h4 className="tx-dark mb-15">Distribuire</h4>
                <Social /> */}
              </div>
              {/* /.service-sidebar */}
            </div>
          </div>
        </div>
      </div>
      {/* /.service-details */}
      {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Contactează-ne astăzi pentru a discuta cum putem
                        transforma ideile tale în realitate
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Începe transformarea digitală a afacerii tale
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      Contactează-ne
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-sixteen */}
      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default PortfolioV1;
