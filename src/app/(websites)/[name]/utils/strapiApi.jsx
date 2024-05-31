const headerOption = {
  "Content-type": "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
};

export async function getWebsite(websiteName = "") {
  try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/websites?filters[ticker][$eq]=${websiteName}&populated=*`,
      {
        method: "GET",
        headers: headerOption,
        cache: "no-store",
      },
    );
    const resopnse = await data.json();
    return resopnse;
  } catch (error) {
    console.log("error while fetching websites", error);
    throw error;
  }
}

export async function getWebsitePages(websiteName) {
  try {
    console.log("api web name", websiteName)
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/pages?filters[website][name][$eq]=${websiteName}&populate=*`,
      {
        method: "GET",
        headers: headerOption,
        cache: "no-store",
      },
    );
    const resopnse = await data.json();
    return resopnse;
  } catch (error) {
    console.log("error while fetching websites", error);
    throw error;
  }
}

export async function getWebsiteSinglePage(websiteName,pageName) {
  try {
    console.log("api web name", websiteName)
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/pages?filters[website][name][$eq]=${websiteName}&[title][$eq]=${pageName}&populate=*`,
      {
        method: "GET",
        headers: headerOption,
        cache: "no-store",
      },
    );
    const resopnse = await data.json();
    return resopnse;
  } catch (error) {
    console.log("error while fetching websites", error);
    throw error;
  }
}

export async function getWebsiteNews( website, currentPage = 1,size=3 ) {
  // console.log("pgeeeeeeeeeeeee", currentPage);
  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/news?filters[website][ticker][$eq]=${website}&populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${size}&sort=id:desc`;
    // console.log("url", url);
    const res = await fetch(url, {
      cache: "no-cache",
      method: "GET",
      headers: headerOption,
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log("err", error);
  }
}

export async function getWebsiteEvents( website, currentPage = 1,size=3 ) {
  // console.log("pgeeeeeeeeeeeee", currentPage);
  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/events?filters[website][ticker][$eq]=${website}&populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${size}&sort=id:desc`;
    // console.log("url", url);
    const res = await fetch(url, {
      cache: "no-cache",
      method: "GET",
      headers: headerOption,
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log("err", error);
  }
}

export async function getWebsitePresentation( website, currentPage = 1,size=3 ) {
  // console.log("pgeeeeeeeeeeeee", currentPage);
  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/presentations?filters[website][ticker][$eq]=${website}&populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${size}&sort=id:desc`;
    // console.log("url", url);
    const res = await fetch(url, {
      cache: "no-cache",
      method: "GET",
      headers: headerOption,
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log("err", error);
  }
}

export async function getSearchWebsiteNews( website, title ) {
  // console.log("pgeeeeeeeeeeeee", currentPage);
  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/news?filters[website][ticker][$eq]=${website}&filters[title][$eq]=${title}&populate=*`;
    // console.log("url", url);
    const res = await fetch(url, {
      cache: "no-cache",
      method: "GET",
      headers: headerOption,
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log("err", error);
  }
}

export async function getSearchWebsiteEvents( website, title ) {
  // console.log("pgeeeeeeeeeeeee", currentPage);
  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/events?filters[website][ticker][$eq]=${website}&filters[title][$eq]=${title}&populate=*`;
    // console.log("url", url);
    const res = await fetch(url, {
      cache: "no-cache",
      method: "GET",
      headers: headerOption,
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log("err", error);
  }
}

export async function getCompanyInfo( website ) {
 
  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/pages?filters[website][ticker][$eq]=${website}&populate=*`;
    // console.log("url", url);
    const res = await fetch(url, {
      cache: "no-cache",
      method: "GET",
      headers: headerOption,
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log("err", error);
  }
}

export async function getCompanyFAQ( website ) {
 
  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/faqs?filters[website][ticker][$eq]=${website}&populate=*`;

    const res = await fetch(url, {
      cache: "no-cache",
      method: "GET",
      headers: headerOption,
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log("err", error);
  }
}

export async function getCompanyExecutiveTeam ( website, currentPage = 1,size=3 ) {
 
  try {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/executive-teams?filters[website][ticker][$eq]=${website}&populate=*&pagination[page]=${currentPage}&pagination[pageSize]=${size}&sort=id:desc`;

    const res = await fetch(url, {
      cache: "no-cache",
      method: "GET",
      headers: headerOption,
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log("err", error);
  }
}


export async function getHistoricalData ( ticker,country ) {
 
  try {
    const url = `https://eodhd.com/api/eod/${ticker}.${country}?api_token=${process.env.EOD_TOKEN}&period=d&sort=date.desc&fmt=json`

    const res = await fetch(url, {
      cache: "no-cache",
      method: "GET",
      headers: headerOption,
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    const result= data.sort((a, b) => new Date(b.date) - new Date(a.date));
    // console.log(result)

    return result;
  } catch (error) {
    console.log("err", error);
  }
}

export async function getUserInfo (websiteName,email) {
 
  try {
    const url =  `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/website-users?filters[websites][ticker][$eq]=${websiteName}&filters[email][$eq]=${email}&populate=*`

    const res = await fetch(url, {
      cache: "no-cache",
      method: "GET",
      headers: headerOption,
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log("err", error);
  }
}
export async function getTickerDetail ( ticker,country ) {
 
  try {
    const url = `https://eodhd.com/api/eod-bulk-last-day/${country}?api_token=${process.env.EOD_TOKEN}&symbols=${ticker}&fmt=json`

    const res = await fetch(url, {
      cache: "no-cache",
      method: "GET",
      headers: headerOption,
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.log("err", error);
  }
}