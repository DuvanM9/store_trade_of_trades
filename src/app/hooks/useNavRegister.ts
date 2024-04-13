import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateRoutesByRol } from "../routes/routes_register";
import { IStore } from "../interface/store";
import { IRoute } from "../interface/route";
import { getListGeneral } from "../services/general";
import { setDataGeneral } from "../store/features/general-slice";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

export const useNavRegister = () => {
  const { stepDataBasic } = useSelector((state: IStore) => state.data_register);
  const [dataStep, setdataStep] = useState<IRoute[]>([]);
  const dispatch = useDispatch();

  const getGeneralData = async (dispatch: Dispatch<UnknownAction>) => {
    try {
      const response = await getListGeneral();
      dispatch(
        setDataGeneral({
          ListBanks: response.data.ListBanks,
          ListBillingModels: response.data.ListBillingModels,
          ListDepartaments: response.data.ListDepartaments,
          ListStreetTypes: response.data.ListStreetTypes,
          ListTypeServices: response.data.ListTypeServices,
          ListTypeAccounts: response.data.ListTypeAccounts,
          ListCities: []
        })
      );
    } catch (error) {
      console.error(error);
      setDataGeneral({
        ListBanks: [],
        ListBillingModels: [],
        ListDepartaments: [],
        ListStreetTypes: [],
        ListTypeServices: [],
        ListTypeAccounts: [],
        ListCities: []
      });
    }
  };

  useEffect(() => {
    getGeneralData(dispatch);
  }, [dispatch]);

  useEffect(() => {
    const stepsByRol = CreateRoutesByRol(Number(stepDataBasic.rol));
    setdataStep(stepsByRol);
  }, [stepDataBasic]);

  return {
    dataStep,
  };
};
