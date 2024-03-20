import { ChangeEvent, useEffect, useState } from "react";
import { IProduct } from "../interface/product";
import { getProducService } from "../services/products";
import { IPagination } from "../interface/pagination";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { sendFilter, setTotalPages } from "../store/features/paginator-slice";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { page, size, filter, totalPages } = useSelector(
    (state: any) => state.paginator
  );
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    size: 10,
    filter: "",
    totalPages: 1,
  });
  const dispath = useDispatch();

  const getProduct = async (pagination: IPagination, dis: Dispatch) => {
    try {
      const { data} = await getProducService(pagination);
      dis(setTotalPages(data.totalPages));
      setProducts(data.list);
    } catch (error) {
      console.error(error);
      setProducts([
        {
          title: "Default",
          description: "Product Default",
          price: 200000,
          shipping_price: 0,
          img: "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png",
        },
      ]);
    }
  };

  const searchProducts = (event: ChangeEvent<HTMLInputElement>) => {
    //TODO: Simular la busqueda con un enter para permitir al usuario terminar de escribir
    dispath(sendFilter(event.target.value))
    // if(event.target.value.length > 5){
    // }
  }


  useEffect(() => {
    getProduct(pagination, dispath);
  }, [dispath, pagination]);

  useEffect(() => {
    setPagination({ page, filter, size, totalPages });
  }, [page, filter, size, totalPages]);

  return {
    products,
    searchProducts
  };
};
