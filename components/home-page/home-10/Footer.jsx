import Link from "next/link";
import Social from "./Social";

const Footer = () => {
  const footerLinks = [
    {
      title: "Companie",
      links: [
        { label: "Acasa", href: "/" },
        { label: "Preturi", href: "/pages-menu/pricing" },
        { label: "Despre noi", href: "/pages-menu/about-us-v1" },
        { label: "Servicii", href: "/pages-menu/service-v1" },
        { label: "Contact", href: "/blog/blog-v1" },
      ],
      classes: "col-lg-2 col-sm-4 ms-auto mb-30",
    },
    {
      title: "Legalitate",
      links: [
        {
          label: "Politica confidentialitate",
          href: "/politica-confidentialitate",
        },
        // { label: "Blog", url: "/blog/blog-v1" },
        // { label: "Contact Us", url: "/contact" },
        // { label: "Support", url: "/contact" },
      ],
      classes: "col-lg-3 col-sm-4 mb-30",
    },
  ];

  return (
    <div className="row">
      <div className="col-xl-3 col-lg-2 footer-intro mb-40">
        <div className="logo">
          <Link href="/">
            <img
              src="/images/logo/logo_01.png"
              alt=""
              width={125}
              height={70}
            />
          </Link>
        </div>
        <img
          src="/images/shape/shape_24.svg"
          alt="shape"
          className="mt-60 d-none d-lg-block"
        />
      </div>
      {/* End .col-xl-3 */}

      {footerLinks.map((link, index) => (
        <div key={index} className={link.classes}>
          <h5 className="footer-title tx-dark fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.links.map((linkItem, index) => (
              <li key={index}>
                <Link href={linkItem.href}>{linkItem.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* End menu data */}

      <div className="col-xl-3 col-sm-4 mb-30">
        {/* <h5 className="footer-title tx-dark fw-500">Our Address</h5>
        <p className="fs-17">
          2190 Lojiho Terrace, Mirpur, Equal Licensed in 50 states.
        </p> */}
        <a href="mailto:webdynamicx@gmail.com" className="email tran3s fs-17">
          webdynamicx@gmail.com
        </a>
        <br />
        <a href="tel:0774 550 758" className="mobile tran3s fs-20 mt-20 mb-30">
          0774 550 758
        </a>

        {/* <Social /> */}
      </div>
    </div>
  );
};

export default Footer;
