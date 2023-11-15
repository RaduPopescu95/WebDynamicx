import React, { Component } from "react";
// import PageHelmet from "../components/Helmet";
import Breadcrumb from "../../components/Breadcrumb";
import {
  FiCast,
  FiLayers,
  FiUsers,
  FiMonitor,
  FiChevronUp,
  FiShoppingCart,
  FiTrendingUp,
  FiSmartphone,
  FiEdit,
  FiSettings,
  FiTool,
} from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Head from "next/head";
import PageHelmet from "../../components/Helmet";
import Link from "next/link";

const ServiceList = [
  {
    icon: <FiMonitor />,
    title: "Site de prezentare",
    description:
      "Adauga valoare afacerii tale cu un website de prezentare impecabil si atrage noi clienti prin design-ul atractiv.",
    link: "/servicii/site-de-prezentare",
  },
  {
    icon: <FiShoppingCart />,
    title: "Magazin online",
    description:
      "Magazinul tau în mediul online prin care poti comercializa usor produse printr-o interfata adaptata tuturor dispozitivelor si usor de utilizat.",
    link: "/servicii/magazin-online",
  },
  {
    icon: <FiTrendingUp />,
    title: "Optimizare SEO",
    description:
      "Oferim servicii care au ca scop cresterea vizibilitătii si a traficului organic al unui site în motoarele de cautare, precum Google, Yahoo sau Bing.",
    link: "/servicii/optimizare-SEO",
  },
  {
    icon: <FiSmartphone />,
    title: "Dezvoltare aplicații mobile",
    description:
      "Dezvoltarea unei aplicatii mobile reprezinta o investitie de viitor care va imbunatati in mod evident afacerea ta. Aici la Web App Dynamicx dezvoltam aplicatii mobile pentru Android & IOS adaptate perfect afacerii tale.",
    link: "/servicii/dezvoltare-aplicatii-mobile",
  },
  {
    icon: <FiEdit />,
    title: "Logo design",
    description:
      "Orice firma are nevoie de o identitate vizuala profesionala. Aceasta consta in realizarea unui logo sau a unei sigle care sa reprezinte numele sau activitatea companiei pe care o reprezinta.",
    link: "/servicii/logo-design",
  },
  {
    icon: <FiSettings />,
    title: "Înregistrare domeniu si gazduire site",
    description:
      "Pentru ca un site sa apara online este necesar un nume de domeniu asociat site-ului si gazduirea acestuia pe un server. Numele site-ului si serverul pe care este gazduit trebuie alese cu grija, de aceea noi va oferim pe langa serviciul de creare site, consultanta in alegerea numelui si serviciile de inregistrare domeniu si gazduire site.",
    link: "/servicii/domeniu-gazduire",
  },
  {
    icon: <FiTool />,
    title: "Administrare si mentenanță aplicatii web si mobile",
    description:
      "Datorita evolutiei online-ului, discutam despre strategii de asigurare a calității pe termen lung a aplicatiilor si nu despre o chestiune 'one time'. Web App Dynamicx va asigura permanent buna functionare a website-ului sau a aplicației mobile si totodata fructifica capacitatea aplicatiei de a produce profit pentru afacerea ta prin folosirea uneltelor potrivite.",
    link: "/servicii/dezvoltare-aplicatii-mobile",
  },
];
class Service extends Component {
  render() {
    return (
      <div>
        {/* <PageHelmet pageTitle="Servicii" /> */}
        <Head>
          <title>
            Servicii - Web App Dynamicx - Creare website - aplicatii mobile
          </title>
          <meta
            name="description"
            content={
              "Oferim soluții eficace pentru orice tip de business. Dezvoltarea de site-uri de prezentare Performăm în crearea de soluții web, proiectate să impulsioneze vânzările. Construirea de magazine online Livrăm magazine online „la cheie”, optimizate pentru creșterea vânzărilor. Servicii de marketing online Generăm mai mult trafic, creștem numărul de lead-uri și amplificăm rata de conversie. Servicii de optimizare SEO Viziunea noastră de succes este clasarea pe prima pagină a rezultatelor Google."
            }
          />
          <meta
            name="og:title"
            content={
              "Servicii - Web App Dynamicx - Creare website - aplicatii mobile"
            }
          />
          <meta
            name="og:description"
            content={
              "Oferim soluții eficace pentru orice tip de business. Dezvoltarea de site-uri de prezentare Performăm în crearea de soluții web, proiectate să impulsioneze vânzările. Construirea de magazine online Livrăm magazine online „la cheie”, optimizate pentru creșterea vânzărilor. Servicii de marketing online Generăm mai mult trafic, creștem numărul de lead-uri și amplificăm rata de conversie. Servicii de optimizare SEO Viziunea noastră de succes este clasarea pe prima pagină a rezultatelor Google."
            }
          />

          <meta
            property="og:url"
            content={"https://webappdynamicx.ro/servicii"}
          />
        </Head>

        {/* <PageHelmet
          pageTitle="WebAppDynamicx - Dezvoltare Website, Aplicatii Mobile, Magazin Online, SEO, logo design, sigla"
          descriere="Web App Dynamicx ofera servicii de dezvoltare site, realizare website de prezentare, magazin online, aplicatii mobile ANDROID / IOS, creare logo / sigla vectoriala, optimizare SEO."
          facebookType="website"
          facebookTitle="WebAppDynamicx - Dezvoltare Website, Aplicatii Mobile, Magazin
          Online, SEO, logo design, sigla"
          facebookDescription="Web App Dynamicx ofera servicii de dezvoltare site, realizare website de prezentare, magazin online, aplicatii mobile ANDROID / IOS, creare logo / sigla vectoriala, optimizare SEO."
        /> */}
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
          services="services-class"
        />

        {/* Start Breadcrump Area */}
        <Breadcrumb title={"Servicii"} />
        {/* End Breadcrump Area */}

        {/* Start Service Area */}
        <div className="service-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2>Despre noi</h2>
                  <p>
                    Relatia cu fiecare client este foarte importanta pentru noi
                    și continua mult timp dupa ce proiectul a luat sfarsit si a
                    intrat in funcțiune. <br />
                    Ne ocupam de multe lucruri din spatele scenei, astfel încat
                    sa nu mai fie nevoie sa o faci personal.
                  </p>
                </div>
              </div>
            </div>
            <div className="row service-one-wrapper">
              {ServiceList.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <Link
                    href={{
                      pathname: val.link,
                    }}
                    passHref={false}
                  >
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Service Area */}

        {/* Start Back To Top */}
        {/* <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div> */}
        {/* End Back To Top */}

        <Footer />
      </div>
    );
  }
}
export default Service;
