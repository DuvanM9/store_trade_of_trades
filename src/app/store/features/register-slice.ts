import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUserDataBasic } from "../../interface/register";

export interface IDataRegister {
  stepDataBasic: IUserDataBasic;
}

const initialState: IDataRegister = {
  stepDataBasic: {
    email: "",
    password: "",
    passwordConfirm: "",
    rol: 3,
  },
};

export const dataRegisterSlice = createSlice({
  name: "data_register",
  initialState,
  reducers: {
    setDataBasicStepOne: (state, action: PayloadAction<IUserDataBasic>) => {
      state.stepDataBasic = action.payload;
    },
  },
});

export const { setDataBasicStepOne } = dataRegisterSlice.actions;
export default dataRegisterSlice.reducer;
