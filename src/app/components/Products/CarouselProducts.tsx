import React from "react";
import { useProducts } from "../../hooks/useProducts";
import { IProduct } from "../../interface/product";
import { CardProduct } from "./CardProduct";
import Slider from "react-slick";

export const CarouselProducts = () => {
  const { products, settings, actionCard } = useProducts();

  return (
      <Slider {...settings}>
        {products.map((product: IProduct, i: number) => (
          <CardProduct key={i} {...product} actionCard={actionCard} />
        ))}
      </Slider>
  );
};
