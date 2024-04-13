import { createSlice } from "@reduxjs/toolkit";

export interface IAppRoutes {
  register: boolean;
  init: boolean;
}

const initialState: IAppRoutes = {
  register: false,
  init: true,
};

export const appRoutesSlice = createSlice({
  name: "app-route",
  initialState,
  reducers: {
    setRedirectRegister: (state) => {
      state.register = true;
      state.init = false;
    },
    setRedirectInit: (state) => {
      state.init = true;
      
      state.register = false;
    },
  },
});

export const {setRedirectInit, setRedirectRegister} = appRoutesSlice.actions;
export default appRoutesSlice.reducer;