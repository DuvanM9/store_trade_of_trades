import { IPropsCard } from "../../interface/product";
import { formatMoney } from "../../utils/pipes";

export const CardProduct = ({
  actionCard,
  ...props
}: IPropsCard) => {
  return (
    <div className="col mb-4 mx-1 card-product" onClick={() => actionCard(props)}>
      <div className="card mb-3 card-style">
        <div style={{ maxWidth: "100%" }}> 
          <img src={props.img} className="card-img-top" alt="Not img" style={{ width: "100%", height: "250px" }} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title.length > 18? `${props.title.substring(0, 18)}...`: props.title}</h5>
          <p className="card-text">{props.description.length > 20? `${props.description.substring(0, 20)}...`: props.description}</p>
          <div className="row">
            <div className="col">
              <p className="shipping-cost-label mt-2">Precio</p>
              <p className="text-muted price-text">{formatMoney(props.price)}</p>
            </div>
            <div className="col">
              <p className="shipping-cost-label mt-2">Valor Envío</p>
              <p className="shipping-cost send-text">
                {formatMoney(props.shipping_price)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
