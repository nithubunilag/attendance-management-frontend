import axios from "axios";

export const API_URL = "";

const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

let retries = 3;

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const LOGIN_ROUTE = "/nitprofile-client/auth/login";

    if (error.response && error.response.status === 401) {
      retries -= 1;

      await fetch(`${API_URL}/auth/refresh-token`, {
        credentials: "include",
      });

      if (retries === 0) {
        window.history.pushState(null, "", LOGIN_ROUTE);

        window.location.replace(LOGIN_ROUTE);

        retries = 3;
      }

      return axiosInstance.request(error.config);
    } else {
      return Promise.reject(error);
    }
  }
);

export { axios, axiosInstance };
