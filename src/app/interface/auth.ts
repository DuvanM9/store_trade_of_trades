import { IUser } from "./user";

export interface IAuthSlice {
    modalLogin: boolean;
    token: string;
    userLogin: IUser
}