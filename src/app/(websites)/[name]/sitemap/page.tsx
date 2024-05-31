import SitemapPage from "../_components/sitemap/SitemapPage";



export default async function Page({ params}:any) {

  return (

    <div className="min-h-screen py-6 px-2 flex justify-center">
        <SitemapPage params={params}/>
    </div>
  );
}
