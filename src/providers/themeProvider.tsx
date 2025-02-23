import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";
import merge from "deepmerge";
import { useColorScheme } from "react-native";
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from "react-native-paper";
import { Colors } from "../constants/colors";
import { PropsWithChildren } from "react";

const customDarkTheme = { ...MD3DarkTheme, colors: Colors.dark };
const customLightTheme = { ...MD3LightTheme, colors: Colors.light };

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const combinedLightTheme = merge(LightTheme, customLightTheme);
const combinedDarkTheme = merge<any, any>(DarkTheme, customDarkTheme);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const paperTheme =
    colorScheme === "dark" ? combinedDarkTheme : combinedLightTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationThemeProvider value={paperTheme}>
        {children}
      </NavigationThemeProvider>
    </PaperProvider>
  );
};
