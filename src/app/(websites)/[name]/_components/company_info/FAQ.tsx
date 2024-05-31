import React from 'react';

const FAQSection = ({FAQ}:any) => {

  return (
    <section className="flex w-full items-center justify-center bg-white py-16   max-xl:w-3/4 max-lg:w-3/4 lg:w-3/4 xl:w-3/4 xl:pe-1 xxl:px-8">
      <div className="px-4 ">
        <div className="flex flex-col gap-3">
        {FAQ?.data[0]?.attributes?.FAQS?.data?.map((faq:any, index:any) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-semibold">{faq.question}</h3>
          <p>{faq.answer}</p>
          {index < FAQ?.data?.attributes?.FAQS?.data?.length - 1 && <hr className="my-4" />}
        </div>
      ))}    
      {!FAQ?.data[0]?.attributes?.FAQS?.data && <div className='pt-20 text-md'  >
      Please check back soon for updates.
    </div> }      
          </div>
          </div>
          </section>
  );
};

export default FAQSection;
