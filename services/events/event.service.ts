import { API_URL, axiosInstance } from "../axios";
import { IBaseApiResponse } from "../types";

import { IEvent } from "./event.interface";

/**
 * Service class for handling authentication-related API requests.
 * If any of the requests yields a response of type @type {IBaseApiResponse} without a specified generic, the API solely provides a message string in the response.
 * @class
 */
class EventService {
  /**
   * The base URL for authentication-related API endpoints.
   * @private
   * @type {string}
   */
  private eventUrl!: string;

  /**
   * Constructor for the AuthService class.
   *
   * @constructor
   * @param {string} baseURL - The base URL for the API.
   */
  constructor(baseURL: string) {
    this.eventUrl = `${baseURL}`;
  }

  /**
   * Method to send a sign-in request.
   *
   * @async
   * @method
   * @param {ILoginRequest} data - The login request data.
   * @returns {Promise<IBaseApiResponse<IUser>>} - The API response with user data.
   */
  public async createEvent(data: any) {
    return await axiosInstance.post<IBaseApiResponse<IEvent>>(
      `${this.eventUrl}/events`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  }
}

export const eventService = new EventService(API_URL);
