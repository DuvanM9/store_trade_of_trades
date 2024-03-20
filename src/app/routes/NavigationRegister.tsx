import { Suspense, useEffect, useState } from "react";
import imageFinal from "../assets/Carrito.png"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CreateRoutesByRol, routes } from "./routes_register";
import { IRoute } from "../interface/route";
import { Stepper } from "../components/General/Stepper";
import { Rol } from "../enum/rol";
import { useSelector } from "react-redux";
import { IStore } from "../interface/store";

export const NavigationRegister = () => {
  const { stepDataBasic } = useSelector((state: IStore) => state.data_register);
  const [dataStep, setdataStep] = useState<IRoute[]>([])
  
  useEffect(() => {
    const stepsByRol = CreateRoutesByRol(Number(stepDataBasic.rol));
    setdataStep(stepsByRol)
  }, [stepDataBasic])
  

  return (
    <Suspense fallback={<span>..loanding</span>}>
      <BrowserRouter>
        <div className="register-layout">
          <Stepper contentStep={dataStep} />
          <div className="container shadow-lg h-75 rounded">
            <div className="row h-100">
              <div className="col-md-6 col-sm-6 col-xs-12 p-3 d-flex justify-content-center align-items-center image-welcome">
                <img
                  src={imageFinal}
                  className="img-fluid"
                  style={{maxWidth: "100%", maxHeight: "510px"}}
                  alt="..."
                />
                {/* <span className="shadow-down"></span> */}
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 p-5 forms-steps">
                <Routes>
                  {routes.map(({ path, to, Component }: IRoute) => (
                    <Route key={to} path={path} element={<Component />}></Route>
                  ))}
                  <Route
                    path="/*"
                    element={<Navigate to={routes[0].to} replace />}
                  ></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
