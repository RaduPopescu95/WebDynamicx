import Link from "next/link";

const Footer = () => {
  const footerItems = [
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
    // {
    //   title: "Products",
    //   links: [
    //     { label: "Take the tour", url: "/pages-menu/faq" },
    //     { label: "Live chat", url: "/pages-menu/faq" },
    //     { label: "Self-service", url: "/pages-menu/faq" },
    //     { label: "Social", url: "/pages-menu/faq" },
    //     { label: "Jano Reviews", url: "/pages-menu/faq" },
    //   ],
    //   className: "col-lg-2 col-md-3 col-sm-6 mb-30",
    // },
  ];

  return (
    <>
      {footerItems.map((item, index) => (
        <div key={index} className={item.className}>
          <h5 className="footer-title tx-dark fw-normal">{item.title}</h5>
          <ul className="footer-nav-link style-none">
            {item.links.map((link, i) => (
              <li key={i}>
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer;
