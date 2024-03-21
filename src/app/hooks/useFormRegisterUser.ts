import { useEffect, useState } from "react";
import {
  IDataSkils,
  IProviderServiceData,
  IUserDataBasic,
} from "../interface/register";
import { useDispatch, useSelector } from "react-redux";
import {
  setDataBasicStepOne,
  setDataProviderServiceStepTow,
} from "../store/features/register-slice";
import { CreateRoutesByRol } from "../routes/routes_register";
import { useNavigate } from "react-router-dom";
import { Rol } from "../enum/rol";
import { IStore } from "../interface/store";

export const useFormRegisterUser = () => {
  const { stepDataBasic, stepDataProviderServive } = useSelector(
    (state: IStore) => state.data_register
  );
  const [initialStateBasicData, setInitialStateBasicData] =
    useState<IUserDataBasic>({
      email: "",
      password: "",
      passwordConfirm: "",
      rol: 3,
    });

  const [initialStateProviderServiceData, setInitialStateProviderServiceData] =
    useState<IProviderServiceData>({
      typeService: "0",
      experience: "",
      skills: [],
      billing_model: "",
    });

  const [listTypeServices, setListTypeServices] = useState<any[]>([]);
  const [listBillingModel, setListBillingModel] = useState<any[]>([]);
  const [newSkill, setNewSkill] = useState<string>("");

  const [keyReconstructFragment, setKeyReconstructFragment] =
    useState<number>(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const savePartialDataStepOne = (data: IUserDataBasic) => {
    dispatch(setDataBasicStepOne(data));
    const stepsByRol = CreateRoutesByRol(Number(data.rol));
    navigate(`/${stepsByRol[1].to}`);
  };

  const savePartialDataProviderService = (data: IProviderServiceData) => {
    dispatch(setDataProviderServiceStepTow(data));
    const stepsByRol = CreateRoutesByRol(Number(Rol.SERVICE_PROVIDER));
    navigate(`/${stepsByRol[2].to}`);
  };

  const addSkillsProviderService = (data: IDataSkils) => {
    data.setValues({
      ...data.values,
      skills: [...data.values.skills, newSkill],
    });
    setNewSkill("");
  };

  const removedSkilsProviders = (data: IDataSkils, skil: string) => {
    const newSkils = data.values.skills.filter((s) => s !== skil);
    data.setValues({ ...data.values, skills: [...newSkils] });
  };

  useEffect(() => {
    setInitialStateBasicData(stepDataBasic);
    setKeyReconstructFragment(0);
  }, [stepDataBasic]);

  useEffect(() => {
    setInitialStateProviderServiceData(stepDataProviderServive);
    setKeyReconstructFragment(0);
  }, [stepDataProviderServive]);

  useEffect(() => {
    setListTypeServices([
      {
        id: "0",
        service: "Selecciona un tipo de servicio",
      },
      {
        id: "1",
        service: "ornamentacion",
      },
      {
        id: "2",
        service: "construccion",
      },
      {
        id: "3",
        service: "programacion",
      },
    ]);

    setListBillingModel([
      {
        id: "0",
        billing_model: "Selecciona modelo de facturacion",
      },
      {
        id: "1",
        billing_model: "Tarifa por horas",
      },
      {
        id: "2",
        billing_model: "Tarifa diaria",
      },
      {
        id: "3",
        billing_model: "Tarifa Mensual",
      },
      {
        id: "4",
        billing_model: "Tarifa por trabajo realizado",
      },
    ]);

    return () => {
      setKeyReconstructFragment(1);
    };
  }, []);

  return {
    initialStateBasicData,
    savePartialDataStepOne,
    savePartialDataProviderService,
    addSkillsProviderService,
    setNewSkill,
    removedSkilsProviders,
    newSkill,
    keyReconstructFragment,
    initialStateProviderServiceData,
    listTypeServices,
    listBillingModel,
  };
};
