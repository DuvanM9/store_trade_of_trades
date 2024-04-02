import { IDataRegister } from "../store/features/register-slice";
import { IGeneral } from "./general";
import { IPagination } from "./pagination";

export interface IStore {
    paginator: IPagination,
    data_register: IDataRegister,
    general: IGeneral
}