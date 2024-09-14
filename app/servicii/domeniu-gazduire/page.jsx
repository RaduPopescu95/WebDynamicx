import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";

import Faq from "@/components/home-page/home-2/Faq";

import Link from "next/link";
import ProgressBar from "@/components/service-details/ProgressBar";
import Social from "@/components/service-details/Social";
export const metadata = {
  title: "Domeniu si gazduire || Web App Dynamicx",
  openGraph: {
    title: "Domeniu si gazduire || Web App Dynamicx",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/servicii/domeniu-gazduire`,
  },
  manifest: `${process.env.NEXT_PUBLIC_SITE_URL}/manifest.json`,
  robots: {
    index: true,
    follow: true,
  },
};
const PortfolioV1 = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Domeniu si gazduire || Web App Dynamicx`,
    // image: product.image,
    description:
      "Domeniu si gazduire || Web App Dynamicx",
  };
  return (
    <>
         <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                  Serviciu de gazduire web pentru domenii .ro si gazduire
                  domeniu web pe servere in Romania
                </div>
                <h1 className="main-title fw-500 tx-dark">
                  Inregistrare Domenii Rapid si in Siguranta
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
                  Inregistrare Domenii Rapid si in Siguranta
                </h2>
                <p className="text-lg tx-dark">
                  Înregistrarea domeniilor în mod rapid și sigur este esențială
                  pentru succesul online al afacerii tale. Oferim un serviciu de
                  înregistrare a domeniilor care garantează o procesare
                  eficientă și protecție maximă a datelor.
                </p>
                <img
                  src="/images/media/gazduire.svg"
                  alt="domeniu si gazduire"
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
                  Pe lângă înregistrarea domeniilor, oferim și servicii de
                  gazduire web de înaltă calitate. Infrastructura noastră
                  asigură o funcționare fără probleme și o disponibilitate
                  ridicată a site-ului tău.
                </p>
                <p>
                  Optează pentru serviciul nostru integrat de înregistrare
                  domenii și gazduire pentru a beneficia de o soluție completă
                  și sigură, care să susțină creșterea afacerii tale în mediul
                  online.
                </p>

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
                    <li>
                      <Link href="/servicii/logo-design">Logo Design</Link>
                    </li>
                    <li>
                      <Link href="/servicii/creare-magazin-online">
                        Magazin Online
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="current-page"
                        href="/servicii/domeniu-gazduire"
                      >
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
