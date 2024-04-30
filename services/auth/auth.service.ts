import { API_URL, axios, axiosInstance } from "../axios";
import { IBaseApiResponse } from "../types";
import { ILoginRequest, IUser } from "./auth.interface";

/**
 * Service class for handling authentication-related API requests.
 * If any of the requests yields a response of type @type {IBaseApiResponse} without a specified generic, the API solely provides a message string in the response.
 * @class
 */
class AuthService {
  /**
   * The base URL for authentication-related API endpoints.
   * @private
   * @type {string}
   */
  private authUrl!: string;

  /**
   * Constructor for the AuthService class.
   *
   * @constructor
   * @param {string} baseURL - The base URL for the API.
   */
  constructor(baseURL: string) {
    this.authUrl = `${baseURL}/auth`;
  }

  /**
   * Method to send a sign-in request.
   *
   * @async
   * @method
   * @param {ILoginRequest} data - The login request data.
   * @returns {Promise<IBaseApiResponse<IUser>>} - The API response with user data.
   */
  public async signin(data: ILoginRequest) {
    return await axios.post<IBaseApiResponse<IUser>>(
      `${this.authUrl}/sign-in`,
      data,
      { withCredentials: true }
    );
  }

  /**
   * Method to send a sign-out request.
   *
   * @async
   * @method
   * @returns {Promise<void>} - The API response.
   */
  public async signout() {
    return await axiosInstance.post(`${this.authUrl}/sign-out`);
  }
}

export const authService = new AuthService(API_URL);
