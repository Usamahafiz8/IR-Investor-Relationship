import bcrypt from "bcrypt";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
};

async function getUser(email,websiteName) {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/website-users?filters[websites][ticker][$eq]=${websiteName}&filters[email][$eq]=${email}&populate=*`,
    {
      cache: "no-cache",
      method: "GET",
      headers: headers,
    }
  );
  // console.log(response);
  if (!response.ok) {
    return null;
  }
  return response.json();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  try {
    const { email, password, websiteName } = JSON.parse(req.body);

    const userData = await getUser(email,websiteName);

    const ismatch = await bcrypt.compare(
      password,
      userData?.data[0].attributes.password
    );

    if (ismatch) {
      return res.status(200).json({ message: "User created successfully", status: 200, userData });
    } else {
      return res.status(401).json({ message: "invalid username or password", status: 401, userData, });
    }
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
