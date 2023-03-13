import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

class BlogDetails extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        {/* <PageHelmet pageTitle='Blog Details' /> */}
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7"
          data-black-overlay="7"
          style={{
            backgroundColor: "#021b39",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-single-page-title text-center pt--100">
                  <h2 className="title theme-gradient">
                    Politică de <br /> confidențialitate
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Blog Details */}
        <div className="rn-blog-details pt--110 pb--70 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-wrapper">
                  <div className="inner">
                    <h4>1. COLECTAREA DE INFORMAȚII</h4>
                    {/* <p>
                      SC DIANYS HOLDING SRL prin prisma website-ului
                      www.diaweb.ro colecteaza informații atunci când se
                      completeza formularul de contact din cadrul sectiunii
                      contact aferenta website-ulul nostru. Informațiile
                      colectate includ numele, adresa de e-mail, numărul de
                      telefon si mesajul transmis.
                    </p> */}
                    <p>
                      Website-ul www.webdynamicx.ro colecteaza informații atunci
                      când se completeza formularul de contact din cadrul
                      sectiunii contact aferenta website-ulul nostru.
                      Informațiile colectate includ numele, adresa de e-mail,
                      numărul de telefon si mesajul transmis.
                      <br />
                      <br />
                      În plus, vom primi în mod automat și vom înregistra
                      informații de la computer-ul și browser-ul tău, inclusiv
                      adresa IP, software-ul și atributele hardware, precum și
                      pagina solicitată.
                    </p>
                    <h4>2. UTILIZAREA DE INFORMAȚII</h4>
                    <p>
                      Oricare dintre informațiile pe care le colectăm pot fi
                      folosite pentru a:
                    </p>
                    <ul>
                      <li>
                        Personaliza experiența ta și pentru a răspunde nevoilor
                        individuale
                      </li>
                      <li>Îmbunătăți site-ul nostru</li>
                      <li>
                        Îmbunătăți serviciul clienți și nevoile de asistență
                      </li>
                      <li>Contacta prin e-mail</li>
                      <li>Administra un concurs, promovare sau sondaj</li>
                    </ul>
                    <h4>3. E-COMMERCE DE CONFIDENȚIALITATE</h4>
                    <p>
                      Noi suntem singurii proprietari ai informațiilor colectate
                      pe acest site. Informațiile tale personale de identificare
                      nu vor fi vândute, schimbate, transferate sau date
                      oricărei alte societăți, indiferent de motive, fără
                      consimțământul tău, altele decât cele necesare pentru
                      îndeplinirea unei cereri și/sau tranzacție, de exemplu
                      pentru a trimite o comandă.
                    </p>
                    <h4>4. DEZVĂLUIREA PĂRȚILOR TERȚE</h4>
                    <p>
                      Noi nu vindem, nu negociem sau transferăm către părți din
                      afară informațiile tale personale identificabile. Acest
                      lucru nu include părțile terțe de încredere, care ne
                      asistă în operarea site-ului nostru sau în conducerea
                      afacerii, atâta timp cât părțile sunt de acord să păstreze
                      confidențialitatea acestor informații.
                      <br />
                      Noi credem că este necesar să se facă schimb de
                      informații, cu scopul de a investiga, preveni sau de a lua
                      măsuri ce privesc activitățile ilegale, suspiciunea de
                      fraudă, situațiile care implică potențiale amenințări la
                      siguranța fizică a oricărei persoane, încălcări ale
                      termenilor de utilizare, sau altfel cerute de lege.
                      <br />
                      Informațiile non-private, cu toate acestea, pot fi
                      furnizate către alte părți pentru marketing, publicitate,
                      sau în alte scopuri.
                    </p>
                    <h4>5. PROTEJAREA INFORMAȚIILOR</h4>
                    <p>
                      Certificăm faptul că respectăm drepturile conferite de
                      Legea nr. 677/2001 privind protecția persoanelor cu
                      privire la prelucrarea datelor cu caracter personal și
                      libera circulație a acestor date, a Legii nr. 365/2002
                      privind comerțul electronic, precum și a Ordonanței nr.
                      130/2000 privind protecția consumatorilor la încheierea și
                      executarea contractelor la distantă cu modificările
                      ulterioare.
                      <br />
                      Vom pune în aplicare o varietate de măsuri de securitate
                      pentru a menține siguranța informațiilor tale personale.
                      Noi folosim criptarea de stat-of-the-art pentru a proteja
                      informațiile sensibile transmise online. Numai angajații
                      care au nevoie să efectueze un anumit task (de exemplu,
                      facturare sau serviciu client) beneficiază de acces la
                      informațiile personale de identificare.
                      Calculatoarele/serverele folosite pentru a stoca
                      informațiile personale de identificare sunt păstrate
                      într-un mediu sigur.
                    </p>
                    <h6>Folosim cookie-uri?</h6>
                    <p>
                      Da. Cookie-urile îmbunătățesc accesul la site-ul nostru și
                      identifică vizitarea repetată. Mai mult decât atât,
                      cookie-urile noastre sporesc experiența unui utilizator
                      prin urmărirea și direcționarea în funcție de interesele
                      lui/ei. Această utilizare de cookie-uri, cu toate acestea,
                      nu este în nici un fel legată de orice informație
                      personală de identificare de pe site-ul nostru.
                    </p>
                    <h4>6. GOOGLE ANALYTICS</h4>
                    <p>
                      Acest site utilizează implementări Google Analytics
                      advertising care colectează date despre trafic în scop
                      publicitar prin cookie-uri Google advertising și prin
                      identificatori anonimi. De asemenea, site-ul colectează
                      date prin implementarea standard Google Universal
                      Analytics. Facem toate eforturile posibile de a fi în
                      conformitate cu politicile Google Analytics Advertising.
                      <br />
                      Nu vom facilita comasarea informațiilor
                      personal-identificabile cu cele non-personale colectate
                      prin orice produse sau opțiuni Google advertising.
                      <br />
                      Ne rezervăm dreptul de a testa, adopta sau elimina oricare
                      dintre opțiunile Google Analytics din când în când, fără
                      anunț prealabil sau divulgare explicită.
                      <br />
                      De asemenea, dorim să vă informăm că:
                      <ul>
                        <li>
                          Acest site sau alte terțe părți comerciale pot utiliza
                          cookie-uri de primă instanță (cum ar fi cookie-ul
                          Google Analytics) sau alți identificatori de primă
                          instanță, și cookie-uri de terță instanță (cum ar fi
                          cookie-ul DoubleClick) sau alți identificatori de
                          terță instanță laolaltă.
                        </li>
                        <li>
                          Vizitatorii site-ului nostru pot să opteze pentru a fi
                          excluși din opțiunile Google Analytics Advertising pe
                          care le utilizăm, inclusiv prin Ads Settings ale
                          browserului de internet, Ad Settings pentru
                          aplicațiile mobile sau prin orice alte mijloace
                          disponibile (de exemplu, opt-out-ul NAI)
                        </li>
                      </ul>
                    </p>
                    <h4>7. CONSIMȚĂMÂNTUL</h4>

                    <blockquote>
                      Prin utilizarea site-ului nostru, ești de acord cu
                      politica noastră de confidențialitate.
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Details */}

        {/* Start Back To Top */}
        {/* <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div> */}
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default BlogDetails;
