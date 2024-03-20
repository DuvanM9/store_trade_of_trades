import { Rol } from "../enum/rol";

export interface IUserDataBasic {
    email: string;
    password: string;
    passwordConfirm: string;
    rol: Rol;
}