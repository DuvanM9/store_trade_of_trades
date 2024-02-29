import { CardProduct } from "../components/CardProduct";
import { useProducts } from "../hooks/useProducts";
import { IProduct } from "../interface/product";

export const PageListProducts = () => {
  const { products } = useProducts();
  return (
    <div className="container-fluid mt-4 ">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5">
        {products.map(
          (product: IProduct) => (
            <CardProduct {...product}/>
          )
        )}
      </div>
    </div>
  );
};
