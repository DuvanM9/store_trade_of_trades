import axios from "axios";
import { url_general } from "../constants/endpoints";
import { IAPIResponse } from "../interface/api-response";

export const getListGeneral = (): Promise<IAPIResponse> => {
  return axios
    .get<IAPIResponse>(`${url_general}/list-general-data`)
    .then((response) => response.data);
};

export const getListCitiesByIdDepartament = (
  dep: string
): Promise<IAPIResponse> => {
  return axios
    .get<IAPIResponse>(`${url_general}/getCitiesByIdDepartament/${dep}`)
    .then((response) => response.data);
};
