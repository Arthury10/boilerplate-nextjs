const config = {
  appName: "Arthur Template",
  apiUrl: process.env.API_GRAPHQL || "",
  domainUrl: "http://localhost:3000",
  domainName: "arthur-template.com",
  defaultUserImage: "/arthur.png",
  secretKey: process.env.NEXTAUTH_SECRET || "arthur-secret",
  meta: {
    defaultMetaImage: "/arthur.png",
    defaultSuffix: "Arthur Template",
  },
  authRoute: {
    loginUrl: "/sign-in",
    callback: "/dashboard",
  },
};

export default config;

export type ConfigType = typeof config;
