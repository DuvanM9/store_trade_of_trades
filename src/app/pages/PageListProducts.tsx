import { CarouselProducts } from "../components/Products/CarouselProducts";

export const PageListProducts = () => {
  //TODO: se van a pintar 3 carrouseles, uno con servicios otro productos otro con descuentos
  return (
    <div className="container-fluid mt-4 ">
        <CarouselProducts/>
        <CarouselProducts/>
        <CarouselProducts/>
    </div>
  );
};
