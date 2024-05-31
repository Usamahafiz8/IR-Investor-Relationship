import { getReportDetail } from '@/utils/strapiApi'
import React from 'react'
import MarkdownComponent from './MarkdownComponent'
interface ReportAttributes {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  content: string;
  website?: object;
  analyst?: object;
}

interface ReportDetail {
  id: number;
  attributes: ReportAttributes;
}


const Details = async ({ ID }: any) => {
  const reportDetails: ReportDetail[] = await getReportDetail(ID);

  if (!reportDetails) {
    return <div>Loading...</div>;
  }

  const { title, description, createdAt, updatedAt, content } = reportDetails[0].attributes;

  return (
    <div className='flex flex-col gap-4'>
      <div className='font-bold'>Report Details</div>
      <div>
        <h2 className='text-xl font-bold'>{title}</h2>
        <p>{description}</p>
        <div className='mt-4'>
              <MarkdownComponent content={content || ""} />
        <p><span className='font-semibold'>Created At:</span> {new Date(createdAt).toLocaleDateString()}</p>
        <p><span className='font-semibold'>Updated At:</span> {new Date(updatedAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
