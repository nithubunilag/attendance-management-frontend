export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IEmailOnlyRequest {
  email: string;
}

export type IRole = "ADMIN" | "SUPER ADMIN" | "USER";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  emailVerified: boolean;
  phoneNumberVerified: boolean;
}
