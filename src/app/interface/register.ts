import { FormikErrors } from "formik";
import { Rol } from "../enum/rol";

export interface IUserDataBasic {
    email: string;
    password: string;
    passwordConfirm: string;
    rol: Rol;
}

export interface IProviderServiceData {
    typeService: string;
    experience: string;
    skills: string[];
    billing_model: string;
}


export interface IDataSkils {
    setValues: (values: React.SetStateAction<IProviderServiceData>, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<IProviderServiceData>>,
    values: IProviderServiceData
  }