import React from "react";
import Header from "../../components/header/Header";
import Breadcrumb from "../../components/Breadcrumb";
import BlogList from "../../components/blog/BlogList";
import { handleGetArticles } from "../../utils/realtimeUtils";
import { useEffect } from "react";
import Head from "next/head";

// This function stays outside of the component because it's specific to Next.js data fetching
export async function getServerSideProps() {
  const articles = await handleGetArticles();
  return {
    props: {
      articles,
    },
  };
}

const Blog = ({ articles }) => {
  useEffect(() => {
    console.log(articles);
  }, []);
  return (
    <>
      <Head>
        <title>Website prezentare, aplicatii mobile, magazin online</title>
        <meta
          name="description"
          content="Servicii creare dezvoltare website de prezentare, magazin online, aplicatii mobile ANDROID / IOS, creare logo / sigla vectoriala, optimizare SEO."
        />
        <meta
          name="keywords"
          content="Creare site, creare magazine online, creare aplicatie mobila, Android, IOS, optimizare SEO, mentenanta site, administrare site, gazduire"
        ></meta>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webappdynamicx.ro/blog" />

        <meta
          property="og:title"
          content="WebAppDynamicx - Dezvoltare Website, Aplicatii Mobile, Magazin
      Online, SEO, logo design, sigla"
        />
        <meta
          property="og:description"
          content="Web App Dynamicx ofera servicii de dezvoltare site, realizare website de prezentare, magazin online, aplicatii mobile ANDROID / IOS, creare logo / sigla vectoriala, optimizare SEO."
        />
      </Head>
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrumb Area */}
      <Breadcrumb title="Blog List" />
      {/* End Breadcrumb Area */}

      {/* Start Blog Area */}
      <div className="rn-blog-area ptb--120 bg_color--1">
        <div className="container">
          <BlogList articles={articles.articlesArray} />
          <div className="row mt--20">
            <div className="col-lg-12">
              {/* Start Pagination Area */}
              {/* End Pagination Area */}
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Area */}

      {/* Start Back To Top */}
      {/* <ScrollToTop showUnder={160}>
        <FiChevronUp />
      </ScrollToTop> */}
      {/* End Back To Top */}

      {/* <Footer /> */}
    </>
  );
};

export default Blog;
