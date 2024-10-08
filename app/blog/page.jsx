import React from "react";
import DefaulHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import Pagination from "@/components/blog/Pagination";
import SearchBox from "@/components/blog/SearchBox";
import Category from "@/components/blog/Category";
import BannerPost from "@/components/blog/BannerPost";
import Blog2 from "@/components/blog/Blog2";

export const metadata = {
  title: "Grid With Sidebar || Jano - Creative Multipurpose React NextJS Template",
};

const GridWithSidebar = () => {
  return (
    <>
      <DefaulHeader />

      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 lg-mb-40">
                <div className="sc-title-two fst-italic position-relative">Blog</div>
                <h1 className="main-title fw-500 tx-dark">Noutăți și Sfaturi în Dezvoltarea de Aplicații Mobile, Magazine Online și Website-uri</h1>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      <div className="blog-section-five mt-70 lg-mt-30">
        <div className="container">
          <div className="border-bottom pb-130 lg-pb-60">
            <div className="row gx-xl-5">
              <div className="col-lg-8">
                <div className="blog-meta-wrapper pe-xxl-5">
                  <div className="row">
                    <Blog2 />
                  </div>
                </div>
                <div className="page-pagination-one pt-15">
                  <Pagination />
                </div>
              </div>

              <div className="col-lg-4 col-md-8">
                <div className="blog-sidebar md-mt-70">
                  <div className="blog-sidebar-search mb-55 md-mb-40">
                    <SearchBox />
                  </div>

                  <div className="blog-sidebar-category mb-60 md-mb-50">
                    <h4 className="sidebar-title">Category</h4>
                    <Category />
                  </div>

                  <BannerPost
                    backgroundUrl="/images/dezvoltare-aplicatii-mobile.svg"
                    heading="Dezvoltare aplicatii mobile"
                    description="From its medieval origins digital"
                    buttonText="Obtine oferta"
                    buttonUrl="/servicii/dezvoltare-aplicatii-mobile"
                  />
                  <BannerPost
                    backgroundUrl="/images/dezvoltare-magazin-online.svg"
                    heading="Dezvoltare magazine online"
                    description="From its medieval origins digital"
                    buttonText="Obtine oferta"
                    buttonUrl="/servicii/creare-magazin-online"
                    marginTop="mt-20"
                  />
                  <BannerPost
                    backgroundUrl="/images/creare-website.svg"
                    heading="Creare website"
                    description="From its medieval origins digital"
                    buttonText="Obtine oferta"
                    buttonUrl="/servicii/dezvoltare-site-web"
                    marginTop="mt-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DefaultFooter />
    </>
  );
};

export default GridWithSidebar;
