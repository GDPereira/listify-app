import { useCookies } from "@/src/hooks/useCookies";
import { postSignup, SignupValues } from "@/src/services/signupData";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";

export const useSignup = () => {
  const router = useRouter();
  const { storeCookie } = useCookies();

  const { mutate, isPending, data } = useMutation({
    mutationFn: postSignup,
    onSuccess: ({ cookies }) => {
      storeCookie(cookies?.[0] ?? "");

      router.replace("/(authenticated)/(tabs)");
    },
  });

  const signup = (formValues: SignupValues) => {
    return mutate(formValues);
  };

  return {
    signup,
    isLoading: isPending,
    data,
  };
};
