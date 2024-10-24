import { getSdk, Query } from "@/generated";
import { GraphQLClient } from "graphql-request";
import { auth } from "@/libs/auth/next-auth";
import { revalidateTag } from "next/cache";

type NextConfigType = NextFetchRequestConfig | undefined;
type Tags = keyof Query;

type SdkProps = Tags[];

const API_PATH =
  process.env.API_GRAPHQL ?? process.env.NEXT_PUBLIC_API_GRAPHQL ?? "";

const getAuthToken = async () => {
  try {
    const session = await auth();

    if (session?.user?.token) {
      return {
        Authorization: `Bearer ${session.user.token}`,
      };
    }

    return undefined;
  } catch (error) {
    console.error("Failed to get auth token:", error);
    return undefined;
  }
};

const createGraphQLClient = async (
  nextConfig?: NextConfigType
): Promise<GraphQLClient> => {
  const token = await getAuthToken();
  return new GraphQLClient(API_PATH, {
    headers: {
      ...token,
    },
    credentials: "include",
    next: nextConfig,
  });
};

const sdk = async (tags?: SdkProps) => {
  try {
    const client = await createGraphQLClient({
      tags,
    });
    return getSdk(client);
  } catch (error) {
    console.error("Failed to create SDK:", error);
    throw new Error("SDK initialization failed");
  }
};

export default sdk;

export const revalidateRequestByTags = async (tags: SdkProps) => {
  tags.forEach(async (tag) => {
    revalidateTag(tag);
  });
};
