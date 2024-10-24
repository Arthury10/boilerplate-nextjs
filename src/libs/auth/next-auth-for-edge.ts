import config from "@/config";
import { NextAuthConfig } from "next-auth";

const nextAuthEdgeConfig = {
  trustHost: true,
  secret: config.secretKey,
  pages: {
    signIn: "/sign-in",
    newUser: "/sign-up",
  },
  session: {
    maxAge: 30 * 24 * 60 * 60,
    strategy: "jwt",
  },
  providers: [],
  callbacks: {
    authorized: ({ auth, request }) => {
      // Run every request with middleware
      const isLoggedIn = Boolean(auth?.user);
      const pathName = request.nextUrl.pathname;
      const isTryingToAdminRoute = pathName.includes("/dashboard");
      const isTryingToAuthRote =
        pathName.includes("/sign-in") || pathName.includes("/sign-up");

      if (!isLoggedIn && isTryingToAdminRoute) {
        return false;
      }

      if (isLoggedIn && isTryingToAdminRoute) {
        return true;
      }

      if (isLoggedIn && isTryingToAuthRote) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
    jwt: ({ token, user, trigger, session }) => {
      if (user) {
        // When user sign in
        token.userId = user.id as string;
        token.email = user.email as string;
      }

      if (trigger === "signIn") {
        // token.shortLink = user.shortLink;
      }

      if (trigger === "update") {
        // When requesting update
        const shortLink = session.user.shortLink as string;
        if (shortLink) {
          token.shortLink = shortLink;
        }
      }
      return token;
    },
    session: (props) => {
      const { session, token } = props;
      if (session) {
        session.user.id = token.userId as string;
      }

      // if (token.shortLink) {
      //   session.user.shortLink = token.shortLink;
      // }
      return session;
    },
    redirect: async (params) => {
      return "/"; // This can be any URL you want to redirect to
    },
  },
} as NextAuthConfig;

export default nextAuthEdgeConfig;
