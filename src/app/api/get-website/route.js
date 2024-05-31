import { NextRequest,NextResponse } from "next/server";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  };
  
  async function getwebsiteInfo(websiteName) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/websites?filters[ticker][$eq]=${websiteName}&populate=*`,
  
      {
        method: "GET",
        headers: headers,
        cache: "no-store",
      },
    );
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(response);
    return response.json();
  }
  
  export async function POST(req) {
  
    try {
      const { websiteName } = await req.json();
  const response = await getwebsiteInfo(websiteName?.toLocaleUpperCase());
    
      return NextResponse.json({message: "success", response,status: 200},{status: 200})
      
    } catch (error) {
      console.error("Error:", error.message);
      return NextResponse.json({message: "Internal Server Error",status: 500},{status: 500})
    }
  }
  