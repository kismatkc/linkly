import { Api } from "@/lib/utils";
import { AxiosResponse } from "axios";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [CredentialsProvider({
        name: "credentials",
        credentials: {
            email: { label: "Email", type: "email", placeholder: "you@example.com" },
            password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
            if (!credentials) {
                throw new Error("No credential provided")
            }
            try {
                const response: AxiosResponse = await Api.post("/authenticate-user", {
                    email: credentials.email,
                    password: credentials.password
                })
                const user = response.data.user
                console.log("user from route",user);
                
                if (!user) return null
                return user;
            } catch (error) {
                throw new Error("invlaid email and password")
            }
        },


    })],
    session: {
        strategy: "jwt"
    },

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }