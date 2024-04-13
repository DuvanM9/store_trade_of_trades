import { useParams } from "react-router-dom";

export const CardDetailProduct = () => {
  const params = useParams();

  //TODO: TARJETA CON DETALLES DE PRODUCTO
  //TODO: FUNCIONES : AGREGAR AL CARRITO, COMPRAR, PREGUNTAR

  return <div>{params.product}</div>;
};
