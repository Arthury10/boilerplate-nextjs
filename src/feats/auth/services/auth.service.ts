// import sdk from "@/lib/sdk";
import { CreateUserProps, UpdateUserProps } from "@/generated";

//NOTE: This is a mock function
export const createUser = (user: CreateUserProps) => {
  // const sdkInstance = sdk();

  //NOTE: This is a mock function
  // const response = sdkInstance.createUser(user);

  return user;
};
//
export const updateUser = ({ data, userId }: UpdateUserProps) => {
  // const sdkInstance = sdk();
  //NOTE: This is a mock function
  // const response = sdkInstance.createUser(user);

  return { data, userId };
};
