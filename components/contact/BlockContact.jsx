import Image from "next/image";

const BlockContact = () => {
  const addressBlocks = [
    // {
    //   icon: "/images/icon/icon_147.svg",
    //   title: "Adresă",
    //   content: "Târgoviște, Dâmbovița",
    //   delay: "100",
    // },
    {
      icon: "/images/icon/icon_10.svg",
      title: "Apelează-ne",
      content: "Suntem aici pentru proiectul tău",
      link: "tel:0774 550 758",
      delay: "200",
    },
    {
      icon: "/images/icon/icon_148.svg",
      title: "E-mail",
      content: "Trimite un e-mail",
      link: "mailto:webdynamicx@gmail.com",
      delay: "200",
    },
    {
      icon: "/images/icon/icon_149.svg",
      title: "Suport live",
      content: "WhatsApp",
      link: "https://wa.me/40774550758",
      delay: "300",
    },
  ];

  return (
    <div className="row">
      {addressBlocks.map((block, index) => (
        <div
          className="col-md-3"
          key={index}
          data-aos="fade-up"
          data-aos-delay={block.delay}
        >
          <div className="address-block-two text-center mb-40">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
              <Image width={30} height={30} src={block.icon} alt="icon" />
            </div>
            <h5 className="title">{block.title}</h5>
            <p>
              {block.content}
              {block.link && (
                <a
                  href={block.link}
                  className={
                    block.link.includes("tel:") || block.title === "E-mail"
                      ? "call"
                      : "webaddress"
                  }
                >
                  {block.title === "E-mail" ? "Scrie-ne" : block.title === "Suport live" ? "Scrie-ne" : block.link.replace("tel:", "")}
                </a>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlockContact;
