import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";

import Faq from "@/components/home-page/home-2/Faq";

import Link from "next/link";
import ProgressBar from "@/components/service-details/ProgressBar";
import Social from "@/components/service-details/Social";
export const metadata = {
  title: "Dezvoltare aplicatii mobile || Web App Dynamicx",
  description: "Agenție de dezvoltare aplicații mobile din Târgoviște. Creăm aplicatii mobile Android si ios/iphone, cu un cod sursă curat și rapid. Soluții optimizate SEO și personalizate pentru afacerea ta.",
  openGraph: {
    title: "Dezvoltare aplicatii mobile || Web App Dynamicx",
    description: "Agenție de dezvoltare aplicații mobile din Târgoviște. Creăm aplicatii mobile Android si ios/iphone, cu un cod sursă curat și rapid. Soluții optimizate SEO și personalizate pentru afacerea ta.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/servicii/dezvoltare-aplicatii-mobile`,
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
    name: `Dezvoltare aplicatii mobile || Web App Dynamicx`,
    // image: product.image,
    description:
      "Agenție de dezvoltare aplicații mobile din Târgoviște. Creăm aplicatii mobile Android si ios/iphone, cu un cod sursă curat și rapid. Soluții optimizate SEO și personalizate pentru afacerea ta.",
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
                  Transformăm ideile tale în aplicații mobile inovative și
                  eficiente
                </div>
                <h1 className="main-title fw-500 tx-dark">
                  Dezvoltare aplicatii mobile
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
                  Dezvoltarea aplicatiilor mobile a devenit esențiala in era
                  digitala actuala
                </h2>
                
                {/* <h3 className="tx-dark mt-100 mb-20 lg-mt-50">
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
                    <li className="current-page">
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
                      <Link href="/servicii/domeniu-gazduire">
                        Domeniu si Gazduire
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* /.service-category */}

                {/* <div className="sidebar-quote mb-20">
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
          <div className="row">
            <div className="col-xl-12 col-lg-12 order-lg-12">
              <div className="service-details-meta ps-lg-5">
         
                <p className="text-lg tx-dark">
                  Ai o idee pentru o aplicație destinată smartphone-urilor sau
                  tabletelor și crezi că va fi un hit? Putem transforma acea
                  idee în realitate rapid și la prețuri accesibile. Livrăm mai
                  mult decât o simplă aplicație mobilă - oferim o experiență
                  completă. Vei beneficia constant de suportul unei echipe
                  dedicate pentru dezvoltarea proiectului tău. Specialiștii
                  noștri au o vastă experiență în dezvoltarea de aplicații
                  mobile pentru diverse dispozitive, incluzând telefoane,
                  tablete sau brățări de fitness.
                </p>
                <img
                  src="/images/media/costaplicatiimobile.svg"
                  alt="dezvoltare aplicatii mobile"
                  className="main-img-meta"
                />
                <p>
                  A avea o aplicație mobilă dedicată afacerii tale este un
                  aspect esențial pe care nu ar trebui să îl neglijezi, având în
                  vedere potențialul imens de generare a veniturilor.
                </p>
                <p>
                  Ca firmă specializată în dezvoltarea de aplicații mobile,
                  oferim servicii de dezvoltare utilizând un framework
                  JavaScript pentru a crea aplicații mobile native eficiente și
                  performante.
                </p>
                <p>
                  Abordăm fiecare proiect cu maximă seriozitate, dar provocările
                  ne stimulează cu adevărat. Odată cu creșterea complexității
                  unui proiect, crește și entuziasmul echipei noastre, unindu-se
                  forțele și ideile pentru a atinge obiectivele propuse.
                </p>
                <div className="mt-50 lg-mt-30">
                  <div className="row gx-xxl-5">
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">
                        Servicii Oferite
                      </h4>
                      <ul className="style-none list-item md-mb-40">
                        <li>
                          Dezvoltare aplicatii IOS: Cream aplicatii native
                          pentru Iphone si Ipad, utilizand cele mai recente
                          tehnologii si ghiduri de design Apple pentru a asigura
                          performante si experiente exceptionale pentru
                          utilizatori
                        </li>
                        <li>
                          Dezvoltare aplicatii Android: Dezvoltam aplicatii
                          native pentru Android, optimizate pentru diverse
                          dispozitive si versiuni ale sistemului de operare,
                          asigurand compatibilitate si functionalitate maxima
                        </li>
                        <li>
                          Dezvoltare aplicatii Hibride: Oferim solutii hibride
                          folosind tehnologi precum React Native, permitand o
                          dezvoltare mai rapida si costuri reduse, fara a
                          compromite calitatea
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <h4 className="sub-title mb-20 tx-dark">Despre Noi</h4>
                      <p className="pe-xxl-5">
                        Echipa noastră este formată din experți cu vastă
                        experiență în dezvoltarea aplicațiilor mobile, atât
                        pentru iOS, cât și pentru Android.
                      </p>
                      <p className="pe-xxl-5">
                        Folosim cele mai noi tehnologii și framework-uri, precum
                        Swift, Kotlin, React Native, Kotlin Multiplatform și
                        Flutter, pentru a asigura performanța și scalabilitatea
                        aplicațiilor.
                      </p>
                      <p className="pe-xxl-5">
                        Oferim servicii de mentenanță și suport continuu pentru
                        a asigura funcționarea optimă a aplicațiilor și pentru a
                        implementa actualizări și îmbunătățiri.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="mt-60 mb-20 lg-mt-30 lg-mb-10">
                  <div className="row gx-xxl-5">
                    <ProgressBar />
                  </div>
                </div> */}
                <h3 className="tx-dark mt-20 mb-20 lg-mt-50">
                  Aplicatii native si hibride
                </h3>
                <p>
                  Există două categorii principale de aplicații mobile, fiecare
                  cu propriile avantaje și dezavantaje. Pe de o parte, avem
                  aplicațiile native, care exploatează funcții esențiale ale
                  dispozitivelor mobile precum camera video sau GPS-ul. Pe de
                  altă parte, sunt aplicațiile axate pe conținut, cum ar fi
                  rețelele sociale. Avem experiență în dezvoltarea ambelor
                  tipuri de aplicații și suntem pregătiți să te sprijinim,
                  indiferent de nevoile tale specifice în domeniul aplicațiilor
                  mobile.
                </p>
                <p>
                  Există două categorii principale de aplicații mobile, fiecare
                  cu propriile avantaje și dezavantaje. Pe de o parte, avem
                  aplicațiile native, care exploatează funcții esențiale ale
                  dispozitivelor mobile precum camera video sau GPS-ul. Pe de
                  altă parte, sunt aplicațiile axate pe conținut, cum ar fi
                  rețelele sociale. Avem experiență în dezvoltarea ambelor
                  tipuri de aplicații și suntem pregătiți să te sprijinim,
                  indiferent de nevoile tale specifice în domeniul aplicațiilor
                  mobile.
                </p>
                <p>
                  Suntem pasionați de dezvoltarea de aplicații mobile și ne
                  entuziasmează utilizarea tehnologiilor noi. Procesul nostru de
                  dezvoltare implică toate departamentele, dovedind astfel că
                  metodele noastre interne și abordările în dezvoltarea
                  aplicațiilor mobile sunt ideale pentru proiectele complexe pe
                  care le întreprindem.
                </p>
                <p>
                  Ne mândrim cu utilizarea celor mai noi tehnologii și
                  metodologii de dezvoltare pentru a asigura că fiecare
                  aplicație este sigură, scalabilă și performantă. De la concept
                  la lansare și mentenanță, suntem alături de tine în fiecare
                  pas al drumului, oferindu-ți soluții personalizate care să
                  răspundă perfect cerințelor tale. Cu Web App Dynamicx, ai
                  partenerul ideal pentru a-ți aduce ideile la viață și a-ți
                  propulsa afacerea în lumea digitală.
                </p>
                <h2 className="tx-dark mt-20 mb-20">
                Soluții Mobile Personalizate pentru Diverse Industrii
                </h2>
                <h3 className="tx-dark mt-20 mb-20">
                Aplicații de Food Ordering
                </h3>
                <img
                  src="/images/media/foodorder.svg"
                  alt="Aplicații de Food Ordering"
                  className="main-img-meta"
                />
                <p>
                Industria alimentară a fost una dintre primele care a profitat de avantajele aplicațiilor mobile. Cu o aplicație personalizată pentru comandarea mâncării, poți oferi clienților tăi o experiență simplificată și intuitivă, fie că este vorba de comenzi la domiciliu sau preluări de la restaurant. Integrarea funcțiilor avansate, cum ar fi urmărirea în timp real a livrării, opțiuni de plată securizate și recomandări bazate pe preferințele utilizatorilor, va crește gradul de satisfacție și loialitate al clienților tăi. Echipa noastră de dezvoltare este pregătită să implementeze soluții personalizate pentru a facilita gestionarea comenzilor, optimizarea proceselor și creșterea veniturilor afacerii tale.


                </p>
              
              
                <h3 className="tx-dark mt-20 mb-20">
                Aplicații de Booking
                </h3>
                <img
                  src="/images/media/saloonboking.svg"
                  alt="Aplicații de Booking"
                  className="main-img-meta"
                />
                <p>
                Aplicațiile de rezervare (booking) au revoluționat modul în care utilizatorii își planifică călătoriile, ieșirile în oraș sau programările la diverse servicii. Fie că ai nevoie de o aplicație pentru rezervări hoteliere, închiriere de mașini sau programări la salonul de înfrumusețare, noi putem dezvolta o soluție completă care să îți automatizeze afacerea și să îmbunătățească interacțiunea cu clienții. Cu funcționalități precum rezervări în timp real, notificări push pentru confirmarea programărilor și integrare cu diverse sisteme de plată, aplicațiile noastre de booking ajută la optimizarea proceselor și la reducerea costurilor operaționale.

                </p>
             
                       <h3 className="tx-dark mt-20 mb-20">
                       Aplicații de E-commerce
                </h3>
                <img
                  src="/images/media/ecommerce.svg"
                  alt="Aplicații de E-commerce"
                  className="main-img-meta"
                />
                <p>
                E-commerce-ul este în continuă creștere, iar o aplicație mobilă dedicată îți poate oferi un avantaj competitiv major pe această piață dinamică. Cu ajutorul unei aplicații mobile de e-commerce, îți poți prezenta produsele într-un mod atractiv, oferi reduceri personalizate și comunica în mod eficient cu clienții. Funcționalitățile avansate, precum căutarea intuitivă, coșul de cumpărături optimizat și suportul pentru multiple metode de plată, sunt esențiale pentru succesul oricărei aplicații de acest tip. Echipa noastră se concentrează pe crearea unor aplicații care nu doar să atragă clienți, ci și să crească rata de conversie și să stimuleze vânzările.
                </p>
                <h3 className="tx-dark mt-20 mb-20">
                De Ce Să Alegi Serviciile Noastre?                </h3>
                <p>
                Experiența noastră în dezvoltarea aplicațiilor mobile ne permite să înțelegem nevoile și provocările fiecărui proiect în parte. Ne asumăm responsabilitatea de a furniza soluții optimizate pentru performanță, securitate și ușurință în utilizare, astfel încât să ne asigurăm că aplicațiile livrate respectă cele mai înalte standarde de calitate. Împreună, putem aduce afacerea ta la următorul nivel prin soluții






</p>
             
                {/* <h3 className="tx-dark mt-100 mb-20 lg-mt-50">
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
