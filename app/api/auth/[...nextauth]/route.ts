import { Api } from "@/lib/utils";
import { AxiosResponse } from "axios";
import { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";



const authOptions: NextAuthOptions = {
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
                console.log("user from route", user);

                if (!user) return null
                return user;
            } catch (error) {
                // throw new Error("invlaid email and password")
            }
        },


    }), GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async signIn(params) {

            if (!params) return false;
            if (!(params?.account?.provider)) {
                try {
                    const { email } = params;
                    const userExist = await Api.post("/check-user", { email })
                    return true
                } catch (error) {
                    const response = await Api.post("/create-user", params);

                }
            }

            //@ts-ignore
            const firstName = params.profile?.given_name;
            //@ts-ignore
            const lastName = params.profile?.family_name;

            const email = params.profile?.email;
            const googleId = params.user.id;
            try {


                const userExist = await Api.post("/check-user", { email })

                return true


            } catch (error) {
                const response = await Api.post("/create-user", { firstName, lastName, email, googleId });
                return true
            }

        },
        async jwt({ token, user }) {

            //@ts-ignore
            if (user?.firstName) {
                //@ts-ignore
                token.name = user.firstName

                return token

            }
            return token

        }
    }

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
