import Link from "next/link";
import blogPosts from "@/data/blog";
import Image from "next/image";

const Blog = () => {
  return (
    <>
      {blogPosts.slice(0, 5).map((post) => (
        <div
          className={post.id === 5 ? "col-md-12" : "col-md-6"}
          key={post.id}
          data-aos="fade-up"
          data-aos-delay={post.delay}
        >
          <article className="blog-meta-three mb-60 lg-mb-40">
            <figure className="post-img m0">
              <Link href={`/blog/${post.link}`} className="w-100 d-block">
              {post.id != 5 ?   <Image
                  width={380}
                  height={280}
                  src={post.imageSrc}
                  alt="blog"
                  className="lazy-img w-100 tran4s"
                  layout="intrinsic" // Păstrează dimensiunea originală pe desktop

                /> :      <Image
                width={800}
                height={450}
                src={post.imageSrc}
                alt="blog"
                className="lazy-img w-100 tran4s"
                layout="intrinsic" // Păstrează dimensiunea originală pe desktop

              />}
              
                  
              </Link>
            </figure>
            <div className="post-data mt-30">
              <div className="post-date opacity-75 text-uppercase">
                {post.date}
              </div>
              <Link  href={post.id === 5 ? `/contact` : `/blog/${post.link}`} className="mt-10 mb-15">
                <h4 className="tran3s blog-title fw-normal tx-dark">
                  {post.title}
                </h4>
                <p >{post.description}</p>
              </Link>
              <div>
                <Link
                 href={post.id === 5 ? `/contact` : `/blog/${post.link}`}
                  className="read-btn-two fw-500 tran3s"
                >
                  {post.id === 5 ? `Solicită o ofertă gratuit` : `Citește mai mult`}
                </Link>
              </div>
            </div>
          </article>
          {/* /.blog-meta-three */}
        </div>
      ))}
    </>
  );
};

export default Blog;
