import { IApiHookBaseResponse, IBaseApiResponse } from "@/services/types";
import { IEvent } from "../event.interface";
import { eventService } from "../event.service";
import { useApi } from "@/hooks/useApi";

export const useEventApi: () => IApiHookBaseResponse<any, IEvent> = () => {
  const loginRequest = useApi<IBaseApiResponse<IEvent>, any>((data: any) => {
    return eventService.createEvent(data);
  });

  const handleEvent = async (eventDetails: any) => {
    loginRequest.reset();

    return (await loginRequest.request(
      eventDetails
    )) as IBaseApiResponse<IEvent>;
  };

  return {
    handler: handleEvent,
    data: loginRequest.data,
    error: loginRequest.error,
    loading: loginRequest.loading,
  };
};
