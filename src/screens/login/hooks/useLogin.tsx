import { LoginValues, postLogin } from "@/src/services/loginData";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLogin = () => {
  const router = useRouter();

  const { mutate, isPending, data } = useMutation({
    mutationFn: postLogin,
    onSuccess: ({ cookies }) => {
      cookies?.forEach((cookie) => {
        const [key, value] = cookie.split("=");
        const [token] = value.split(";");

        AsyncStorage.setItem(key, token);
      });

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
