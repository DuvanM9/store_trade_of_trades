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
  number_document: string;
  bank: string;
  account_type: string;
  number_account: string;
}

export interface IDataTrade {
  name_comerce: string;
  description_of_comerce:string;
  category: string;  
  starting_time: string;
  clousing_time: string;
  nit: string;
  rut: any;
  verification_code: number;
}

export interface IDataAddAddress {
  departament:string;
  city: string;
  neighborhood: string;
  street_type: string;    
  street: string;
  number: number;
  phone_contact: number;
  apartment_flat?: string;
  additional_references?: string;
}

export interface IDataSkils {
  setValues: (
    values: React.SetStateAction<IProviderServiceData>,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<IProviderServiceData>>;
  values: IProviderServiceData;
}
