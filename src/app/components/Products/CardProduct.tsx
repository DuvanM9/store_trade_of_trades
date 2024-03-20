import { IProduct } from "../../interface/product";
import { formatMoney } from "../../utils/pipes";

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
        <img src={img} className="card-img-top" alt="Not img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="row">
            <div className="col">
              <p className="text-muted price-text">{formatMoney(price)}</p>
            </div>
            <div className="col">
              <p className="shipping-cost-label mt-2">Valor Envío</p>
              <p className="shipping-cost send-text">{formatMoney(shipping_price)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
