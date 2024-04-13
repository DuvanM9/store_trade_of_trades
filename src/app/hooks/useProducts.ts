import { ChangeEvent, useEffect, useState } from "react";
import { IProduct } from "../interface/product";
import { getProducService } from "../services/products";
import { IPagination } from "../interface/pagination";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { sendFilter, setTotalPages } from "../store/features/paginator-slice";
import { setProductDetail } from "../store/features/product-slice";
import { useNavigate } from "react-router-dom";
import { IStore } from "../interface/store";

const settings = {
  dots: true,
  infinite: false,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { page, size, filter, totalPages } = useSelector(
    (state: IStore) => state.paginator
  );
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    size: 10,
    filter: "",
    totalPages: 1,
  });

  const dispath = useDispatch();
  const navigate = useNavigate();

  const getProduct = async (pagination: IPagination, dis: Dispatch) => {
    try {
      const { data } = await getProducService(pagination);
      dis(setTotalPages(data.totalPages));
      console.log(data.list);
      
      setProducts([
        {
          ID: "445525",
          title: "Default",
          description: "Product Default",
          price: 200000,
          shipping_price: 0,
          img: "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png",
          tags: ["default"],
        },
        ...data.list,
      ]);
    } catch (error) {
      console.error(error);
      setProducts([
        {
          ID: "445525",
          title: "Default",
          description: "Product Default",
          price: 200000,
          shipping_price: 0,
          img: "https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png",
          tags: ["default"],
        },
      ]);
    }
  };

  const actionCard = (product: IProduct) => {
    dispath(setProductDetail(product));
    navigate(`/product-detail/${product.title}`);
  };

  const searchProducts = (event: ChangeEvent<HTMLInputElement>) => {
    //TODO: Simular la busqueda con un enter para permitir al usuario terminar de escribir
    dispath(sendFilter(event.target.value));
    // if(event.target.value.length > 5){
    // }
  };

  useEffect(() => {
    getProduct(pagination, dispath);
  }, [dispath, pagination]);

  useEffect(() => {
    setPagination({ page, filter, size, totalPages });
  }, [page, filter, size, totalPages]);

  return {
    products,
    settings,
    searchProducts,
    actionCard,
  };
};
