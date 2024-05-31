// pages/api/news.js
import { NextResponse } from "next/server";
import { getAllNews } from "../../../utils/strapiApi"; // Ensure the correct path

export async function POST(req, res) {
//   const { page = 1, limit = 5, search = "" } = req.query;

  try {
    const newsData = await getAllNews(page, limit, search);

    return NextResponse.json({message: "success",data:newsData.data,status: 200},{status: 200})
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json({message: "Internal Server Error",status: 500},{status: 500})
  }
}
