import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";

import Faq from "@/components/home-page/home-2/Faq";

import Link from "next/link";
import ProgressBar from "@/components/service-details/ProgressBar";
import Social from "@/components/service-details/Social";
export const metadata = {
  title: "Dezvoltare site web || Web App Dynamicx",
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
                  Soluții web personalizate pentru afacerea ta
                </div>
                <h1 className="main-title fw-500 tx-dark">
                  Creare site de prezentare
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
                  Creăm experiențe web de impact, personalizate pentru succesul
                  afacerii tale
                </h2>
                <p className="text-lg tx-dark">
                  Site-ul tău este oglinda afacerii tale și principalul
                  instrument de marketing. Te sprijinim în crearea unui site de
                  prezentare atrăgător, intuitiv și eficient, care transformă
                  vizitatorii în clienți, oferindu-le o experiență de navigare
                  excepțională.
                </p>
                <img
                  src="/images/media/siteweb.svg"
                  alt="dezvoltare site web"
                  className="main-img-meta"
                />
                <h2 className="main-title tx-dark mb-30">
                  Dezvoltăm și livrăm website-uri „la cheie”, optimizate pentru
                  a stimula vânzările.
                </h2>
                <p>
                  Înțelegem că fiecare afacere este unică, de aceea abordăm
                  fiecare proiect cu o atenție deosebită la detalii și o
                  strategie personalizată. Echipa noastră de experți în design
                  și dezvoltare web utilizează cele mai noi tehnologii și
                  metodologii pentru a livra soluții de înaltă calitate,
                  adaptate exact nevoilor și obiectivelor tale.
                </p>
                <p>
                  În era digitală, prezența online este esențială pentru
                  succesul oricărei afaceri. La noi, crearea unui site web nu se
                  rezumă doar la design și funcționalitate, ci implică o
                  înțelegere profundă a nevoilor afacerii tale. Ne concentrăm pe
                  dezvoltarea de soluții web personalizate, adaptate
                  obiectivelor tale specifice. Prin integrarea celor mai recente
                  tehnologii și practici SEO, ne asigurăm că site-ul tău nu doar
                  atrage vizitatori, dar și îi transformă în clienți fideli.
                  Colaborăm îndeaproape cu tine pentru a crea un website care nu
                  doar că arată excepțional, dar este și ușor de navigat,
                  oferind o experiență de utilizare fluidă și plăcută.
                </p>
                <p>
                  Fie că ai nevoie de un site de prezentare elegant, un magazin
                  online robust sau o platformă web complexă, suntem aici pentru
                  a te ajuta să îți realizezi viziunea. Procesul nostru începe
                  cu o consultanță detaliată pentru a înțelege cerințele tale și
                  a elabora un plan de acțiune eficient. Urmăm principii solide
                  de design UX/UI pentru a crea interfețe intuitive și
                  atrăgătoare, iar echipa noastră de dezvoltatori asigură că
                  fiecare componentă este construită pentru performanță și
                  scalabilitate.
                </p>
                <p>
                  Dezvoltăm site-uri web de înaltă performanță, folosind
                  tehnologii moderne precum React JS și Next JS. Aceste site-uri
                  sunt concepute pentru a genera lead-uri eficiente și a
                  impulsiona vânzările.
                </p>
                <div className="mt-50 lg-mt-30">
                  <div className="row gx-xxl-5">
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">
                        Etapele realizării unui site web
                      </h4>
                      <ul className="style-none list-item md-mb-40">
                        <li>
                          Structurarea unui wiframe specific business-ului
                        </li>
                        <li>Conceptul grafic și crearea logo-ului</li>
                        <li>Realizare design responsive</li>
                        <li>Implementare bannere și animații</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">Despre Noi</h4>
                      <p className="pe-xxl-5">
                        Echipa noastră este formată din experți cu vastă
                        experiență în design și dezvoltare web.
                      </p>
                      <p className="pe-xxl-5">
                        Folosim cele mai noi tehnologii și framework-uri pentru
                        a asigura performanța și scalabilitatea soluțiilor web.
                      </p>
                      <p className="pe-xxl-5">
                        Oferim servicii de mentenanță și suport continuu pentru
                        a asigura funcționarea optimă a soluțiilor web și pentru
                        a implementa actualizări sau îmbunătățiri necesare.
                      </p>
                      <p className="pe-xxl-5">
                        Oferim servicii de înaltă calitate la prețuri
                        competitive, asigurându-ne că investiția ta aduce
                        rezultate remarcabile.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="mt-60 mb-20 lg-mt-30 lg-mb-10">
                  <div className="row gx-xxl-5">
                    <ProgressBar />
                  </div>
                </div> */}

                <p>
                  Investim pasiune și toate resursele noastre în fiecare
                  proiect, asigurându-ne că site-ul tău este realizat cu
                  măiestrie, oferind utilizatorilor o experiență de navigare
                  memorabilă și ajutându-te să obții un return on investment
                  (ROI) optim.
                </p>
                <p>
                  Fie că ai nevoie de un site de prezentare, un magazin online
                  sau o platformă complexă, suntem aici pentru a transforma
                  viziunea ta digitală în realitate.
                </p>
                <p>
                  Modul în care îți spui povestea contează. Un design
                  personalizat poate influența numărul de vânzări să crească și
                  să sporească clienții potențiali. Un design reușit va ajuta
                  afacerea să se deosebească din mulțime printr-un site de
                  prezentare de impact.
                </p>
                <p>
                  Suntem o agenție de web design și dezvoltare web ce creează
                  website-uri îmbinând experiența utilizatorului cu povestea
                  brandului. Programatorii și web designerii noștri realizează
                  site-uri web potrivite fiecărei nevoi ce funcționează fără
                  probleme pe orice dispozitiv. Fie că e vorba de pagini web
                  complexe, site-uri de noutăți, site de prezentare, magazin
                  online sau îmbunătățirea experienței utilizatorului (UI/UX),
                  noi te putem ajuta.
                </p>
                <h3 className="main-title tx-dark mb-30">
                  Inregistrare Domenii Rapid si in Siguranta
                </h3>
                <p>
                  Înregistrarea domeniilor în mod rapid și sigur este esențială
                  pentru succesul online al afacerii tale. Oferim un serviciu de
                  înregistrare a domeniilor care garantează o procesare
                  eficientă și protecție maximă a datelor.
                </p>
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
                    <li className="current-page">
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
