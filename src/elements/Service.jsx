import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
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
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

const ServiceList = [
  {
    icon: <FiMonitor />,
    title: "Site de prezentare",
    description:
      "Adaugă valoare afacerii tale cu un website de prezentare impecabil și atrage noi clienți prin design-ul atractiv.",
  },
  {
    icon: <FiShoppingCart />,
    title: "Magazin online",
    description:
      "Magazinul tău în mediul online prin care poți comercializa ușor produse printr-o interfață ușor de utilizat.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Optimizare SEO",
    description:
      "Oferim servicii care au ca scop creșterea vizibilității și a traficului organic al unui site în motoarele de căutare, precum Google, Yahoo sau Bing.",
  },
  {
    icon: <FiSmartphone />,
    title: "Dezvoltare aplicații mobile",
    description:
      "Dezvoltarea unei aplicatii mobile reprezinta o investitie de viitor care va imbunatati in mod evident afacerea ta. Aici la WebDynamicx dezvoltăm aplicații mobile pentru Android & IOS adaptate perfect Afacerii tale.",
  },
  {
    icon: <FiEdit />,
    title: "Logo design",
    description:
      "Orice firma are nevoie de o identitate vizuala profesionala. Aceasta consta in realizarea unui logo sau a unei sigle care sa reprezinte numele sau activitatea companiei pe care o reprezinta.",
  },
  {
    icon: <FiSettings />,
    title: "Înregistrare domeniu și găzduire site",
    description:
      "Pentru ca un site sa apara online este necesar un nume de domeniu asociat site-ului si gazduirea acestuia pe un server. Numele site-ului si serverul pe care este gazduit trebuie alese cu grija, de aceea noi va oferim pe langa serviciul de creare site, consultanta in alegerea numelui si serviciile de inregistrare domeniu si gazduire site.",
  },
  {
    icon: <FiTool />,
    title: "Administrare și mentenanță aplicații web și mobile",
    description:
      "Datorită evoluției online-ului, discutăm despre strategii de asigurare a calității pe termen lung a aplicațiilor și nu despre o chestiune 'one time'. WebDynamicx vă asigură permanent buna funcționare a website-ului sau a aplicației mobile și totodată fructifică capacitatea aplicației de a produce profit pentru afacerea ta prin folosirea uneltelor potrivite.",
  },
];
class Service extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <PageHelmet pageTitle="Service" /> */}
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
                    Relația cu fiecare client este foarte importantă pentru noi
                    și continuă mult timp după ce proiectul a luat sfărșit și a
                    intrat în funcțiune. <br />
                    Ne ocupăm de multe lucruri din spatele scenei, astfel încât
                    să nu mai fie nevoie să o faci personal.
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
                  <div className="service service__style--2">
                    <div className="icon">{val.icon}</div>
                    <div className="content">
                      <h3 className="title">{val.title}</h3>
                      <p>{val.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Service Area */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default Service;
