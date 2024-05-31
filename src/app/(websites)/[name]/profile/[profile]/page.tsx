import ProfilePage from "../../_components/Profile/ProfilePage";
import { getUserInfo } from "../../utils/strapiApi";

export default async function Page({ params, searchParams }:any) {

    const user = await getUserInfo(params?.name?.toUpperCase(),searchParams?.email); 
    
    return (
      <>
        {user && <ProfilePage data={user?.data[0]} />}
      </>
    );
  }