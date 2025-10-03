import CredentialsProvider from "next-auth/providers/credentials";
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
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password
                        })
                    })
                    console.log("Response From Backend", res);
                    if (!res.ok) {
                        console.log("login faild", await res.text());
                        return null
                    }

                    const user = await res.json();
                    
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                    };

                } catch (error) {
                    console.log(error)
                    return null
                }
            }
        })
    ],
    secret: process.env.AUTH_SECRET,
    pages: {
        signIn: "/login"
    }
}



export default authOptions