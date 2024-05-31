import Image from 'next/image';
import React from 'react';
import Pagination from '../Pagination';

const ExecutiveTeam = ({teamMembers}:any) => {
  return (
    <section className="flex w-full items-center justify-center bg-white py-16   max-xl:w-3/4 max-lg:w-3/4 lg:w-3/4 xl:w-3/4 xl:pe-1 xxl:px-8">
    <div className="px-4 ">
      <div className="flex flex-col gap-3"> 
      {teamMembers?.data?.map((member:any, index:any) => (
        <div key={index} className={`flex md:flex-row items-start mb-8 ${index < teamMembers?.data?.length - 1 && "border-b border-gray-500"}`}>
          {member?.attributes?.image && <Image src={member?.attributes?.image || ""} alt={member?.attributes?.name} width={500} height={500} style={{objectFit:'contain'}} className="w-32 h-32 md:w-48 md:h-48 object-cover mr-4 mb-4 md:mb-0" />}
          <div>
            <h3 className="text-2xl font-bold">{member?.attributes?.name}</h3>
            <p className="text-gray-600 italic mb-2">{member?.attributes?.designation}</p>
            <p>{member?.attributes?.about}</p>
          </div>
        </div>
      ))}
        {teamMembers?.data?.length === 0 && <div className='pt-20 text-md'  >
      Please check back soon for updates.
    </div> }
    </div>
    <div className="mt-8 flex w-full items-center justify-between">
          <Pagination totalPages={teamMembers?.meta?.pagination?.pageCount} />
       
        </div>
    </div>
        </section>
  );
};

export default ExecutiveTeam;
