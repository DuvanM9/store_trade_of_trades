import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateRoutesByRol } from "../routes/routes_register";
import { IStore } from "../interface/store";
import { IRoute } from "../interface/route";
import { getListGeneral } from "../services/general";
import { setDataGeneral } from "../store/features/general-slice";

export const useNavRegister = () => {
  const { stepDataBasic } = useSelector((state: IStore) => state.data_register);
  const [dataStep, setdataStep] = useState<IRoute[]>([]);
  const dispatch = useDispatch();

  const getGeneralData = async () => {
    try {
      const response = await getListGeneral();
      console.log(response);
      dispatch(
        setDataGeneral({
          ListBanks: response.data.ListBanks,
          ListBillingModels: response.data.ListBillingModels,
          ListDepartaments: response.data.ListDepartaments,
          ListStreetTypes: response.data.ListStreetTypes,
          ListTypeServices: response.data.ListTypeServices,
          ListTypeAccounts: response.data.ListTypeAccounts,
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
      });
    }
  };

  useEffect(() => {
    getGeneralData();
  }, []);

  useEffect(() => {
    const stepsByRol = CreateRoutesByRol(Number(stepDataBasic.rol));
    setdataStep(stepsByRol);
  }, [stepDataBasic]);

  return {
    dataStep,
  };
};
