import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";

import Faq from "@/components/home-page/home-2/Faq";

import Link from "next/link";
import ProgressBar from "@/components/service-details/ProgressBar";
import Social from "@/components/service-details/Social";

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
                <h1 className="main-title fw-500 tx-dark">
                  Politica de confidentialitate
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
                <h3 className="main-title tx-dark mb-30">
                  1. COLECTAREA DE INFORMAȚII
                </h3>
                <p>
                  Website-ul www.webappdynamicx.ro colecteaza informații atunci
                  când se completeza formularul de contact din cadrul sectiunii
                  contact aferenta website-ulul nostru. Informațiile colectate
                  includ numele, adresa de e-mail, numărul de telefon si mesajul
                  transmis.
                </p>
                <p>
                  În plus, vom primi în mod automat și vom înregistra informații
                  de la computer-ul și browser-ul tău, inclusiv adresa IP,
                  software-ul și atributele hardware, precum și pagina
                  solicitată.
                </p>
                <h3 className="main-title tx-dark mb-30">
                  2. UTILIZAREA DE INFORMAȚII
                </h3>
                <p>
                  Oricare dintre informațiile pe care le colectăm pot fi
                  folosite pentru a:
                </p>
                <div className="mt-50 lg-mt-30">
                  <div className="row gx-xxl-5">
                    <div className="col-lg-12">
                      <p className="pe-xxl-5">
                        Personaliza experiența ta și pentru a răspunde nevoilor
                        individuale
                      </p>
                      <p className="pe-xxl-5">Îmbunătăți site-ul nostru</p>
                      <p className="pe-xxl-5">
                        Îmbunătăți serviciul clienți și nevoile de asistență
                      </p>
                      <p className="pe-xxl-5">Contacta prin e-mail</p>
                      <p className="pe-xxl-5">
                        Administra un concurs, promovare sau sondaj
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="main-title tx-dark mb-30">
                  3. E-COMMERCE DE CONFIDENȚIALITATE
                </h3>
                <p>
                  Noi suntem singurii proprietari ai informațiilor colectate pe
                  acest site. Informațiile tale personale de identificare nu vor
                  fi vândute, schimbate, transferate sau date oricărei alte
                  societăți, indiferent de motive, fără consimțământul tău,
                  altele decât cele necesare pentru îndeplinirea unei cereri
                  și/sau tranzacție, de exemplu pentru a trimite o comandă.
                </p>
                <h3 className="main-title tx-dark mb-30">
                  4. DEZVĂLUIREA PĂRȚILOR TERȚE
                </h3>
                <p>
                  Noi nu vindem, nu negociem sau transferăm către părți din
                  afară informațiile tale personale identificabile. Acest lucru
                  nu include părțile terțe de încredere, care ne asistă în
                  operarea site-ului nostru sau în conducerea afacerii, atâta
                  timp cât părțile sunt de acord să păstreze confidențialitatea
                  acestor informații. Noi credem că este necesar să se facă
                  schimb de informații, cu scopul de a investiga, preveni sau de
                  a lua măsuri ce privesc activitățile ilegale, suspiciunea de
                  fraudă, situațiile care implică potențiale amenințări la
                  siguranța fizică a oricărei persoane, încălcări ale termenilor
                  de utilizare, sau altfel cerute de lege.
                </p>
                <h3 className="main-title tx-dark mb-30">
                  5. PROTEJAREA INFORMAȚIILOR
                </h3>
                <p>
                  Certificăm faptul că respectăm drepturile conferite de Legea
                  nr. 677/2001 privind protecția persoanelor cu privire la
                  prelucrarea datelor cu caracter personal și libera circulație
                  a acestor date, a Legii nr. 365/2002 privind comerțul
                  electronic, precum și a Ordonanței nr. 130/2000 privind
                  protecția consumatorilor la încheierea și executarea
                  contractelor la distantă cu modificările ulterioare.
                </p>
                <p>
                  Vom pune în aplicare o varietate de măsuri de securitate
                  pentru a menține siguranța informațiilor tale personale. Noi
                  folosim criptarea de stat-of-the-art pentru a proteja
                  informațiile sensibile transmise online. Numai angajații care
                  au nevoie să efectueze un anumit task (de exemplu, facturare
                  sau serviciu client) beneficiază de acces la informațiile
                  personale de identificare. Calculatoarele/serverele folosite
                  pentru a stoca informațiile personale de identificare sunt
                  păstrate într-un mediu sigur.
                </p>
                <h3>Folosim cookie-uri?</h3>
                <p>
                  Da. Cookie-urile îmbunătățesc accesul la site-ul nostru și
                  identifică vizitarea repetată. Mai mult decât atât,
                  cookie-urile noastre sporesc experiența unui utilizator prin
                  urmărirea și direcționarea în funcție de interesele lui/ei.
                  Această utilizare de cookie-uri, cu toate acestea, nu este în
                  nici un fel legată de orice informație personală de
                  identificare de pe site-ul nostru.
                </p>
                <h3>6. GOOGLE ANALYTICS</h3>
                <p>
                  Acest site utilizează implementări Google Analytics
                  advertising care colectează date despre trafic în scop
                  publicitar prin cookie-uri Google advertising și prin
                  identificatori anonimi. De asemenea, site-ul colectează date
                  prin implementarea standard Google Universal Analytics. Facem
                  toate eforturile posibile de a fi în conformitate cu
                  politicile Google Analytics Advertising. Nu vom facilita
                  comasarea informațiilor personal-identificabile cu cele
                  non-personale colectate prin orice produse sau opțiuni Google
                  advertising.
                </p>
                <p>
                  Ne rezervăm dreptul de a testa, adopta sau elimina oricare
                  dintre opțiunile Google Analytics din când în când, fără anunț
                  prealabil sau divulgare explicită.
                </p>
                <p>De asemenea, dorim să vă informăm că:</p>
                <div className="mt-50 lg-mt-30">
                  <div className="row gx-xxl-5">
                    <div className="col-lg-12">
                      <p className="pe-xxl-5">
                        Acest site sau alte terțe părți comerciale pot utiliza
                        cookie-uri de primă instanță (cum ar fi cookie-ul Google
                        Analytics) sau alți identificatori de primă instanță, și
                        cookie-uri de terță instanță (cum ar fi cookie-ul
                        DoubleClick) sau alți identificatori de terță instanță
                        laolaltă.
                      </p>
                      <p className="pe-xxl-5">
                        Vizitatorii site-ului nostru pot să opteze pentru a fi
                        excluși din opțiunile Google Analytics Advertising pe
                        care le utilizăm, inclusiv prin Ads Settings ale
                        browserului de internet, Ad Settings pentru aplicațiile
                        mobile sau prin orice alte mijloace disponibile (de
                        exemplu, opt-out-ul NAI)
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-60 mb-20 lg-mt-30 lg-mb-10">
                  <div className="row gx-xxl-5">
                    <ProgressBar />
                  </div>
                </div> */}
                <h3 className="tx-dark mt-100 mb-50 lg-mt-50">
                  7. CONSIMȚĂMÂNTUL
                </h3>
                <p>
                  Prin utilizarea site-ului nostru, ești de acord cu politica
                  noastră de confidențialitate.
                </p>

                {/* <h3 className="tx-dark mt-100 mb-50 lg-mt-50">
                  Any Questions find here.
                </h3>
                <Faq /> */}
              </div>
              {/* /.service-details-meta */}
            </div>
            {/* End .col-xl-9 */}
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
                      <h3 className="main-title fw-500 text-white m0">
                        Începe transformarea digitală a afacerii tale
                      </h3>
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
