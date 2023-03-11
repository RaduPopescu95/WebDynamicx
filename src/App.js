import logo from "./logo.svg";
// import "./App.scss";
import { BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import MainDemo from "./home/MainDemo";
import PageScrollTop from "./component/PageScrollTop";
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import Contact from "./elements/Contact";
import About from "./elements/About";
import PortfolioDetails from "./elements/PortfolioDetails";
import BlogDetails from "./elements/BlogDetails";
import PoliticaCookie from "./elements/PoliticaCookie";
import PricingTable from "./blocks/PricingTable";
import error404 from "./elements/error404";
import CookieConsent, { Cookies } from "react-cookie-consent";

function App() {
  return (
    <>
      <Routes>
        {/* <PageScrollTop> */}

        {/* <div style={{ height: 200, width: 200, backgroundColor: "red" }}></div> */}

        <Route exact path="/" element={<MainDemo />} />

        {/* Element Layot */}
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/service-details" element={<ServiceDetails />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/portfolio-details" element={<PortfolioDetails />} />
        {/* <Route
              exact
              path={`/politica`}
              element={Blog}
            /> */}
        <Route exact path="/politica" element={<BlogDetails />} />
        <Route exact path="/politicacookie" element={<PoliticaCookie />} />

        {/* Blocks Elements  */}
        <Route exact path="/pricing-table" element={<PricingTable />} />

        <Route path="/404" element={<error404 />} />
        <Route element={<error404 />} />
        {/* </PageScrollTop> */}
      </Routes>
      <CookieConsent
        location="bottom"
        buttonText="Ok,mersi"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Acest site folosește cookies. Continuarea navigării implică acceptarea
        lor. Pentru informatii suplimentare, va rugam sa consultati paginile:
        <Link
          style={{
            color: "#0EDDE4",
            marginRight: 10,
            marginLeft: 10,
            textDecoration: "underline",
          }}
          to="/politicacookie"
        >
          Politica de Cookie``
        </Link>
        <Link
          style={{
            color: "#0EDDE4",
            marginRight: 10,
            marginLeft: 10,
            textDecoration: "underline",
          }}
          to="/politica"
        >
          Politica de confidențialitate
        </Link>
        {/* <span style={{ fontSize: "10px" }}>
          This bit of text is smaller :O
        </span> */}
      </CookieConsent>
    </>
  );
}

export default App;
