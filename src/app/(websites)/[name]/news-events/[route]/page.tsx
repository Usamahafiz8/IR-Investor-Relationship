import React from "react";
import NewsOverview from "../../_components/news_event/Overview";
import {
  getWebsite,
  getWebsiteNews,
  getSearchWebsiteNews,
  getWebsiteEvents,
  getWebsitePresentation,
  getSearchWebsiteEvents,
} from "../../utils/strapiApi";
import PressRelease from "../../_components/news_event/PressRelease";
import PostPage from "../../_components/news_event/PostPage";
import EventsSection from "../../_components/news_event/EventsSection";

export default async function Page({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const website = await getWebsite(params?.name?.toUpperCase());
  let websiteNews, events, presesntations;

  if (params?.route === "overview") {
    websiteNews = await getWebsiteNews(params?.name?.toLocaleUpperCase(), 1, 2);
    events = await getWebsiteEvents(params?.name?.toLocaleUpperCase(), 1, 2);
    presesntations = await getWebsitePresentation(
      params?.name?.toLocaleUpperCase(),
      1,
      2,
    );
  }
  if (params?.route === "press-releases") {
    if (searchParams?.details) {
      const url = searchParams?.details;
      const name = url.replace(/-/g, " "); // This splits the string into an array at each "/"
      websiteNews = await getSearchWebsiteNews(
        params?.name?.toLocaleUpperCase(),
        name,
      );
    } else {
      websiteNews = await getWebsiteNews(
        params?.name?.toLocaleUpperCase(),
        searchParams?.page || 1,
        4,
      );
    }
  }

  if (params?.route === "ir-calendar") {
    if (searchParams?.details) {
      const url = searchParams?.details;
      const name = url.replace(/-/g, " "); // This splits the string into an array at each "/"
      websiteNews = await getSearchWebsiteEvents(
        params?.name?.toLocaleUpperCase(),
        name,
      );
    } else {
      websiteNews = await getWebsiteEvents(
        params?.name?.toLocaleUpperCase(),
        searchParams?.page || 1,
        2,
      );
    }
  }

  return (
    <div className="flex w-full justify-center">
      {params?.route === "overview" &&
        (searchParams?.details ? (
          <PostPage data={websiteNews?.data[0]} />
        ) : (
          <NewsOverview
            recentNews={websiteNews}
            events={events}
            presesntations={presesntations}
            websiteInfo={website?.data[0]}
          />
        ))}
      {params?.route === "press-releases" &&
        (searchParams?.details ? (
          <PostPage data={websiteNews?.data[0]} />
        ) : (
          <PressRelease
            newsPosts={websiteNews}
            websiteInfo={website?.data[0]}
            pageCount={searchParams?.page}
          />
        ))}

      {params?.route === "ir-calendar" &&
        (searchParams?.details ? (
          <PostPage data={websiteNews?.data[0]} />
        ) : (
          <EventsSection
            data={websiteNews}
            websiteInfo={website?.data[0]}
            pageCount={searchParams?.page}
          />
        ))}
    </div>
  );
}
