import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const NewsOverview = ({ recentNews, websiteInfo,events,presesntations }: any) => {
  return (
    <section className="flex w-full items-center justify-center bg-white py-16   max-xl:w-3/4 max-lg:w-3/4 lg:w-3/4 xl:w-3/4 xl:pe-1 xxl:px-8">
      <div className="flex flex-col justify-center px-4">
        {/* Recent News */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold">RECENT NEWS</h2>
            <Link
              href={`/${websiteInfo?.attributes?.ticker}/news-events/press-releases`}
              className="flex items-center text-black hover:underline"
            >
              VIEW ALL NEWS <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {recentNews?.data?.map((news: any, index: any) => {
              const formattedDate = new Date(
                news?.attributes?.createdAt,
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                // <Link href={`${pageCount ? "?page=" + pageCount + "&" : "?"}details=${news?.attributes?.title?.replace(/ /g, "-")}/${news?.id}`} key={index} className="border-b pb-4">
                <Link href={`?details=${news?.attributes?.title?.replace(/ /g, "-")}`} key={index} className="border-b pb-4 flex flex-col gap-2">
                  <span className="block text-gray-600">
                    {formattedDate || "-"}
                  </span>
                  <span className="text-lg font-semibold hover:underline">
                    {news?.attributes?.title || "-"}
                  </span>
                  <span className="text-sm">
                    {news?.attributes?.description || "-"}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        {/* Upcoming Events */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold">UPCOMING EVENTS</h2>
            <Link   href={`/${websiteInfo?.attributes?.ticker}/news-events/ir-calendar`} className="flex items-center text-black hover:underline">
              VIEW ALL EVENTS <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {events?.data?.map((news: any, index: any) => {
              const formattedDate = new Date(
                news?.attributes?.createdAt,
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                // <Link href={`${pageCount ? "?page=" + pageCount + "&" : "?"}details=${news?.attributes?.title?.replace(/ /g, "-")}/${news?.id}`} key={index} className="border-b pb-4">
                <Link href={`?details=${news?.attributes?.title?.replace(/ /g, "-")}`} key={index} className="border-b pb-4 flex flex-col gap-2">
                  <span className="block text-gray-600">
                    {formattedDate || "-"}
                  </span>
                  <span className="text-lg font-semibold hover:underline">
                    {news?.attributes?.title || "-"}
                  </span>
                  <span className="text-sm">
                    {news?.attributes?.description || "-"}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        {/* Latest Presentation */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold">LATEST PRESENTATION</h2>
            <Link href={`/${websiteInfo?.attributes?.ticker}/Company-info/presentations`} className="flex items-center text-black hover:underline">
              VIEW ALL PRESENTATIONS <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {presesntations?.data?.map((news: any, index: any) => {
              const formattedDate = new Date(
                news?.attributes?.createdAt,
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                // <Link href={`${pageCount ? "?page=" + pageCount + "&" : "?"}details=${news?.attributes?.title?.replace(/ /g, "-")}/${news?.id}`} key={index} className="border-b pb-4">
                <Link href={news?.attributes?.attachmentLink} key={index} className="border-b pb-4 flex flex-col gap-2">
                  <span className="block text-gray-600">
                    {formattedDate || "-"}
                  </span>
                  <span className="text-lg font-semibold hover:underline">
                    {news?.attributes?.title || "-"}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        {/* Email Alerts */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">EMAIL ALERTS</h2>
          <p className="mb-4 text-gray-600">
            Sign up for email alerts for Press Releases & SEC Filings
          </p>
          <button className="border border-black px-6 py-2 text-black hover:bg-black hover:text-white">
            SIGN UP
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsOverview;
