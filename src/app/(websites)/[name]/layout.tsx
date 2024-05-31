import localFont from "next/font/local";
import WebsiteHeader from "./_components/layout/Header";
import WebsiteFooter from "./_components/layout/Footer";
import { getWebsite, getWebsitePages } from "./utils/strapiApi";
import Breadcrumb from "./_components/Breadcrumbs";
import HeaderTwo from "./_components/layout/Header_two";
import BannerSection from "./_components/layout/header-two/BannerSection";
import SubMenuSection from "./_components/layout/header-two/SubMenuSection";
import { getServerSession } from "next-auth";
import authOptions  from "../../api/auth/[...nextauth]/route"

export const customFont = localFont({
  src: "../../../../public/assets/fonts/fa-regular-400.ttf",
  variable: "--font-custom",
});
export default async function WebsitesRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
const session = await getServerSession(authOptions)

  return (
    <div className={`${customFont.variable} relative gap-5 `}>
      <div className="flex flex-col items-center justify-center ">
        {/* <WebsiteHeader data={pages?.data} websiteName={params?.name}  /> */}
        {/* <Breadcrumb /> */}
        {/* <WebsiteHeader data={pages?.data} websiteName={params?.name}  /> */}
        <div className="sticky top-0 z-50 w-full">
          <HeaderTwo session={session} />
        </div>
        <div className="w-full">
          <BannerSection />
          <SubMenuSection />
          <div className="">{children}</div>
          <WebsiteFooter
          // data={pages?.data} websiteName={params?.name} customeClass="bd-footer footer-bg mt-8"
          />
          
        </div>
        {/* <GetwebsiteInfo /> */}
      </div>
    </div>
  );
}
