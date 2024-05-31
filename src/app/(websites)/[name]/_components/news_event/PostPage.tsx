import React from "react";
import MarkdownComponent from "../MarkDownStyle";

const PostPage = ({data}:any) => {

  return (
    <section className="flex w-full items-center justify-center bg-white py-16   max-xl:w-3/4 max-lg:w-3/4 lg:w-3/4 xl:w-3/4 xl:pe-1 xxl:px-8">
      <div className="flex flex-col justify-center px-4 gap-4">
        <span className="capitalize text-xl font-medium">
            {data?.attributes?.title || ""}
        </span>
         {/* <div
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: data?.attributes?.content,
                    }}
                  ></div> */}
        {data?.attributes?.content && <MarkdownComponent content={data?.attributes?.content || ""} />}
      </div>
    </section>
  );
};

export default PostPage;
