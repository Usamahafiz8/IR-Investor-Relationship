import HomePage from "./_components/Home/index";
import NoteFound from "./_components/NoteFound";
import EventAndNews from "./_components/news_event";
import PostPage from "./_components/news_event/PostPage";
import { getSearchWebsiteNews, getTickerDetail, getWebsite, getWebsiteEvents, getWebsiteNews, getWebsitePresentation, getWebsiteSinglePage } from "./utils/strapiApi";

export default async function Page({ params,searchParams }:any) {
  
  let websiteSearchNews,tickerDetail;

  const website = await getWebsite(params?.name?.toLocaleUpperCase());
  const websiteNews=await getWebsiteNews(params?.name?.toLocaleUpperCase(),1,3)  
  const events = await getWebsiteEvents(params?.name?.toLocaleUpperCase(), 1, 1);
  const presesntations = await getWebsitePresentation(params?.name?.toLocaleUpperCase(), 1, 1);

  if (website?.data[0]?.attributes?.country) {
    tickerDetail = await getTickerDetail(params?.name?.toLocaleUpperCase(),website?.data[0]?.attributes?.country)
  }
  

  if (searchParams?.details) {
    const url = searchParams?.details;
    const name = url.replace(/-/g, " "); // This splits the string into an array at each "/"
    websiteSearchNews = await getSearchWebsiteNews(
      params?.name?.toLocaleUpperCase(),
      name,
    );

  } 


  return (

    <div className="min-h-screen py-6 px-2 flex justify-center">

     {website?.data?.length > 0 ? (
      searchParams?.details ? <PostPage data={websiteSearchNews?.data[0]} /> :
     
     <HomePage websiteNews={websiteNews?.data} events={events} presesntations={presesntations} websiteInfo={website?.data[0] || null} tickerDetail={tickerDetail && tickerDetail[0]} tabName="overview" />
     )
     : <NoteFound/>}
    </div>
  );
}
