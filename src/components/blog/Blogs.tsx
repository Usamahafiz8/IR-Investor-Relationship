import blogs from "@/data/blogs-letest-news";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface propsType {
  search: string;
  customeClass:string;
  start:number
  end:number
}

const Blogs = ({ search,customeClass,start,end }: propsType) => {
  const filteredBlogs = blogs.slice(start, end).filter(blog=> blog.title?.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
      {search === " " ? (
        blogs.slice(start, end).map((item) => (
          <div key={item.id} className={customeClass}>
            <div className="bd-blog-2 d-flex align-items-end mb-30">
              <div className="bd-blog-2__thumb">
                <Image
                  src={item.img}
                  style={{ width: "100%", height: "100%" }}
                  alt="image not found"
                />
              </div>
              <div className="bd-blog-2__content">
                <div className="bd-blog-2__meta">
                  <Link href="/blog">
                    {item.date} <br /> {item.month}
                  </Link>
                </div>
                <h4 className="bd-blog-2__title">
                  <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                </h4>
              </div>
            </div>
          </div>
        ))
      ) : (
        <>{filteredBlogs.length > 0 ?
        
        <>
         
         {
            filteredBlogs.map((item)=>(
                <div key={item.id} className={customeClass}>
            <div className="bd-blog-2 d-flex align-items-end mb-30">
              <div className="bd-blog-2__thumb">
                <Image
                  src={item.img}
                  style={{ width: "100%", height: "100%" }}
                  alt="image not found"
                />
              </div>
              <div className="bd-blog-2__content">
                <div className="bd-blog-2__meta">
                  <Link href="/blog">
                    {item.date} <br /> {item.month}
                  </Link>
                </div>
                <h4 className="bd-blog-2__title">
                  <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                </h4>
              </div>
            </div>
          </div>
            ))
         }
        
        </> : <>
          <h2>No Blogs Found {`" ${search} "`} Title </h2>
        </>}</> 
      )}
    </>
  );
};

export default Blogs;
