import { Redirect, Slot } from "expo-router";

export default function AppLayout() {
  const user = undefined;

  if (!user) {
    return <Redirect href={"/(account)/login"} />;
  }

  return <Slot />;
}
