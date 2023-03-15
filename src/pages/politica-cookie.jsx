import React, { Component } from "react";
// import PageHelmet from "../component/common/Helmet";
// import ModalVideo from "react-modal-video";
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import Link from "next/link";
// import PageHelmet from "../common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

class PoliticaCookie extends Component {
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
                    Politică <br /> Cookie
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
                    <p>
                      WebDynamicx îți respectă dreptul la intimitate și la
                      informare. De aceea, odată cu Regulamentul privind
                      Protecția Datelor, reiterăm aici principiile noastre cu
                      privire la utilizarea datelor transmise de tine.
                      <br />
                    </p>
                    <h4>
                      1. Formular de contact / Contact e-mail / Apeluri
                      telefonic
                    </h4>
                    {/* <p>
                      SC DIANYS HOLDING SRL prin prisma website-ului
                      www.diaweb.ro colecteaza informații atunci când se
                      completeza formularul de contact din cadrul sectiunii
                      contact aferenta website-ulul nostru. Informațiile
                      colectate includ numele, adresa de e-mail, numărul de
                      telefon si mesajul transmis.
                    </p> */}
                    <p>
                      Scopul prelucrării datelor / Temeiul juridic: Datele cu
                      caracter personal pe care ni le furnizezi prin completarea
                      formularelor de contact, prin telefon sau prin e-mail sunt
                      tratate în mod confidențial. Utilizăm datele tale cu
                      scopul exclusiv de a prelucra cererea ta. Temeiul juridic
                      pentru prelucrarea datelor este art. 6 alin. (1) lit. (f)
                      din RGPD. Interesul nostru rezultă din dorința de servi
                      interesele și de a răspunde cererilor clienților noștri și
                      ale vizitatorilor acestei pagini de internet, obținând și
                      susținând astfel satisfacția clientului.
                      <br />
                      Destinatari / Categorii de destinatari: Excludem, în mod
                      categoric, o transmitere a datelor către terții din afara
                      firmei WebDynamicx. În cazul în care transmiterea
                      informațiilor cu caracter personal poate fi necesară, te
                      vom informa cu privire la acest lucru și îți vom solicita
                      acordul.
                      <br />
                      Durata de stocare / Criterii pentru stabilirea duratei de
                      stocare: Toate datele cu caracter personal pe care ni
                      le-ai furnizat în cadrul cererilor (sugestii, aprecieri
                      sau critici), prin intermediul acestei pagini de internet
                      sau prin e-mail, sunt șterse de noi cel târziu după 90 de
                      zile de la răspunsul final care ți-a fost oferit,
                      respectiv sunt anonimizate în siguranță. Păstrarea pe o
                      durată de 90 de zile se explică prin faptul că, rareori,
                      se poate întâmpla ca tu, în calitate de client, să ne
                      contactezi din nou în legătură cu un răspuns în aceeași
                      privință, iar noi trebuie să putem consulta corespondența
                      anterioară. Experiența a arătat că, de regulă, după 90 de
                      zile, nu mai apar întrebări referitoare la răspunsurile
                      noastre.
                    </p>
                    <h4>2. Utilizarea modulelor cookie</h4>
                    Pe această pagină web, se utilizează așa-numitele „module
                    cookie“ (fișiere de mici dimensiuni, pe care un server le
                    trimite computerului tău), cu ajutorul cărora se gestionează
                    conexiunea la paginile noastre. În cadrul vizitării paginii
                    noastre, sunt trimise de la serverul nostru web către
                    dispozitivul tău (PC, laptop, smartphone sau tabletă) și
                    acolo sunt salvate în browserul de internet utilizat.
                    Modulele cookie care urmează a fi utilizate pot îndeplini
                    diferite funcții. Următoarele subsecțiuni informează despre
                    scopurile individuale ale diferitelor module cookie care pot
                    fi utilizate. Poți seta browserul, astfel încât acesta să
                    fie informat cu privire la plasarea modulelor cookie.
                    Astfel, utilizarea modulelor cookie devine transparentă
                    pentru tine. În plus, poți seta browserul astfel încât, în
                    general, să nu accepte module cookie sau să nu refuze module
                    cookie de la furnizorii individuali. Totuși, dorim să te
                    informăm că, în anumite circumstanțe, funcționalitatea
                    acestei pagini poate fi afectată.
                    <br />
                    <br />
                    <h6>2.1 Google Conversion Tool</h6>
                    <p>
                      Scopul prelucrării datelor / Temeiul juridic: Această
                      pagină de internet utilizează și Google Conversion Tool
                      pentru analiza internă și anonimă cu privire la
                      eficacitatea anunțurilor lansate. Dacă navighezi pe altă
                      pagină web, pe pagina noastră de internet, în browserul
                      tău se salvează un modul cookie din bannerul publicitar de
                      acolo. Dacă bannerul publicitar se referă la o campanie
                      publicitară comandată de Google, Google salvează modulul
                      cookie corespunzător, dacă se face clic pe bannerul
                      publicitar. Nici partenerul nostru de conversie, nici
                      Thecon nu pot identifica ce alte pagini de internet ai
                      apelat. Nu colectăm și nu primim informații cu ajutorul
                      cărora am putea identifica personal utilizatorul.
                      Informațiile colectate cu ajutorul Conversion Tracking
                      servesc exclusiv la crearea statisticilor cu privire la
                      succesul și utilizarea campaniilor noastre. Aceste module
                      cookie își pierd valabilitatea după 30 de zile. Temeiul
                      juridic pentru această utilizare a tehnologiei modulelor
                      cookie este art. 6 alin. (1) lit. (f) din RGPD. În cazul
                      în care nu dorești să participi la această analiză, poți
                      dezactiva salvarea modulelor cookie, prin setarea din
                      browser.
                    </p>
                    <h6>2.2 Rețea publicitară de display Google</h6>
                    <p>
                      Scopul prelucrării datelor / temeiul juridic: Utilizăm pe
                      paginile noastre de internet și tehnologiile de
                      publicitate de la Google. Modulele cookie sunt utilizate
                      de noi, pentru a recunoaște calculatorul pe alte pagini de
                      internet care fac parte din rețeaua publicitară de display
                      Google, pe baza datelor înregistrate (vizitarea paginii
                      noastre web, inclusiv data și ora, limba preferată și
                      utilizată, tipul browserului, sistemul de operare) și
                      pentru a afișa anunțuri publicitare adaptate posibilelor
                      tale interese. Temeiul juridic pentru această utilizare a
                      tehnologiei modulelor cookie este art. 6 alin. (1) lit.
                      (f) din RGPD. Prin intermediul Managerului de preferințe
                      privind anunțurile de la Google poți vedea, îndepărta sau
                      adăuga categoriile conform cărora îți este afișată, cu
                      ajutorul acestei tehnologii, publicitatea bazată pe
                      interese din întreaga rețea publicitară de display Google.
                      Prin intermediul acestui instrument, poți să te
                      împotrivești în întregime utilizării de module cookie
                      pentru publicitatea bazată pe interese din rețeaua
                      publicitară de display Google, descărcând și instalând
                      insertul de browser pentru dezactivarea modulului cookie
                      pentru referințele privind anunțurile.
                    </p>
                    <h6>2.3 Technologie Facebook Conversion</h6>
                    <p>
                      Scopul prelucrării datelor / temeiul juridic: Pe paginile
                      noastre de internet, utilizăm serviciile „Facebook
                      Conversion Pixel” și „Facebook Remarketing”. Cu ajutorul
                      Facebook Conversion Pixel, putem identifica împreună cu
                      Facebook dacă cineva a făcut clic pe anunțul nostru
                      publicitar de pe Facebook și dacă a fost astfel
                      direcționat spre pagina noastră. Nu putem vedea ce alte
                      pagini de internet ai apelat. Informațiile colectate cu
                      ajutorul Facebook Conversion Pixel servesc la crearea
                      statisticilor cu privire la succesul și utilizarea
                      anunțurilor noastre publicitare de pe Facebook. Nu
                      colectăm și nu primim informații cu ajutorul cărora am
                      putea identifica personal utilizatorul. Prin tehnologia de
                      recomercializare Facebook, utilizatorii care au vizitat
                      paginile noastre de internet pot fi din nou abordați pe
                      paginile de internet de la Facebook, prin publicitatea
                      orientată către scop. Nu colectăm și nu primim informații
                      referitoare la care sunt utilizatorii Facebook cărora le
                      este afișată efectiv publicitatea orientată spre scop.
                      Pentru noi, nu este posibilă aici o identificare a
                      utilizatorilor individuali. Temeiul juridic pentru această
                      prelucrare a datelor este art. 6 alin. (1) lit. f) din
                      RGPD. Informații mai detaliate despre scopurile și nivelul
                      colectărilor și al prelucrărilor datelor tale cu caracter
                      personal prin Facebook, precum și posibilitățile de setare
                      pentru protecția vieții tale private, în cadrul Facebook,
                      găsești în Politica de utilizare a datelor Facebook. Prin
                      intermediul Digital Advertising Alliance în SUA, Digital
                      Advertising Alliance of Canada în Canada, respectiv
                      European Interactive Digital Advertising Alliance în
                      Europa sau prin setările dispozitivului tău, poți efectua
                      o dezactivare, astfel încât să nu ți se mai afișeze
                      anunțuri publicitare online bazate pe interese, de
                      Facebook sau alte întreprinderi participante. Destinatari
                      / Categorii de destinatari: Cu ajutorul Facebook
                      Conversion Pixel, putem identifica împreună cu Facebook
                      dacă cineva a făcut clic pe anunțul nostru publicitar de
                      pe Facebook și dacă a fost astfel direcționat spre pagina
                      noastră. Informațiile generate prin modulul și/sau grafice
                      cu privire la utilizarea acestei pagini sunt transmise
                      către un server Facebook din SUA, unde sunt salvate.
                      Facebook utilizează informațiile obținute astfel pentru a
                      efectua o evaluarea comportamentului tău de utilizare în
                      ceea ce privește anunțurile de pe Facebook. Dacă este
                      necesar, Facebook transmite aceste informații și către
                      terți, în cazul în care acest lucru se impune prin lege
                      sau în măsura în care terții prelucrează aceste date în
                      numele Facebook. Adresa IP nu este asociată de Facebook cu
                      alte date salvate de Facebook.
                    </p>
                    <h4>3. Criptare</h4>
                    <p>
                      Noi luăm măsuri de siguranță tehnice și organizatorice,
                      pentru a proteja cât mai mult datele împotriva accesului
                      neautorizat. Pe lângă asigurarea mediului operațional,
                      utilizăm metode de criptare. Informațiile oferite de tine
                      sunt transmise și verificate în mod automat, în formă
                      criptată, cu ajutorul unui protocol SSL (Secure Socket
                      Layer), pentru a preveni utilizarea abuzivă a datelor de
                      terți. Poți observa faptul că bara de stare a browserului
                      tău conține simbolul lacătului și că linia de adresă
                      începe cu „https…“
                      <br />
                    </p>
                    <h4>4. Drepturile tale ca persoană implicată</h4>
                    <p>
                      Conform art. 15 alin. (1) din RGPD, ai dreptul de a obţine
                      în mod gratuit, la cerere, informaţii despre datele tale
                      cu caracter personal, stocate de Thecon. În plus, în cazul
                      în care există cerinţe legale, ai dreptul de a modifica
                      (art. 16 din RGPD), de a şterge (art. 17 din RGPD) şi de a
                      limita (art. 18 din RGPD) prelucrarea datelor cu caracter
                      personal. În măsura în care prelucrarea datelor se bazează
                      pe art. 6 alin. (1) lit. (e) sau (f) din RGPD, ai la
                      dispoziţie un drept de opozitie, conform art. 21 din RGPD.
                      În măsura în care te opui unei prelucrări a datelor,
                      aceasta nu mai este valabilă pe viitor, exceptând cazul în
                      care operatorul demonstrează ca are motive imperioase care
                      justifică prelucrarea şi care prevalează asupra
                      intereselor, drepturilor şi libertăţilor persoanei vizate.
                      În cazul în care îți dai acordul de prelucrare a datelor,
                      ai la dispoziţie un drept de transfer al datelor, conform
                      art. 20 din RGPD. În măsura în care prelucrarea datelor se
                      bazează pe un consimţământ, conform art. 6 alin. (1) lit.
                      (a) sau art. 9 alin. (2) lit. (a) din RGPD, acesta poate
                      fi oricând revocat, cu efect în viitor, fără ca acest
                      lucru să afecteze legalitatea prelucrării anterioare. În
                      situațiile menţionate anterior, în cazul în care există
                      întrebări deschise sau în cazul reclamaţiilor în scris sau
                      prin e-mail, te rugăm să ne contactezi. În plus, dispui de
                      dreptul de a depune reclamaţii la o autoritate de
                      supraveghere a protecţiei datelor. Autoritatea de
                      supraveghere a protecţiei datelor din ţara în care
                      locuiești sau în care se află sediul persoanei
                      responsabile este competentă în acest sens.
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
                    <h4>5. CONSIMȚĂMÂNTUL</h4>
                    <blockquote>
                      Prin utilizarea site-ului nostru, ești de acord cu
                      politica noastră Cookie.
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
export default PoliticaCookie;
