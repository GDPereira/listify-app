import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const CookieKey = "cookie";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  withCredentials: true,
});

api.interceptors.request.use(async (request) => {
  const cookie = await AsyncStorage.getItem(CookieKey);

  request.headers["cookie"] = cookie;

  return request;
});

export { api };
