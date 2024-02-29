import axios from 'axios';
import {url_products} from '../constants/endpoints'
import { IProduct, IProductUpdated } from '../interface/product';
import { IPagination } from '../interface/pagination';

export const getProducs = (pagination: IPagination) => {
    return axios.get(`${url_products}?page=${pagination.page}&size=${pagination.size}&filter=${pagination.filter}`);
};

export const registerProduc = (data: IProduct) => {
    return axios.post(url_products, data)
};

export const updateProduc = (data: IProductUpdated) => {
    return axios.post(`${url_products}`, data)
};

export const getProductByid = (id: number) => {
    return axios.get(`${url_products}/${id}`)
};

export const deleteProducByid = (id: number) => {
    return axios.delete(`${url_products}/${id}`)
};