import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IDataAddAddress,
  IDataPayment,
  IDataTrade,
  INotificationsData,
  IProviderServiceData,
  IUserDataBasic,
} from "../../interface/register";
import { notifications } from "../../enum/notification";
import { typeDocument } from "../../enum/typeDocument";

export interface IDataRegister {
  stepDataBasic: IUserDataBasic;
  stepDataProviderServive: IProviderServiceData;
  stepDataNotifications: INotificationsData;
  stepDataPayment: IDataPayment;
  stepDataTrade: IDataTrade;
  stepDataAddress: IDataAddAddress;
}

const initialState: IDataRegister = {
  stepDataBasic: {
    email: "",
    password: "",
    passwordConfirm: "",
    rol: 3,
  },
  stepDataProviderServive: {
    typeService: "0",
    experience: "",
    skills: [],
    billing_model: "",
  },
  stepDataNotifications: {
    type_notifications: notifications.N_R,
    media: "",
  },
  stepDataPayment: {
    full_name: "",
    type_document: typeDocument.N_R,
    number_document: "",
    bank: "0",
    account_type: "0",
    number_account: "",
  },
  stepDataTrade: {
    name_comerce: "",
    description_of_comerce: "",
    category: "",
    starting_time: "",
    clousing_time: "",
    nit: "",
    rut: "",
    verification_code: 0
  },
  stepDataAddress: {
    departament: "",
    city: "",
    neighborhood: "",
    street_type: "",
    street: "",
    number: 0,
    phone_contact: 0,
    apartment_flat: "",
    additional_references: "",
  },
};

export const dataRegisterSlice = createSlice({
  name: "data_register",
  initialState,
  reducers: {
    setDataBasicStepOne: (state, action: PayloadAction<IUserDataBasic>) => {
      state.stepDataBasic = action.payload;
    },
    setDataProviderServiceStepTow: (
      state,
      action: PayloadAction<IProviderServiceData>
    ) => {
      state.stepDataProviderServive = action.payload;
    },
    setDataNotificationsStepThree: (
      state,
      action: PayloadAction<INotificationsData>
    ) => {
      state.stepDataNotifications = action.payload;
    },
    setDataPaymentStepFour: (state, action: PayloadAction<IDataPayment>) => {
      state.stepDataPayment = action.payload;
    },
    setDataTrade: (state, action: PayloadAction<IDataTrade>) => {
      state.stepDataTrade = action.payload;
    },
    setDataAddress: (state, action: PayloadAction<IDataAddAddress>) => {
      state.stepDataAddress = action.payload;
    },
  },
});

export const {
  setDataBasicStepOne,
  setDataProviderServiceStepTow,
  setDataNotificationsStepThree,
  setDataPaymentStepFour,
  setDataTrade,
  setDataAddress
} = dataRegisterSlice.actions;
export default dataRegisterSlice.reducer;
