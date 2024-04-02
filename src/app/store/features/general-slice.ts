import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGeneral } from "../../interface/general";

const initialState: IGeneral = {
  ListDepartaments: [],
  ListTypeServices: [],
  ListBillingModels: [],
  ListBanks: [],
  ListTypeAccounts: [],
  ListStreetTypes: [],
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setDataGeneral: (state, action: PayloadAction<IGeneral>) => {
      state.ListBanks = action.payload.ListBanks;
      state.ListBillingModels = action.payload.ListBillingModels;
      state.ListDepartaments = action.payload.ListDepartaments;
      state.ListStreetTypes = action.payload.ListStreetTypes;
      state.ListTypeAccounts = action.payload.ListTypeAccounts;
      state.ListTypeServices = action.payload.ListTypeServices;
    },
  },
});

export const { setDataGeneral } = generalSlice.actions;
export default generalSlice.reducer;
