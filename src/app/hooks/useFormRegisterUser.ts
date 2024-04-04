import { useEffect, useState } from "react";
import {
  IDataAddAddress,
  IDataPayment,
  IDataSetDepartament,
  IDataSkils,
  IDataTrade,
  INotificationsData,
  IProviderServiceData,
  ISaveProviderService,
  IUserDataBasic,
} from "../interface/register";
import { useDispatch, useSelector } from "react-redux";
import {
  setDataAddress,
  setDataBasicStepOne,
  setDataNotificationsStepThree,
  setDataPaymentStepFour,
  setDataProviderServiceStepTow,
  setDataTrade,
} from "../store/features/register-slice";
import { CreateRoutesByRol } from "../routes/routes_register";
import { useNavigate } from "react-router-dom";
import { Rol } from "../enum/rol";
import { IStore } from "../interface/store";
import { notifications } from "../enum/notification";
import { typeDocument } from "../enum/typeDocument";
import { getListCitiesByIdDepartament } from "../services/general";
import { setCities } from "../store/features/general-slice";
import Swal from "sweetalert2";
import { saveProviderService } from "../services/auth";

export const useFormRegisterUser = () => {
  const {
    stepDataBasic,
    stepDataProviderServive,
    stepDataNotifications,
    stepDataPayment,
    stepDataTrade,
    stepDataAddress,
  } = useSelector((state: IStore) => state.data_register);

  const {
    ListBanks,
    ListBillingModels,
    ListDepartaments,
    ListStreetTypes,
    ListTypeAccounts,
    ListTypeServices,
    ListCities,
  } = useSelector((state: IStore) => state.general);
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
      number_document: "",
      bank: "0",
      account_type: "0",
      number_account: "",
    });

  const [initialStateDataTrade, setInitialStateDataTrade] =
    useState<IDataTrade>({
      name_comerce: "",
      description_of_comerce: "",
      category: "",
      starting_time: "",
      clousing_time: "",
      nit: "",
      rut: "",
      verification_code: 0,
    });

  const [initialStateDataAddress, setInitialStateDataAddress] =
    useState<IDataAddAddress>({
      departament: "",
      city: "",
      neighborhood: "",
      street_type: "",
      street: "",
      number: "",
      phone_contact: "",
      apartment_flat: "",
      additional_references: "",
    });

  const [listTypeServices, setListTypeServices] = useState<any[]>([]);
  const [listBillingModel, setListBillingModel] = useState<any[]>([]);
  const [listBank, setListBank] = useState<any[]>([]);
  const [listAccountType, setListAccountType] = useState<any>([]);
  const [listDepartament, setListDepartament] = useState<any>([]);
  const [listCity, setListCity] = useState<any>([]);
  const [listCategory, setListCategory] = useState<any>([]);
  const [newSkill, setNewSkill] = useState<string>("");
  const [listStreetType, setListStreetType] = useState<any>([]);

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
      navigate(`/address-information`);
    }
  };

  const saveDataTrade = (data: IDataTrade) => {
    dispatch(setDataTrade(data));
    const stepsByRol = CreateRoutesByRol(Number(Rol.TRADE));
    navigate(`/${stepsByRol[2].to}`);
  };

  const saveDataAddress = async (data: IDataAddAddress) => {
    dispatch(setDataAddress(data));

    const provider: ISaveProviderService = {
      email: stepDataBasic.email,
      password: stepDataBasic.password,
      rol: stepDataBasic.rol,
      typeService: stepDataProviderServive.typeService,
      experience: stepDataProviderServive.experience,
      skills: stepDataProviderServive.skills,
      billing_model: stepDataProviderServive.billing_model,
      type_notifications: stepDataNotifications.type_notifications,
      media: stepDataNotifications.media,
      full_name: stepDataPayment.full_name,
      type_document: stepDataPayment.type_document,
      number_document: stepDataPayment.number_account,
      bank: stepDataPayment.bank,
      account_type: stepDataPayment.account_type,
      number_account: stepDataPayment.number_account,
      departament: data.departament,
      city: data.city,
      neighborhood: data.neighborhood,
      street_type: data.street_type,
      street: data.street,
      number: parseInt(data.number),
      phone_contact: data.phone_contact,
      apartment_flat: data.apartment_flat,
      additional_references: data.additional_references,
    };

    try {
      const res = await saveProviderService(provider);

      Swal.fire({
        icon: "success",
        title: `Usuario creado con exito ${res.message}`,
        text: "Tu usuario fu creado satisfactoriamente",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No fue posible guardar tu usuario :(!",
      });
    }
    // Guardar datos
    // generar alerta de guardado o error al guardar
    // si se guardan los dato limpiar y recetear proceso
    // si no se guardan precargar todo
  };

  const saveDataPayment = (data: IDataPayment) => {
    dispatch(setDataPaymentStepFour(data));
    if (Number(stepDataBasic.rol) === Rol.SERVICE_PROVIDER) {
      navigate(`/address-information`);
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

  const setDepartamentAndGetCity = async (
    data: IDataSetDepartament,
    value: string
  ) => {
    data.setValues({
      ...data.values,
      departament: value,
    });

    const cities = await getListCitiesByIdDepartament(value);
    dispatch(setCities(cities.data));
    setListCity([{ ID: "0", city: "Selecciona tu ciudad" }, ...cities.data]);
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
    setInitialStateDataTrade(stepDataTrade);
    setKeyReconstructFragment(0);
  }, [stepDataTrade]);

  useEffect(() => {
    setInitialStateDataAddress(stepDataAddress);
    setKeyReconstructFragment(0);
  }, [stepDataAddress]);

  useEffect(() => {
    setListBank([{ ID: "0", bank: "Selecciona tu banco" }, ...ListBanks]);
    setListBillingModel([
      { ID: "0", billing_model: "Selecciona modelo de facturacion" },
      ...ListBillingModels,
    ]);
    setListDepartament([
      { ID: "0", departament: "Selecciona tu departamento" },
      ...ListDepartaments,
    ]);
    setListStreetType([
      { ID: "0", street_type: "Selecciona tu tipo de calle" },
      ...ListStreetTypes,
    ]);
    setListAccountType([
      { ID: "0", account_type: "Selecciona tu tipo de cuenta" },
      ...ListTypeAccounts,
    ]);
    setListTypeServices([
      { ID: "0", service: "Selecciona un tipo de servicio" },
      ...ListTypeServices,
    ]);
    setListCity([{ ID: "0", city: "Selecciona tu ciudad" }, ...ListCities]);
  }, [
    ListBanks,
    ListBillingModels,
    ListDepartaments,
    ListStreetTypes,
    ListTypeAccounts,
    ListTypeServices,
    ListCities,
  ]);

  useEffect(() => {
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
    initialStateDataTrade,
    initialStateDataAddress,
    savePartialDataStepOne,
    savePartialDataProviderService,
    saveDataNotifications,
    addSkillsProviderService,
    setDepartamentAndGetCity,
    setNewSkill,
    removedSkilsProviders,
    saveDataPayment,
    saveDataTrade,
    saveDataAddress,
    newSkill,
    listTypeServices,
    listBillingModel,
    listBank,
    listAccountType,
    listDepartament,
    listCity,
    listCategory,
    listStreetType,
  };
};
