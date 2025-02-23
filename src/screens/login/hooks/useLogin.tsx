import { LoginValues, postLogin } from "@/src/services/loginData";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";

export const useLogin = () => {
  const router = useRouter();

  const { mutate, isPending, data } = useMutation({
    mutationFn: postLogin,
    onSuccess: () => {
      router.replace("/(authenticated)/(tabs)/home");
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
