
import authOptions from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function ProfileLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {

const session:any = await getServerSession(authOptions)


if(session?.ticker !== params?.name?.toLocaleUpperCase()){
    redirect(`/${params?.name}`)
}

  return (
    <div>
      {children}
    </div>
  );
}
