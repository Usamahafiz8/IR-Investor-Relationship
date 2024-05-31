import React from "react";

const EmailSection = () => {
  return (
    <div className="bg-black w-full flex justify-center">
      <div className=" flex flex-col items-center justify-between gap-4 p-4 text-white lg:flex-row px-10 lg:mx-3 xl:w-10/12 xl:pe-1 xxl:w-3/4 xxl:px-8">
        <div className="flex flex-col items-center justify-center gap-2 lg:flex-row">
          <span className="font-bold">Email Alerts</span>
          <span className="text-center text-sm">
            Join the newsletter to get the latest 
          </span>
        </div>
        <button className=" border border-white px-6 py-2  hover:bg-white hover:text-red-600">
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default EmailSection;
