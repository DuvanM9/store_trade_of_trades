import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGeneral, List } from "../../interface/general";

const initialState: IGeneral = {
  ListDepartaments: [],
  ListTypeServices: [],
  ListBillingModels: [],
  ListBanks: [],
  ListTypeAccounts: [],
  ListStreetTypes: [],
  ListCities: []
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
    setCities: (state, action: PayloadAction<List[]>) =>{
      state.ListCities = action.payload
    }
  },
});

export const { setDataGeneral, setCities } = generalSlice.actions;
export default generalSlice.reducer;
