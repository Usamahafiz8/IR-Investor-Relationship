const headerOption = {
  "Content-type": "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
};

export async function getAllNews(page, pageSize, searchvalue) {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/news?filters[title][$containsi]=${searchvalue}&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

  try {
    const data = await fetch(url, {
      method: "GET",
      headers: headerOption,
      cache: "no-store",
    });

    const response = await data.json();
    return response;
  } catch (error) {
    console.log("Error while fetching websites News", error);
    throw error;
  }
}

export async function getAllReports(page, pageSize, searchvalue) {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/reports?filters[title][$containsi]=${searchvalue}&populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

  try {
    const data = await fetch(url, {
      method: "GET",
      headers: headerOption,
      cache: "no-store",
    });

    const response = await data.json();
    return response;
  } catch (error) {
    console.log("Error while fetching websites News", error);
    throw error;
  }
}

export async function getAnalyst() {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/analysts?populate=*`;

  try {
    const data = await fetch(url, {
      method: "GET",
      headers: headerOption,
      cache: "no-store",
    });

    const response = await data.json();
    return response.data;
  } catch (error) {
    console.log("Error while fetching websites News", error);
    throw error;
  }
}

export async function getTickersData(searchvalue) {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/websites?filters[ticker][$containsi]=${searchvalue}&populate=*`;

  try {
    const data = await fetch(url, {
      method: "GET",
      headers: headerOption,
      cache: "no-store",
    });

    const response = await data.json();
    return response.data;
  } catch (error) {
    console.log("Error while fetching websites News", error);
    throw error;
  }
}

export async function getReportDetail(ID) {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/reports?filters[id][$eq]=${ID}&populate=*`;
  try {
    const data = await fetch(url, {
      method: "GET",
      headers: headerOption,
      cache: "no-store",
    });

    const response = await data.json();
    return response.data;
  } catch (error) {
    console.log("Error while fetching websites News", error);
    throw error;
  }
}
