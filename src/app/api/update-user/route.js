import { NextResponse } from "next/server";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
};

async function updateUser(data, id) {
  // console.log("update user data is =============> : ", data,id);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/website-users/${id}`,
    {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({ data: data }),
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  // console.log(response.status);
  return response.json();
}
async function checkEmail(email) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/website-users/?filters[email][$eq]=${email}`,
    {
      method: "GET",
      headers: headers,
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const result = await response.json();
  // console.log(result);
  return result?.data.length > 0 ? true : false;
}

export async function POST(req, res) {
  // if (req.method !== "POST") {
  //   res.setHeader("Allow", ["POST"]);
  //   return res
  //     .status(405)
  //     .json({ message: `Method ${req.method} not allowed` });
  // }

  try {
    const { name, phone,country, id } = await req.json();
      const userInfo = {
        name,
        phone,
        country
      };
      const userData = await updateUser(userInfo, id);

      // return res.status(200).json({ message: "Successfully updated", userData });
      return NextResponse.json({message: "Successfully updated",userData,status: 200},{status: 200})
    
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json({message: "Internal Server Error",status: 500},{status: 500})
  }
}
