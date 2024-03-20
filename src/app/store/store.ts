import { configureStore } from "@reduxjs/toolkit";
import paginatorSlice from "./features/paginator-slice";
import dataRegisterSlice from "./features/register-slice";

export const store = configureStore({
  reducer: {
    paginator: paginatorSlice,
    data_register: dataRegisterSlice,
  },
});
