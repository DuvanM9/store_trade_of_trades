import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthSlice } from "../../interface/auth";
import { IUser } from "../../interface/user";

const initialState: IAuthSlice = {
  modalLogin: false,
  token: "",
  userLogin: {
    ID: "",
    email: "",
    rol: 4,
    typeNotification: 0,
    media: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onHideAuthLogin: (state, payload: PayloadAction<boolean>) => {
      state.modalLogin = payload.payload;
    },
    setUserAuthAndToken: (
      state,
      payload: PayloadAction<{ token: string; userLogin: IUser }>
    ) => {
      state.token = payload.payload.token;
      state.userLogin = payload.payload.userLogin;
    },
    logOut: (state) => {
      state.token = "";
      state.userLogin.ID = "";
      state.userLogin.email = "";
      state.userLogin.rol = 4;
      state.userLogin.typeNotification = 0;
      state.userLogin.media = "";
    },
  },
});

export const { onHideAuthLogin, setUserAuthAndToken, logOut } = authSlice.actions;
export default authSlice.reducer;
