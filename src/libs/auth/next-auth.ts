// import sdk from "@/lib/sdk";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth, unstable_update } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // const sdkInstance = await sdk();

        // const res = await sdkInstance.authentication({
        //   credentials: { email, password },
        // });

        // if (!res?.authentication?.token) {
        //   throw new Error("User not found.");
        // }
        const token = Math.random()
          .toString(password?.length + 20)
          .substr(2);

        const user = {
          id: "1",
          fullName: email.split("@")[0],
          email: email,
          token: token,
        };

        return {
          id: user.id,
          token: user.token,
          fullName: user.fullName,
          email: user.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
    newUser: "/sign-up",
  },
  callbacks: {
    jwt: async ({ user, token, trigger, session }) => {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.username = token.username as string;
        session.user.token = token.token as string;
      }
      return session;
    },
  },
});
