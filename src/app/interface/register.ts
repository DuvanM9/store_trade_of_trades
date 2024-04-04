import { FormikErrors } from "formik";
import { Rol } from "../enum/rol";
import { notifications } from "../enum/notification";
import { typeDocument } from "../enum/typeDocument";
import { saveProviderService } from "../services/auth";

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
  description_of_comerce: string;
  category: string;
  starting_time: string;
  clousing_time: string;
  nit: string;
  rut: any;
  verification_code: number;
}

export interface IDataAddAddress {
  departament: string;
  city: string;
  neighborhood: string;
  street_type: string;
  street: string;
  number: string;
  phone_contact: string;
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

export interface IDataSetDepartament {
  setValues: (
    values: React.SetStateAction<IDataAddAddress>,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<IDataAddAddress>>;
  values: IDataAddAddress;
}

export interface ISaveProviderService {
  email: string;
  password: string;
  rol: number;
  typeService: string;
  experience: string;
  skills: string[];
  billing_model: string;
  type_notifications: number;
  media: string;
  full_name: string;
  type_document: number;
  number_document: string;
  bank: string;
  account_type: string;
  number_account: string;
  departament: string;
  city: string;
  neighborhood: string;
  street_type: string;
  street: string;
  number: number;
  phone_contact: string;
  apartment_flat?: string;
  additional_references?: string;
}
