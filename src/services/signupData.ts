import { api } from "../lib/http";

interface SignupResponse {
  success: boolean;
}

export interface SignupValues {
  name: string;
  email: string;
  password: string;
}

export const postSignup = async (values: SignupValues) => {
  const { data, headers } = await api.post<SignupResponse>(
    "/auth/signup",
    values,
  );
  const cookies = headers["set-cookie"];

  return { data, cookies };
};
