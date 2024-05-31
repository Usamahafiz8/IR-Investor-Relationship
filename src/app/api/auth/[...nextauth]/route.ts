import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";


const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
};


async function fetchUser(email: string, password: string, websiteName:string) {
 
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/website-users?filters[websites][ticker][$eq]=${websiteName}&filters[email][$eq]=${email}&populate=*`,
      {
        cache: "no-store",
        method: "GET",
        headers: headers,
      }
    );
  
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const userData= await response.json();
    console.log(userData)
    const ismatch = await bcrypt.compare(
      password,
      userData?.data[0]?.attributes?.password
    );
    console.log("ismatch flag is === > : ",ismatch)
console.log(userData?.data[0])
    if (ismatch) {
      return userData?.data[0];
    } else {
      return null
    }
  
  } catch (err) {
    console.log(err);
    return null;
  }
}

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" },
        websiteName: { label: "Website Name", type: "text", placeholder: "Website Name" },
      },
      async authorize(credentials: any): Promise<any>{
        // console.log("Authorizing:", credentials);
        if (!credentials) return null;
        const user= await fetchUser(credentials.email, credentials.password, credentials.websiteName);

      return {...user}

      },
      
    }),
    
  ],
  callbacks: {
    session: async ({ session, token , user }:any) => {
      
      session.user.id = token.id as number;
      session.user.email = token.email as string;
      session.user.name = token.name as string;
      session.user.ticker = token.ticker as string;
      session.user.isLogin = true;
      return token;
    },
    jwt: async (obj) => {
     
      try {
        
        // First sign in, called after authorize
        // if (user) {
        //   return {
        //     ...user,
        //   }
        // }

        if(obj.user) {
          let tempUser= obj.user as any;
          
          return {
            id: tempUser?.id,
            email: tempUser?.attributes?.email,
            name: tempUser?.attributes?.name,
            ticker: tempUser?.attributes?.websites?.data[0]?.attributes?.ticker,
            isLogin:true,
            
          }
      }
        return obj.token
      } catch (error) {
        // TODO Log why jwt generation failed
 console.log(error)

        throw error
      }
    },
  },
  // pages: {
  //   signIn: '/auth/signin',  // Modify or remove as per your setup
  // },
  session: {
    strategy: "jwt",
  },
};
const handler = NextAuth(authOptions);

export default authOptions

export { handler as GET, handler as POST };