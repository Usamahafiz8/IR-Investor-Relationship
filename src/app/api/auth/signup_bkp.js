import bcrypt from "bcrypt";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
};

async function createUser(data) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/website-users`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ data: data }),
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}
async function checkEmail(email,websiteName) {
  // console.log(email, sourceFrontend);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/website-users?filters[email][$eq]=${email}&filters[websites][name][$eq]=${websiteName}`,
    {
      cache: "no-cache",
      method: "GET",
      headers: headers,
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const result = await response.json();
  // console.log(result);
  return result;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} not allowed` });
  }

  try {

    const { email, password, username,websiteName } = JSON.parse(req.body);

    const hashedPassword = await bcrypt.hash(
      password,
      await bcrypt.genSalt(10)
    );

    const emailExists = await checkEmail(email,websiteName);

    if (emailExists?.data?.length > 0) {
      return res.status(409).json({ message: `user already exist`, status: 409 });
    }

    const userData = await createUser({
      email,
      password: hashedPassword,
      name: username,
    });

    res.status(200).json({ message: "User created successfully", status: 200, userData });

  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
