import Image from "next/image";
import React from "react";
import Pagination from "../Pagination";
import { FaRss } from "react-icons/fa";

const Presentations = ({ presentations }: any) => {

  return (
    <section className="flex w-full items-center justify-center bg-white py-16   max-xl:w-3/4 max-lg:w-3/4 lg:w-3/4 xl:w-3/4 xl:pe-1 xxl:px-8">
      <div className="px-4 ">
        <div className="flex flex-col gap-3">
          {presentations?.data?.map((item: any, index: any) => {
            const formattedDate = new Date(
              item?.attributes?.createdAt,
            ).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });

            return (
              <div
                key={index}
                className="mb-8 flex flex-col items-start md:flex-row"
              >
                <Image
                  width={500}
                  height={500}
                  style={{ objectFit: "contain" }}
                  src={item?.attributes?.image || ""}
                  alt={item?.attributes?.title}
                  className="mb-4 mr-4 h-32 w-32 object-cover md:mb-0 md:h-48 md:w-48"
                />
                <div>
                  <p className="text-gray-500">{formattedDate}</p>
                  <span className="text-xl text-blue-500 hover:underline">
                    {item?.attributes?.title}
                  </span>
                </div>
              </div>
            );
          })}
            {presentations?.data?.length === 0 && <div className='pt-20 text-md'  >
      Please check back soon for updates.
    </div> }
        </div>
        <div className="mt-8 flex w-full items-center justify-between">
          <Pagination totalPages={presentations?.meta?.pagination?.pageCount} />
          <span className="flex items-center text-black hover:underline">
            {/* News RSS <FaRss className="ml-2" /> */}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Presentations;
