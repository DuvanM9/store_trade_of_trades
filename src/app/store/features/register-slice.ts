import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProviderServiceData, IUserDataBasic } from "../../interface/register";

export interface IDataRegister {
  stepDataBasic: IUserDataBasic;
  stepDataProviderServive: IProviderServiceData
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
  }
};

export const dataRegisterSlice = createSlice({
  name: "data_register",
  initialState,
  reducers: {
    setDataBasicStepOne: (state, action: PayloadAction<IUserDataBasic>) => {
      state.stepDataBasic = action.payload;
    },
    setDataProviderServiceStepTow: (state, action: PayloadAction<IProviderServiceData>) => {
      state.stepDataProviderServive = action.payload;
    },
  },
});

export const { setDataBasicStepOne, setDataProviderServiceStepTow} = dataRegisterSlice.actions;
export default dataRegisterSlice.reducer;
