import { api } from "../lib/http";

interface LoginResponse {
  success: boolean;
}

export interface LoginValues {
  email: string;
  password: string;
}

export const postLogin = async (values: LoginValues) => {
  const { data, headers } = await api.post<LoginResponse>(
    "/auth/login",
    values,
  );
  const cookies = headers["set-cookie"];

  return { data, cookies };
};
