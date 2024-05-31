import { NextResponse } from "next/server";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
};

async function updateContent(content, id) {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/websites/${id}`,

    {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({ data: content }),
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  // console.log(response);
  return response.json();
}

// async function getPageData(title, websiteName) {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/pages?filters[title][$eq]=${title}&[website][name][$eq]=${websiteName}&populate=*`,

//     {
//       method: "GET",
//       headers: headers,
//     },
//   );

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }
//   // console.log(response.status);
//   return response.json();
// }

export async function POST(req) {
  // if (req.method !== "POST") {
  //   res.setHeader("Allow", ["POST"]);
  //   return res
  //     .status(405)
  //     .json({ message: `Method ${req.method} not allowed` });
  // }


  try {
    const { content,id } = await req.json();

    console.log(id,content)
    
    const info={
      content: content
    }

    const updateResponse = await updateContent(info, id);
    
    if (updateResponse) {
    //   return res
    //     .status(200)
    //     .json({ message: "updated successfully", status: 200, updateResponse });
    return NextResponse.json({message: "success", updateResponse,status:200},{status: 200})
    }
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json({message: "Internal Server Error",status:500},{status: 500})
  }
}
