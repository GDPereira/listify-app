import AsyncStorage from "@react-native-async-storage/async-storage";
import { CookieKey } from "../lib/http";

export const useCookies = () => {
  const storeCookie = (cookie: string) => {
    const [token] = cookie.split(";");

    AsyncStorage.setItem(CookieKey, token);
  };

  const clearCookies = () => {
    AsyncStorage.clear();
  };

  return { storeCookie, clearCookies };
};
