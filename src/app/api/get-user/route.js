import { NextResponse } from "next/server";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
};

async function getUser(email, websiteName) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/website-users?filters[websites][ticker][$eq]=${websiteName}&filters[email][$eq]=${email}&populate=*`,
    {
      cache: "no-cache",
      method: "GET",
      headers: headers,
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

export async function POST(req, res) {
  
  try {
 
    const { email, websiteName } =await req.json();
    const userData = await getUser(email, websiteName);
   
    // res.status(200).json({ data: userData, status: 200 });
    return NextResponse.json({message: "success", data: userData,status: 200},{status: 200})
  } catch (error) {
    console.error("Error:", error.message);
    // res.status(500).json({ message: "Internal Server Error" });
    return NextResponse.json({message: "Internal Server Error",status: 500},{status: 500})
  }
}
