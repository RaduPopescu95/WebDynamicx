import React, { Component, useEffect } from "react";

import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";

import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import Header from "../../../components/header/Header";
import Breadcrumb from "../../../components/Breadcrumb";
import { handleGetArticles } from "../../../utils/realtimeUtils";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import useCurrentUrl from "../../../hooks/useCurrentUrl";

export async function getServerSideProps({ params }) {
  // Fetch the data from your database here
  try {
    const arts = await handleGetArticles();

    const articleId = params.slug.split("-")[0];

    // Filter the articles to find the one with the matching id
    const filtered = arts.articlesArray.filter(
      (article) => article.id.toString() === articleId
    );

    // If no articles are found, return the notFound flag to show a 404 page
    if (filtered.length === 0) {
      return { notFound: true };
    }

    // Since filter returns an array and we want the first article
    let article = filtered[0];

    return {
      props: {
        article,
        articles: arts,
      },
      // There is no revalidate key needed for getServerSideProps as it runs on every request
    };
  } catch (err) {
    console.log("error on get server side props...", err);
  }
}

const BlogDetails = ({ article, articles }) => {
  const [isOpen, setIsOpen] = useState(false);
  let currentUrl = useCurrentUrl();

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <React.Fragment>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="og:title" content={article.title} />
        <meta name="og:description" content={article.metaDescription} />
        <meta name="keywords" content={article.metaKeys} />
        <meta property="og:url" content={currentUrl} />
      </Head>
      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      {/* Start Breadcrump Area */}
      {/* Start Breadcrump Area */}
      <Breadcrumb title={article.name} direction={"Blog"} />
      {/* End Breadcrump Area */}
      {/* 
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7"
          data-black-overlay="7"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-single-page-title text-center pt--100">
                  <h2 className="title theme-gradient">
                    The Home of the Future <br /> Could Bebes
                  </h2>
                  <ul className="blog-meta d-flex justify-content-center align-items-center">
                    <li>
                      <FiClock />
                      May 18, 2020
                    </li>
                    <li>
                      <FiUser />
                      NipaBali
                    </li>
                    <li>
                      <FiMessageCircle />
                      15 Comments
                    </li>
                    <li>
                      <FiHeart />
                      Like
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* End Breadcrump Area */}

      {/* Start Blog Details */}
      <div className="rn-blog-details pt--110 pb--70 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-wrapper">
                <div className="inner">
                  {/* This div will render the article content as HTML */}
                  <div
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  ></div>
                  {/* ... other content ... */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Details */}

      {/* Start BLog Comment Form  */}
      {/* <div className="blog-comment-form pb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <h3 className="title mb--40 fontWeight500">Leave a Reply</h3>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="rnform-group">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div className="rnform-group">
                        <input type="email" placeholder="Email" />
                      </div>
                      <div className="rnform-group">
                        <input type="text" placeholder="Website" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="rnform-group">
                        <textarea type="text" placeholder="Comment"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="blog-btn">
                        <a className="rn-button-style--2 btn-solid" href="#"></a>
                        <Link
                          className="rn-button-style--2 btn-solid"
                          href="/blog-details"
                        >
                          <span>SEND MESSAGE</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* End BLog Comment Form  */}

      {/* Start Back To Top */}
      {/* <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div> */}
      {/* End Back To Top */}

      {/* <Footer /> */}
    </React.Fragment>
  );
};
export default BlogDetails;
