import { IRoute } from "../interface/route";
import { Rol } from "../enum/rol";
import {
  FormRegisterDataPayment,
  FormRegisterNotifications,
  FormRegisterProduct,
  FormRegisterProviderService,
  FormRegisterTrade,
  FormRegisterUser,
} from "../components/Auth";
import { FormRegisterAddress } from "../components/Auth/FormRegisterAddress";

export const routes: IRoute[] = [
  {
    to: "register",
    path: "register",
    Component: FormRegisterUser,
    name: "Registro",
    isActiveNav: true,
    icon: <i className="bi bi-person-check-fill"></i>,
    rol: [Rol.TRADE, Rol.SERVICE_PROVIDER, Rol.USER, Rol.N_R],
  },
  {
    to: "register-provider-service",
    path: "register-provider-service",
    Component: FormRegisterProviderService,
    name: "Registrar Provedor de servicios",
    icon: <i className="bi bi-hammer"></i>,
    isActiveNav: true,
    rol: [Rol.SERVICE_PROVIDER],
  },
  {
    to: "register-trade",
    path: "register-trade",
    Component: FormRegisterTrade,
    name: "Registrar comercio",
    icon: <i className="bi bi-shop"></i>,
    isActiveNav: true,
    rol: [Rol.TRADE],
  },
  {
    to: "register-notifications",
    path: "register-notifications",
    Component: FormRegisterNotifications,
    name: "Registrar notificaciones",
    icon: <i className="bi bi-bell-fill"></i>,
    isActiveNav: true,
    rol: [Rol.TRADE, Rol.SERVICE_PROVIDER, Rol.USER],
  },
  {
    to: "payment-data",
    path: "payment-data",
    Component: FormRegisterDataPayment,
    name: "Datos para recibir tus pagos",
    isActiveNav: true,
    icon: <i className="bi bi-credit-card-2-back-fill"></i>,
    rol: [Rol.TRADE, Rol.SERVICE_PROVIDER],
  },
  {
    to: "register-product",
    path: "register-product",
    Component: FormRegisterProduct,
    name: "Registrar productos",
    isActiveNav: true,
    icon: <i className="bi bi-bag-fill"></i>,
    rol: [Rol.TRADE],
  },
  {
    to: "address-information",
    path: "address-information",
    Component: FormRegisterAddress,
    name: "Agregar datos de domicilio",
    isActiveNav: true,
    icon: <i className="bi bi-pin-map-fill"></i>,
    rol: [Rol.TRADE, Rol.SERVICE_PROVIDER, Rol.USER],
  },
];

export const CreateRoutesByRol = (rol: Rol): IRoute[] => {
  return routes.filter((item) => item.rol.includes(rol));
};
