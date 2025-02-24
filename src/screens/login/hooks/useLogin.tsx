import { useCookies } from "@/src/hooks/useCookies";
import { LoginValues, postLogin } from "@/src/services/loginData";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";

export const useLogin = () => {
  const router = useRouter();
  const { storeCookie } = useCookies();

  const { mutate, isPending, data } = useMutation({
    mutationFn: postLogin,
    onSuccess: ({ cookies }) => {
      storeCookie(cookies?.[0] ?? "");

      router.replace("/(authenticated)/(tabs)");
    },
  });

  const login = (formValues: LoginValues) => {
    return mutate(formValues);
  };

  return {
    login,
    isLoading: isPending,
    data,
  };
};
