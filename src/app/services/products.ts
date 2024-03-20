import axios from "axios";
import { url_products } from "../constants/endpoints";
import { IProduct, IProductUpdated } from "../interface/product";
import { IPagination } from "../interface/pagination";
import { IAPIResponse, IAPIResponsePagination } from "../interface/api-response";

export const getProducService = (
  pagination: IPagination
): Promise<IAPIResponsePagination> => {
  return axios
    .get<IAPIResponsePagination>(
      `${url_products}?page=${pagination.page}&size=${pagination.size}&filter=${pagination.filter}`
    )
    .then((response) => response.data);
};

export const registerProducService = (
  data: IProduct
): Promise<IAPIResponse> => {
  return axios
    .post<IAPIResponse>(url_products, data)
    .then((response) => response.data);
};

export const updateProduService = (
  data: IProductUpdated
): Promise<IAPIResponse> => {
  return axios
    .post<IAPIResponse>(`${url_products}`, data)
    .then((response) => response.data);
};

export const getProductByidService = (id: number): Promise<IAPIResponse> => {
  return axios
    .get<IAPIResponse>(`${url_products}/${id}`)
    .then((response) => response.data);
};

export const deleteProducByidService = (id: number): Promise<IAPIResponse> => {
  return axios
    .delete<IAPIResponse>(`${url_products}/${id}`)
    .then((response) => response.data);
};
