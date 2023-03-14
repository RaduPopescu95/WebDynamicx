import React, { Component } from "react";
import {
  FiCast,
  FiLayers,
  FiUsers,
  FiMonitor,
  FiShoppingCart,
  FiTrendingUp,
  FiSmartphone,
  FiEdit,
  FiSettings,
  FiTool,
} from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiMonitor />,
    title: "Site de prezentare",
    description:
      "Adauga valoare afacerii tale cu un website de prezentare impecabil si atrage noi clienti prin design-ul atractiv.",
  },
  {
    icon: <FiShoppingCart />,
    title: "Magazin online",
    description:
      "Magazinul tau în mediul online prin care poti comercializa usor produse printr-o interfata adaptata tuturor dispozitivelor si usor de utilizat.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Optimizare SEO",
    description:
      "Oferim servicii care au ca scop cresterea vizibilitătii si a traficului organic al unui site în motoarele de cautare, precum Google, Yahoo sau Bing.",
  },
  {
    icon: <FiSmartphone />,
    title: "Dezvoltare aplicații mobile",
    description:
      "Dezvoltarea unei aplicatii mobile reprezinta o investitie de viitor care va imbunatati in mod evident afacerea ta. Aici la Web App Dynamicx dezvoltam aplicatii mobile pentru Android & IOS adaptate perfect afacerii tale.",
  },
  {
    icon: <FiEdit />,
    title: "Logo design",
    description:
      "Orice firma are nevoie de o identitate vizuala profesionala.  Aceasta consta in realizarea unei sigle a companiei care vă ajută la creșterea și dezvoltarea afacerii și care sa reprezinte numele sau activitatea companiei dumneavoastra.",
  },
  {
    icon: <FiSettings />,
    title: "Înregistrare domeniu si gazduire site",
    description:
      "Pentru ca un site sa apara online este necesar un nume de domeniu asociat site-ului si gazduirea acestuia pe un server. Numele site-ului si serverul pe care este gazduit trebuie alese cu grija, de aceea noi va oferim pe langa serviciul de creare site, consultanta in alegerea numelui si serviciile de inregistrare domeniu si gazduire site.",
  },
  {
    icon: <FiTool />,
    title: "Administrare si mentenanță aplicatii web si mobile",
    description:
      "Datorita evolutiei online-ului, discutam despre strategii de asigurare a calității pe termen lung a aplicatiilor si nu despre o chestiune 'one time'. Web App Dynamicx va asigura permanent buna functionare a website-ului sau a aplicației mobile si totodata fructifica capacitatea aplicatiei de a produce profit pentru afacerea ta prin folosirea uneltelor potrivite.",
  },
];

class ServiceTwo extends Component {
  render() {
    let title = "Serviciile noastre",
      description =
        "Venim în intampinarea dumneavoastra cu servicii premium oferind un raport calitate pret excelent!";
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="section-title mt--30 mt_md--5 mt_mobile--5 mb_mobile--10">
              <h2 className="title">{title}</h2>
              <p>{description}</p>
              {/* <div className="service-btn">
                <a className="btn-transparent rn-btn-dark" href="/service">
                  <span className="text">Request Custom Service</span>
                </a>
              </div> */}
            </div>
          </div>
          <div
            className="col-lg-8 col-12 mt_md--50"
            style={{
              borderLeft: "1px solid #D3D3D3",
              marginTop: 4,
            }}
          >
            <div className="row service-one-wrapper">
              {ServiceList.map((val, i) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={i}>
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
      </React.Fragment>
    );
  }
}
export default ServiceTwo;
