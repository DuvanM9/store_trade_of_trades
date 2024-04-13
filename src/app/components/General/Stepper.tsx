import { useDispatch } from "react-redux";
import { IRoute } from "../../interface/route";
import { NavLink } from "react-router-dom";
import { setRedirectInit } from "../../store/features/app-routes-slice";

export const Stepper = ({ contentStep }: { contentStep: IRoute[] }) => {

  const dispatch = useDispatch();

  const goHome = () => {
    dispatch(setRedirectInit());
  };

  return (
    <div className="container">
      <button onClick={goHome} className="btn btn-dark  col-md-8 col-lg-2 mx-auto color-primay-app" ><i className="bi bi-cart4"></i> Inicio </button>
      <div className="row d-flex justify-content-center">
        {contentStep.map(({ to, icon }: IRoute, index) => (
          <div className="col-2 col-xs-2 col-sm-2 col-md-1 me-1 mb-4 "  key={index}>
            <NavLink
              to={to}
              key={index}
              className={({ isActive }) => (isActive ? "step-active" : "")}
              style={{ textDecoration: "none" }}
            >
              <div className="custom-step">{!icon? index+1: icon }</div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
