import axios, { AxiosError } from "axios";

let tokens: { accessToken: string; refreshToken: string } | null = null;

if (typeof window !== "undefined") {
  tokens = JSON.parse(localStorage.getItem("user_tokens")!);
}

export const instance = axios.create({
  baseURL: "",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    authorization: `Bearer ${tokens?.accessToken || ""}`,
  },
});

instance.interceptors.request.use(
  (res) => {
    const token = tokens?.accessToken;

    if (token && res.headers) {
      res.headers["authorization"] = `Bearer ${token}`;
    }
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const config = err.config;
    if (
      window.location.pathname.includes("login") &&
      err.response.status === 401
    ) {
      return Promise.reject(err);
    }

    if (err?.response?.status === 401) {
      //refresh token
      try {
        const token = tokens?.accessToken || "";
        if (!token) return;
        const response = await refreshToken(token);
        if (response?.data?.tokens?.accessToken) {
          config.headers[
            "authorization"
          ] = `Bearer ${response?.data?.tokens?.accessToken}`;
          return instance(config);
        } else {
          localStorage.removeItem("user");
          window.location.pathname = "/login";
        }
      } catch (err) {
        const error = err as AxiosError;
        if (error?.response?.status === 401) {
          localStorage.removeItem("user");
          // Auth component will handle redirection
          // window.location.pathname = "/login";
        }
        return Promise.reject(err);
      }
    }
    return Promise.reject(err);
  }
);

const refreshToken = async (token: string) => {
  console.log("refreshing token...");
  const response = await axios.post(
    ``,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  const newTokens = response.data.data.tokens;

  //setting new tokens to the user storage in session storage
  tokens = { ...newTokens };
  localStorage.setItem("user_tokens", JSON.stringify(tokens));
  return response.data;
};
