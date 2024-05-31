import { NextResponse } from "next/server";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  };
  
  async function checkUserExists(email) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/subscribes?filters[email][$eq]=${email}&populate=*`,
      {
        method: "GET",
        headers: headers,
      }
    );

  
    if (!response.ok) {
      throw new Error("Failed to check user existence");
    }
  
    const data = await response.json();
    return data.data.length > 0; // Return true if user exists, false otherwise
  }
  
  async function Subscribe({ name, email, type }) {
    const userExists = await checkUserExists(email);
    if (userExists) {
      throw new Error("User already subscribed");
    }
  
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/subscribes`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          data: {
            name,
            email,
            type,
          },
        }),
      }
    );
  
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  
    return response.json();
  }
  
  export async function POST(req) {
  
    try {
      const { name, email, type } = req.body;
      const newSubs = await Subscribe({ name, email, type });
      // return res
      //   .status(200)
      //   .json({ message: "User subscribed successfully", user: newSubs });
        return NextResponse.json({message: "User subscribed successfully", user:newSubs,status: 200},{status: 200})
    } catch (error) {
      console.error("Error:", error.message);
      let errorMessage = error.message;
      if (error.message === "User already subscribed") {
        errorMessage = "User is already subscribed";
      }
      return NextResponse.json({message: "Internal Server Error",status: 500},{status: 500})
    }
  }
  