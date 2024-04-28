import { instance } from "./axios";
import {
  LoginType,
  ForgotPasswordPayload
} from "../types/auth";


export const handleLogin = async (payload: LoginType) => {
  await instance.post("", payload);

};

export const forgotPassword = async (payload: ForgotPasswordPayload) => {
  const { data } = await instance.post(
    "",
    payload
  );
  console.log(data);
  return data;
};

