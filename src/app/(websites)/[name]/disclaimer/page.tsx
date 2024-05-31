import DisclaimerPage from "../_components/disclaimer/DisclaimerPage";
import PrivacyPolicy from "../_components/privacy_policy/PrivacyPage";


export default async function Page({ params}:any) {

  return (

    <div className="min-h-screen py-6 px-2 flex justify-center">
        <DisclaimerPage/>
    </div>
  );
}
