import { LazyExoticComponent, ReactElement } from "react";
import { Rol } from "../enum/rol";
type JSXComponent = () => JSX.Element;

export interface IRoute {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  isActiveNav: boolean;
  rol: Rol[];
  icon?: ReactElement<any, any>;
}
