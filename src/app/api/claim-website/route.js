import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
};

async function createuser(data) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/website-users`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ data: data }),
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

async function claimRequest(data) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/claim-requests`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ data: data }),
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

async function checkUserEmail(email) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/website-users/?filters[email][$eq]=${email}`,
    {
      method: "GET",
      headers: headers,
    },
  );
  console.log(response.ok)
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const result = await response.json();
  console.log(result)
  return result;
}

async function checkUserClaim(userID) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/claim-requests/?filters[website_user][id][$eq]=${userID}`,
    {
      method: "GET",
      headers: headers,
    },
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const result = await response.json();
  return result;
}

async function updateWebsite(data, id) {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/websites/${id}`,
    {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({ data: data }),
    },
  );
  
  console.log("website update",response);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

export async function POST(req, res) {
//   if (req.method !== "POST") {
//     res.setHeader("Allow", ["POST"]);
//     return res
//       .status(405)
//       .json({ message: `Method ${req.method} not allowed` });
//   }

  try {
    const { username, email, websiteID,password } = await req.json();

    const hashedPassword = await bcrypt.hash(
      password,
      await bcrypt.genSalt(10)
    );

    const userData={
      email,
      name:username,
      password: hashedPassword
    }
   
    await createuser(userData)

    const emailExists = await checkUserEmail(email);

    if (!emailExists?.data) {
    //   return res
    //     .status(404)
    //     .json({ message: `No user found with this email`, status: 404 });
  
    return NextResponse.json({ message: `No user found with this email`, status: 404 },{status: 404})
    }
    // const userClaim = await checkUserClaim(emailExists?.data[0]?.id);

    
    // if (userClaim?.data?.length > 0) {
    //   return res.status(409).json({ message: `User already claimed`, status: 409 });
    // }
    
      const userID = emailExists?.data[0]?.id;
   
    const claimInfo = {
      name: username,
      email: email,
      website: {
        connect: [websiteID],
      },
      website_user: {
        connect: [userID],
      },
    };
    
    const websiteInfo = {
      website_user: {
        connect: [userID],
      },
      claimed: true,
    };

    const updateResponse = await updateWebsite(websiteInfo, websiteID);
    
    if (updateResponse) {
      const claimResponse = await claimRequest(claimInfo);
      
      if (claimResponse) {
        // return res.status(200).json({ message: "Successfully requested for claim", status: 200, claimResponse: claimResponse, website: updateResponse });
        return NextResponse.json({ message: "Successfully requested for claim", status: 200, claimResponse: claimResponse, website: updateResponse },{status: 200})
      } else {
        console.log(websiteInfo);
        return NextResponse.json({message: "Internal Server Error",status:500},{status: 500})
      }
    }
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json({message: "Internal Server Error",status:500},{status: 500})
  }
}
