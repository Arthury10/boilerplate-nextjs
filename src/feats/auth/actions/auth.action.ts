import { signIn, signOut } from "@/libs/auth/next-auth";

import {
  responseError,
  responseSuccess,
} from "@/libs/response/response-helper";
import { AuthError } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import { createUser } from "../services/auth.service";
import {
  LoginFormValues,
  signUpFormSchema,
  SignUpFormValues,
} from "../validations/auth.validation";

export async function loginAction(
  _currentState: unknown,
  authData: LoginFormValues
) {
  try {
    await signIn("credentials", authData);
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.cause?.err instanceof Error) {
        return { message: error.cause?.err.message };
      }
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid credentials." };
        default:
          return { message: "Could not sign in." };
      }
    }

    if (isRedirectError(error)) {
      return { message: "Redirect" };
    }

    throw error;
  }
}

export async function logOutAction() {
  await signOut({ redirectTo: "/" });
}

export async function signUpAction(
  _currentState: unknown,
  data: SignUpFormValues
) {
  try {
    const { error } = signUpFormSchema.safeParse(data);
    if (error) {
      return responseError("", error.format());
    }

    const { name, email, password } = data;

    const newUserData = {
      name,
      email,
      password,
    } as const;

    const newUser = await createUser({ ...newUserData });

    return responseSuccess("Successfully created User", newUser);
  } catch (err) {
    if (err instanceof Error) {
      return responseError(err.message);
    }
  }
}
