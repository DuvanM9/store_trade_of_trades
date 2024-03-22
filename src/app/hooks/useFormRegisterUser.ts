import { useEffect, useState } from "react";
import {
  IDataPayment,
  IDataSkils,
  INotificationsData,
  IProviderServiceData,
  IUserDataBasic,
} from "../interface/register";
import { useDispatch, useSelector } from "react-redux";
import {
  setDataBasicStepOne,
  setDataNotificationsStepThree,
  setDataPaymentStepFour,
  setDataProviderServiceStepTow,
} from "../store/features/register-slice";
import { CreateRoutesByRol } from "../routes/routes_register";
import { useNavigate } from "react-router-dom";
import { Rol } from "../enum/rol";
import { IStore } from "../interface/store";
import { notifications } from "../enum/notification";
import { typeDocument } from "../enum/typeDocument";

export const useFormRegisterUser = () => {
  const {
    stepDataBasic,
    stepDataProviderServive,
    stepDataNotifications,
    stepDataPayment,
  } = useSelector((state: IStore) => state.data_register);
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

  const [initialStateNotificationsData, setInitialStateNotificationsData] =
    useState<INotificationsData>({
      type_notifications: notifications.N_R,
      media: "",
    });

  const [initialStateDataPayment, setInitialStateDataPayment] =
    useState<IDataPayment>({
      full_name: "",
      type_document: typeDocument.N_R,
      number_document: 0,
      bank: "0",
      account_type: "0",
      number_account: 0,
    });

  const [listTypeServices, setListTypeServices] = useState<any[]>([]);
  const [listBillingModel, setListBillingModel] = useState<any[]>([]);
  const [listBank, setListBank] = useState<any[]>([]);
  const [listAccountType, setListAccountType] = useState<any>([]);

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

  const saveDataNotifications = (data: INotificationsData) => {
    dispatch(setDataNotificationsStepThree(data));
    if (
      Number(stepDataBasic.rol) === Rol.SERVICE_PROVIDER ||
      Number(stepDataBasic.rol) === Rol.TRADE
    ) {
      navigate(`/payment-data`);
    } else {
      console.log("Guardar usuario");
    }
  };

  const saveDataPayment = (data: IDataPayment) => {
    dispatch(setDataPaymentStepFour(data));
    if (Number(stepDataBasic.rol) === Rol.SERVICE_PROVIDER) {
      console.log("Guardar y crear usuario");
    } else if (Number(stepDataBasic.rol) === Rol.TRADE) {
      navigate(`/register-product`);
    }
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
    setInitialStateNotificationsData(stepDataNotifications);
    setKeyReconstructFragment(0);
  }, [stepDataNotifications]);

  useEffect(() => {
    setInitialStateDataPayment(stepDataPayment);
    setKeyReconstructFragment(0);
  }, [stepDataPayment]);

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

    setListBank([
      {
        id: 0,
        bank: "Selecciona tu banco",
      },
      {
        id: 1,
        bank: "ITAU",
      },
      {
        id: 2,
        bank: "Bancolombia",
      },
      {
        id: 3,
        bank: "Davivienda",
      },
      {
        id: 4,
        bank: "Banco de Bogotá",
      },
      {
        id: 5,
        bank: "Banco de Occidente",
      },
      {
        id: 6,
        bank: "Banco Popular",
      },
      {
        id: 7,
        bank: "Nequi",
      },
      {
        id: 8,
        bank: "DaviPlata",
      },
    ]);

    setListAccountType([
      {
        id: 0,
        bank: "Selecciona tu tipo de cuenta",
      },
      {
        id: 1,
        bank: "Ahorros",
      },
      {
        id: 2,
        bank: "Corriente",
      },
      {
        id: 3,
        bank: "Deposito electronico",
      },
    ]);

    return () => {
      setKeyReconstructFragment(1);
    };
  }, []);

  return {
    keyReconstructFragment,
    initialStateBasicData,
    initialStateNotificationsData,
    initialStateDataPayment,
    initialStateProviderServiceData,
    savePartialDataStepOne,
    savePartialDataProviderService,
    saveDataNotifications,
    addSkillsProviderService,
    setNewSkill,
    removedSkilsProviders,
    saveDataPayment,
    newSkill,
    listTypeServices,
    listBillingModel,
    listBank,
    listAccountType,
  };
};
