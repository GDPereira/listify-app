import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import merge from "deepmerge";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from "react-native-paper";
import { Colors } from "../constants/colors";
import { QueryProvider } from "../providers/queryProvider";
import { Dialog } from "../components/dialog";

const customDarkTheme = { ...MD3DarkTheme, colors: Colors.dark };
const customLightTheme = { ...MD3LightTheme, colors: Colors.light };

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const combinedLightTheme = merge(LightTheme, customLightTheme);
const combinedDarkTheme = merge<any, any>(DarkTheme, customDarkTheme);

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const paperTheme =
    colorScheme === "dark" ? combinedDarkTheme : combinedLightTheme;

  return (
    <QueryProvider>
      <PaperProvider theme={paperTheme}>
        <ThemeProvider value={paperTheme}>
          <Dialog />
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </ThemeProvider>
      </PaperProvider>
    </QueryProvider>
  );
}
