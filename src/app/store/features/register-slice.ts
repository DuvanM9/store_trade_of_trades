import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IDataPayment,
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
    number_document: 0,
    bank: "0",
    account_type: "0",
    number_account: 0,
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
  },
});

export const {
  setDataBasicStepOne,
  setDataProviderServiceStepTow,
  setDataNotificationsStepThree,
  setDataPaymentStepFour,
} = dataRegisterSlice.actions;
export default dataRegisterSlice.reducer;
