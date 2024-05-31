import React from 'react'
import MarkdownComponent from "../MarkDownStyle"

const Contacts = ({data}:any) => {
  
  return (
    <section className="flex w-full items-center justify-center bg-white py-16   max-xl:w-3/4 max-lg:w-3/4 lg:w-3/4 xl:w-3/4 xl:pe-1 xxl:px-8">
    <div className="px-4 ">
    <MarkdownComponent content={data?.attributes?.contacts || ""}/>
    </div>
    </section>
  )
}

export default Contacts