const columns = [
  {
    title: "Companie",
    links: [
      { label: "Acasa", url: "/" },
      // { label: "Preturi", url: "/pages-menu/pricing" },
      { label: "Despre noi", url: "/despre-noi" },
      // { label: "Servicii", url: "/pages-menu/service-v1" },
      { label: "Contact", url: "/contact" },
    ],
    className: "col-lg-2 col-md-3 col-sm-6 mb-30",
  },
  {
    title: "Servicii",
    links: [
      {
        label: "Aplicatii Mobile",
        url: "/servicii/dezvoltare-aplicatii-mobile",
      },
      {
        label: "Site Web",
        url: "/servicii/dezvoltare-site-web",
      },
      {
        label: "Logo Design",
        url: "/servicii/logo-design",
      },
      {
        label: "Creare Magazin Online",
        url: "/servicii/creare-magazin-online",
      },
      {
        label: "Domeniu si Gazduire",
        url: "/servicii/domeniu-gazduire",
      },
      // { label: "Blog", url: "/blog/blog-v1" },
      // { label: "Contact Us", url: "/contact" },
      // { label: "Support", url: "/contact" },
    ],
    className: "col-lg-2 col-md-3 col-sm-6 mb-30",
  },
  {
    title: "Legalitate",
    links: [
      {
        label: "Politica confidentialitate",
        url: "/politica-confidentialitate",
      },
      // { label: "Blog", url: "/blog/blog-v1" },
      // { label: "Contact Us", url: "/contact" },
      // { label: "Support", url: "/contact" },
    ],
    className: "col-lg-2 col-md-3 col-sm-6 mb-30",
  },
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mb-30" key={index}>
          <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
          <ul className="footer-nav-link style-none">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
