import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { postLogout } from "../services/postLogout";
import { useCookies } from "./useCookies";

export const useLogout = () => {
  const router = useRouter();
  const { clearCookies } = useCookies();

  const { mutate, isPending, data } = useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      clearCookies();
      router.push("/(account)/login");
    },
  });

  const logout = () => {
    return mutate();
  };

  return {
    logout,
    isLoading: isPending,
    data,
  };
};
