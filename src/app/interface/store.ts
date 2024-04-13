import { IAppRoutes } from "../store/features/app-routes-slice";
import { IDataRegister } from "../store/features/register-slice";
import { IAuthSlice } from "./auth";
import { IGeneral } from "./general";
import { IPagination } from "./pagination";

export interface IStore {
    paginator: IPagination;
    data_register: IDataRegister;
    general: IGeneral;
    app_router: IAppRoutes;
    auth: IAuthSlice;
}