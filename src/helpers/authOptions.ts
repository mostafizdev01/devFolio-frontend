import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                email: { label: "email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {

                if (!credentials?.email || !credentials.password) {
                    console.error("Email or Password is missing")
                    return null
                }

                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/login`, {
                        method: "POST",
                        headers: {
                            "content--type": "application/json"
                        },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password
                        })
                    })

                    console.log("Response From Backend", res);
                    if(!res.ok){
                        console.log("login faild", await res.text());
                        return null
                    }

                    const user = await res.json();
                    return user
                    
                } catch (error) {
                    console.log(error)
                }
            }
        })
    ],
}

export default NextAuth(authOptions)