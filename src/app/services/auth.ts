import axios from "axios";
import { IAPIResponse } from "../interface/api-response";
import { url_auth } from "../constants/endpoints";
import { ISaveProviderService } from "../interface/register";

export const saveProviderService = (data: ISaveProviderService): Promise<IAPIResponse> => {
  return axios.post<IAPIResponse>(url_auth, data).then((response) => response.data);
};