import { NextResponse } from "next/server";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  };
  
  async function checkEmail(email) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/email-alerts?filters[email][$eq]=${email}`,
      {
        method: "GET",
        headers: headers,
        cache: "no-cache",
      }
    );
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    // console.log(result);
    return result?.data.length > 0 ? true : false;
  }

  async function createAlert(data) {
    console.log("update user data is =============> : ", data);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/email-alerts`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ data: data }),
        cache: "no-cache",
      }
    );
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log(response);
    return response.json();
  }
  
  
  export async function POST(req, res) {
    // if (req.method !== "POST") {
    //   res.setHeader("Allow", ["POST"]);
    //   return res
    //     .status(405)
    //     .json({ message: `Method ${req.method} not allowed` });
    // }
  
    try {
      const { email,websiteID,name,contactType,notificationType } = await req.json();
      console.log(email,websiteID,name,contactType,notificationType)
      const emailExists = await checkEmail(email);

    if (emailExists) {
      // return res.status(409).json({ message: `already exist`, status: 409 });
      return NextResponse.json({message: "already exist",status: 409},{status: 409})
    }

    const data={
        email: email,
        name: name,
        contactType: contactType,
        notificationType: notificationType,
        website: {
            connect: [websiteID],
          },
      };
    
  
      const response = await createAlert(data);

      
      if (response) {
        return NextResponse.json({message: "created successfully", response,status: 200},{status: 200})
      }
    } catch (error) {
      console.error("Error:", error.message);
      return NextResponse.json({message: "Internal Server Error",status: 500},{status: 500})
    }
  }
  