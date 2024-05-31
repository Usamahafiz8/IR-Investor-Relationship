"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import SearchNews from "./SearchNews";
import { AppContextType, BlogsType } from "@/interFace/interFace";
import { getWebsiteNews } from "../../utils/strapiApi";
import { AppContext } from "@/contextApi/AppProvider";

interface NewsAttributes {
  title: string;
  description: string;
  publishedAt: string;
}

interface NewsItem {
  id: number;
  attributes: NewsAttributes;
}

const NewsArea: React.FC = () => {
  const { websiteName } = useContext(
    AppContext,
  ) as AppContextType;
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    const fetchNews = async () => {
      if (websiteName) {
        setLoading(true);
        try {
          const newsData = await getWebsiteNews(websiteName);
          setNews(newsData.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching news:", error);
          setLoading(false);
        }
      }
    };

    fetchNews();
  }, [websiteName]);

  return (
    <>
      <section className="bd-blog-3-sidebar-area x-clip pt-50 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bd-blog-3-sidebar-wrapper mb-60">
                <div className="bd-blog-3-sidebar mb-50">
                  <h5 className="bd-blog-3-sidebar-title">Search</h5>
                  <div className="bd-blog-3-sidebar-content">
                    <div className="bd-blog-3-search">
                      <SearchNews />
                    </div>
                  </div>
                </div>
                <div className="bd-blog-3-sidebar mb-50">
                  <h5 className="bd-blog-3-sidebar-title">Latest News</h5>
                  <div className="bd-blog-3-latest">
                    {loading ? (
                      <p>Loading news...</p>
                    ) : (
                      <ul>
                        {news.map((item) => (
                          <li key={item.id}>
                            <div className="bd-blog-3-latest-content">
                              <div className="bd-blog-3-latest-title-wrap">
                                <div className="bd-blog-3-latest-meta">
                                  <i className="fa-solid fa-calendar-days"></i>
                                  <span>
                                    {new Date(item.attributes.publishedAt).toDateString()}
                                  </span>
                                </div>
                                <h6 className="bd-blog-3-latest-title">
                                  <Link href={`/blog-details/${item.id}`}>
                                    {item.attributes.title}
                                  </Link>
                                </h6>
                              </div>
                              {/* <p>{item.attributes.description}</p> */}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsArea;
