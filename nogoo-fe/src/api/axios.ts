import axios, { AxiosError } from "axios";
import { Cookies } from "react-cookie";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
});

const cookies = new Cookies();

instance.interceptors.request.use(
  (config) => {
    const accessToken = cookies.get("access_token");
    const returnConfig = { ...config };
    if (accessToken) {
      returnConfig.headers!["Authorization"] = `Bearer ${accessToken}`;
    }
    return returnConfig;
  },
  (error: AxiosError) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<AxiosError>) => {
    if (axios.isAxiosError(error) && error.response) {
      //   if (
      //     error.response.data.message === "Invalid Token" ||
      //     error.response.data.message === "Token Expired" ||
      //     !cookies.get("access_token") ||
      //     error.response.status === 403
      //   ) {
      //     window.location.href = "/account/login";
      //   }
    }
    return Promise.reject(error);
  }
);
