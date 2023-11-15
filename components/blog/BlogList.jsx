import React, { Fragment } from "react";
import BlogContent from "./BlogContent";
import Link from "next/link";
import { color } from "@mui/system";
import Image from "next/image";
import { toUrlSlug } from "../../utils/commonUtils";
import { useEffect } from "react";

const BlogList = ({ articles }) => {
  const PostList = articles.slice(0, 6);

  useEffect(() => {
    console.log(PostList);
  }, []);
  return (
    <Fragment>
      <div className="row">
        {PostList.map((value, i) => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
            <div className="blog blog-style--1">
              <div
                className="thumbnail"
                style={{
                  position: "relative",
                  height: "400px",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <Link
                  href={{
                    pathname: "/blog/[slug]",
                    query: { slug: `${value.id}-${toUrlSlug(value.name)}` },
                  }}
                  as={`/blog/${value.id}-${toUrlSlug(value.name)}`}
                  passHref={false}
                >
                  <Image
                    className="w-100"
                    src={value.image.finalUri}
                    alt={value.title}
                    height={400}
                    width={400}
                    quality={100} // Optionally set the quality of the image
                  />
                </Link>
              </div>

              <div className="content">
                <p className="blogtype">{value.name}</p>
                <h4 className="title" style={{ color: "white" }}>
                  {value.metaDescription}
                </h4>
                <div className="blog-btn">
                  <Link
                    href={{
                      pathname: "/blog/[slug]",
                      query: { slug: `${value.id}-${toUrlSlug(value.name)}` },
                    }}
                    as={`/blog/${value.id}-${toUrlSlug(value.name)}`}
                    passHref={false}
                    className="rn-btn text-white"
                  >
                    Citește mai mult
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default BlogList;
