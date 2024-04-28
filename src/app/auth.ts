import  type { NextAuthOptions } from "next-auth";
import { MoralisNextAuthProvider } from "@moralisweb3/next";

export const authOptions = {
   providers:[
    MoralisNextAuthProvider()
   ],
   callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.user = user;
        }
        return token;
      },
      async session({ session, token }) {
        (session as { user: unknown }).user = token.user;
        return session;
      },
    },
} satisfies NextAuthOptions