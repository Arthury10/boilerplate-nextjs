import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    email: string;
  }

  interface Session {
    user: {
      role: string;
      username: string;
      token: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    userId: string;
    email: string;
  }
}
