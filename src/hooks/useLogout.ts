import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { postLogout } from "../services/postLogout";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLogout = () => {
  const router = useRouter();

  const { mutate, isPending, data } = useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      AsyncStorage.clear();
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
