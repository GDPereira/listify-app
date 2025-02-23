import { Stack } from "expo-router";
import { Dialog } from "../components/dialog";
import { QueryProvider } from "../providers/queryProvider";
import { ThemeProvider } from "../providers/themeProvider";

export default function RootLayout() {
  return (
    <QueryProvider>
      <ThemeProvider>
        <Dialog />
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </ThemeProvider>
    </QueryProvider>
  );
}
