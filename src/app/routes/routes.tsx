import {
  PageCustomerService,
  PageListProducts,
  PageMayOrder,
  PageOffersOfTheDay,
} from "../pages";
import { CardDetailProduct } from "../components/Products/CardDetailProduct";
import { IRoute } from "../interface/route";
import { Rol } from "../enum/rol";

export const routes: IRoute[] = [
  {
    to: "my-orders",
    path: "my-orders",
    Component: PageMayOrder,
    name: "Mis pedidos",
    isActiveNav: true,
    rol: [Rol.USER, Rol.SERVICE_PROVIDER, Rol.TRADE],
  },
  {
    to: "customer-service",
    path: "customer-service",
    Component: PageCustomerService,
    name: "Servicio al cliente",
    isActiveNav: true,
    rol: [Rol.USER, Rol.SERVICE_PROVIDER, Rol.TRADE],
  },
  {
    to: "offer-of-the-day",
    path: "offer-of-the-day",
    Component: PageOffersOfTheDay,
    name: "Ofertas del día",
    isActiveNav: true,
    rol: [Rol.USER, Rol.SERVICE_PROVIDER, Rol.TRADE],
  },
  {
    to: "product-list",
    path: "product-list",
    Component: PageListProducts,
    name: "Productos",
    isActiveNav: true,
    rol: [Rol.USER, Rol.SERVICE_PROVIDER, Rol.TRADE],
  },
  {
    to: "product-detail",
    path: "product-detail/:product",
    isActiveNav: false,
    Component: CardDetailProduct,
    name: "Detail",
    rol: [Rol.USER, Rol.SERVICE_PROVIDER, Rol.TRADE],
  },
];

export const CreateRoutesByRol = (rol: Rol): IRoute[] => {
  return routes.filter((item) => item.rol.includes(rol));
};
