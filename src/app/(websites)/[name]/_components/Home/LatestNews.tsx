import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const LatestNewsSection = ({data,websiteInfo}:any) => {

  return (
    <section className="bg-white py-16">
      <div className=" px-4">
        <h2 className="mb-8 text-3xl font-bold">LATEST NEWS</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {data?.length > 0 && data?.map((news: any, index: any) => {
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
                  
                </Link>
              );
            })}
        </div>
        <div className="mt-8 flex justify-start">
          <Link
            href={`/${websiteInfo?.attributes?.ticker}/news-events/overview`}
            className="flex items-center border border-black px-6 py-2  hover:bg-black hover:text-white"
          >
            VIEW ALL NEWS <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
