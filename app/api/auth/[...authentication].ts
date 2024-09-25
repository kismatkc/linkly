import NextAuth from "next-auth/next";

export default NextAuth({
  providers: [],
  pages: {
    signIn: "/account",
  },
});
