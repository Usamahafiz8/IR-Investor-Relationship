import blogs from "@/data/blogs-letest-news";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propsType {
  search: string;
}

const Blogs = ({ search }: propsType) => {
  const filteredBlogs = blogs.filter((blog) =>
    blog.title?.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      {search === " " ? (
        blogs.slice(1, 5).map((item) => (
          <div key={item.id} className="col-lg-12">
            <div className="bd-blog p-relative mb-50">
              <div className="bd-blog__thumb-3">
                <Image src={item.img} alt="blog image" />
              </div>
              <div className="bd-blog__content-wrap">
                <div className="bd-blog__content">
                  <div className="bd-blog__content-cat-wrap">
                    <div className="bd-blog__content-cat">
                      <Link href="/blog">
                        <i className="fa-solid fa-tag"></i>{item.tag}
                      </Link>
                    </div>
                    <div className="bd-blog__meta">
                      <Link href="/blog">
                        
                        <span> {item.date} </span>
                        <span>{item.month}</span>
                      </Link>
                    </div>
                  </div>
                  <h4 className="bd-blog__title">
                    <Link href={`/blog-details/${item.id}`}> {item.title} </Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>
          {filteredBlogs.length > 0 ? (
            <>
              {filteredBlogs.map((item) => (
                <div key={item.id} className="col-lg-12">
                  <div className="bd-blog p-relative mb-50">
                    <div className="bd-blog__thumb-3">
                      <Image src={item.img} alt="blog image" />
                    </div>
                    <div className="bd-blog__content-wrap">
                      <div className="bd-blog__content">
                        <div className="bd-blog__content-cat-wrap">
                          <div className="bd-blog__content-cat">
                            <Link href="/blog">
                              <i className="fa-solid fa-tag"></i>BATHROOMS
                            </Link>
                          </div>
                          <div className="bd-blog__meta">
                            <Link href="/blog">
                              
                              <span> {item.date} </span>
                              <span>{item.month}</span>
                            </Link>
                          </div>
                        </div>
                        <h4 className="bd-blog__title">
                          <Link href={`/blog-details/${item.id}`}> {item.title} </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <h2>No Blogs Found {`" ${search} "`} Title </h2>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Blogs;
