import { FormikErrors } from "formik";
import { Rol } from "../enum/rol";
import { notifications } from "../enum/notification";
import { typeDocument } from "../enum/typeDocument";

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

export interface INotificationsData {
  type_notifications: notifications;
  media: string;
}

export interface IDataPayment {
  full_name: string;
  type_document: typeDocument;
  number_document: number;
  bank: string;
  account_type: string;
  number_account: number;
}

export interface IDataSkils {
  setValues: (
    values: React.SetStateAction<IProviderServiceData>,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<IProviderServiceData>>;
  values: IProviderServiceData;
}
