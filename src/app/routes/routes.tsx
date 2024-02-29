import { LazyExoticComponent } from "react";
import { PageCustomerService, PageListProducts, PageMayOrder, PageOffersOfTheDay } from "../pages";

type JSXComponent = () => JSX.Element;

export interface IRoute {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  rol: Rol[];
}

enum Rol {
  ADMIN,
  SUPER_USER,
  USER,
}

export const routes: IRoute[] = [
  {
    to: "my-orders",
    path: "my-orders",
    Component: PageMayOrder,
    name: "Mis pedidos",
    rol: [Rol.ADMIN, Rol.USER],
  },
  {
    to: "customer-service",
    path: "customer-service",
    Component: PageCustomerService,
    name: "Servicio al cliente",
    rol: [Rol.ADMIN, Rol.USER],
  },
  {
    to: "offer-of-the-day",
    path: "offer-of-the-day",
    Component: PageOffersOfTheDay,
    name: "Ofertas del día",
    rol: [Rol.ADMIN, Rol.USER],
  },
  {
    to: "product-list",
    path: "product-list",
    Component: PageListProducts,
    name: "Productos",
    rol: [Rol.ADMIN, Rol.USER],
  },
];

export const CreateRoutesByRol = (rol: Rol): IRoute[] => {
  return routes.filter((item) => item.rol.includes(rol));
};
