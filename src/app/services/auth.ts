import axios from "axios";
import { IAPIResponse } from "../interface/api-response";
import { url_auth } from "../constants/endpoints";
import {
  ILoginDataBasic,
  ISaveProviderService,
  ISaveTrade,
  ISaveUser,
} from "../interface/register";

export const saveProviderService = async (
  data: ISaveProviderService
): Promise<IAPIResponse> => {
  return axios
    .post<IAPIResponse>(`${url_auth}/provider-service`, data)
    .then((response) => response.data);
};

export const saveTradeService = async (
  data: ISaveTrade
): Promise<IAPIResponse> => {
  return axios
    .post<IAPIResponse>(`${url_auth}/trade`, data)
    .then((response) => response.data);
};

export const saveUserService = async (
  data: ISaveUser
): Promise<IAPIResponse> => {
  return axios
    .post<IAPIResponse>(`${url_auth}/user`, data)
    .then((response) => response.data);
};

export const login = async (data: ILoginDataBasic): Promise<IAPIResponse> => {
  return axios
    .post<IAPIResponse>(`${url_auth}/login`, data)
    .then((response) => response.data);
};
