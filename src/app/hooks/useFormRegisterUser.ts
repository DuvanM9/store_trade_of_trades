import { useEffect, useState } from "react";
import { IUserDataBasic } from "../interface/register";
import { useDispatch, useSelector } from "react-redux";
import { setDataBasicStepOne } from "../store/features/register-slice";
export const useFormRegisterUser = () => {
  const { stepDataBasic } = useSelector((state: any) => state.data_register);
  const [initialState, setInitialState] = useState<IUserDataBasic>({
    email: "",
    password: "",
    passwordConfirm: "",
    rol: 3,
  });
  const [keyReconstructFragment, setKeyReconstructFragment] =
    useState<number>(1);

  const dispatch = useDispatch();

  const savePartialData = (data: IUserDataBasic) => {
    dispatch(setDataBasicStepOne(data));
  };

  useEffect(() => {
    setInitialState(stepDataBasic);
    setKeyReconstructFragment(0);
  }, [dispatch, stepDataBasic]);

  useEffect(() => {
    
    return () => {
      setKeyReconstructFragment(1);
    };
  }, []);

  return {
    initialState,
    savePartialData,
    keyReconstructFragment,
  };
};
