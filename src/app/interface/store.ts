import { IDataRegister } from "../store/features/register-slice";
import { IPagination } from "./pagination";

export interface IStore {
    paginator: IPagination,
    data_register: IDataRegister,
}