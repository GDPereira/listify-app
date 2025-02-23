import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  withCredentials: true,
});

api.interceptors.request.use(async (request) => {
  const token = await AsyncStorage.getItem("paseto");

  request.headers["cookie"] = `paseto=${token}`;

  return request;
});

export { api };
