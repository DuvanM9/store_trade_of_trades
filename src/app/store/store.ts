import { configureStore } from "@reduxjs/toolkit";
import paginatorSlice from "./features/paginator-slice";
import dataRegisterSlice from "./features/register-slice";
import generalSlice from "./features/general-slice";

export const store = configureStore({
  reducer: {
    paginator: paginatorSlice,
    data_register: dataRegisterSlice,
    general: generalSlice
  },
});
