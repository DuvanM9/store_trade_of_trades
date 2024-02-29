import { IProduct } from "../interface/product";

export const CardProduct = ({
  img,
  title,
  description,
  price,
  shipping_price,
}: IProduct) => {
  return (
    <div className="col mb-4">
      <div className="card mb-3 card-style">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="row">
            <div className="col">
              <p className="text-muted price-text">{price}</p>
            </div>
            <div className="col">
              <p className="shipping-cost-label mt-2">Costo de envío</p>
              <p className="shipping-cost send-text">{shipping_price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
