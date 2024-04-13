import { configureStore } from "@reduxjs/toolkit";
import paginatorSlice from "./features/paginator-slice";
import dataRegisterSlice from "./features/register-slice";
import generalSlice from "./features/general-slice";
import appRoutesSlice  from "./features/app-routes-slice";
import authSlice from "./features/auth-slice";
import productSlice from "./features/product-slice";

export const store = configureStore({
  reducer: {
    paginator: paginatorSlice,
    data_register: dataRegisterSlice,
    general: generalSlice,
    app_router: appRoutesSlice,
    auth: authSlice,
    product: productSlice
  },
});
