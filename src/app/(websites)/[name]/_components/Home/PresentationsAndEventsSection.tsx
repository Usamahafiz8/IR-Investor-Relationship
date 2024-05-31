import Link from "next/link";
import { FaArrowRight, FaCalendarPlus } from "react-icons/fa";


const PresentationsAndEventsSection = ({
  websiteInfo,
  events,
  presentations,
}: any) => {
  return (
    <div className="grid w-full grid-cols-2 px-2 max-md:grid-cols-1">
      <div className="max-w-full bg-black p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold text-white">
          LATEST PRESENTATION
        </h2>
        {presentations?.data?.map((news: any, index: any) => {
          const formattedDate = new Date(
            news?.attributes?.createdAt,
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return (
            // <Link href={`${pageCount ? "?page=" + pageCount + "&" : "?"}details=${news?.attributes?.title?.replace(/ /g, "-")}/${news?.id}`} key={index} className="border-b pb-4">
            <Link
              href={news?.attributes?.attachmentLink || ""}
              key={index}
              className="flex flex-col gap-2 border-b pb-4"
            >
              <span className="block text-gray-600">
                {formattedDate || "-"}
              </span>
              <span className="text-lg font-semibold hover:underline">
                {news?.attributes?.title || "-"}
              </span>
            </Link>
          );
        })}
        <Link
          href={`/${websiteInfo?.attributes?.ticker}/company-info/presentations`}
          className="flex items-center text-white hover:underline"
        >
          VIEW ALL PRESENTATIONS <FaArrowRight className="ml-2" />
        </Link>
      </div>
      <div className="bg-gray-800 p-8 text-white">
        <h2 className="mb-4 text-3xl font-bold text-white">UPCOMING EVENT</h2>
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
            <span
              key={index}
              className="flex flex-col gap-2 pb-4"
            >
              <span className="block text-gray-600">
                {formattedDate || "-"}
              </span>
              <span className="text-lg font-semibold hover:underline">
                {news?.attributes?.title || "-"}
              </span>
            </span>
          );
        })}
        <div className="flex space-x-4">
          {/* <span className="flex items-center text-white hover:underline">
            ADD TO CALENDAR <FaCalendarPlus className="ml-2" />
          </span> */}
          <Link
            href={`/${websiteInfo?.attributes?.ticker}/news-events/ir-calendar`}
            className="flex items-center text-white hover:underline"
          >
            VIEW ALL EVENTS <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PresentationsAndEventsSection;
