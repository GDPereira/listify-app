import { useCheckAuth } from "@/src/hooks/useCheckAuth";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native-paper";

export default function AppLayout() {
  const { data, isLoading } = useCheckAuth();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (!data?.data.user) {
    return <Redirect href={"/(account)/login"} />;
  }

  return <Slot />;
}
