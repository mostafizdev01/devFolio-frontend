import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    console.error("Email or Password missing");
                    return null;
                }

                try {
                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_BASE_API}/user/login`,
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                email: credentials.email,
                                password: credentials.password,
                            }),
                            credentials: "include", // include cookies
                        }
                    );

                    if (!res.ok) {
                        console.error("Login failed:", await res.text());
                        return null;
                    }

                    const user = await res.json();

                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                    };
                } catch (error) {
                    console.error("Authorize error:", error);
                    return null;
                }
            },
        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,

    pages: { signIn: "/login" },

};
