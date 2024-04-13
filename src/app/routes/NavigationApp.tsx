import { Suspense } from "react";
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { CreateRoutesByRol, routes } from "./routes";
import { Carousel, Footer } from "../layout";
import { IRoute } from "../interface/route";
import { SearchProducts } from "../components/Products/SearchProducts";
import { ModalCustom } from "../components/General/ModalCustom";
import { FormLogin } from "../components/Auth/FormLogin";
import { useDispatch, useSelector } from "react-redux";
import { setRedirectRegister } from "../store/features/app-routes-slice";
import { IStore } from "../interface/store";
import { logOut, onHideAuthLogin } from "../store/features/auth-slice";

export const NavigationApp = () => {
  const dispath = useDispatch();
  
  const { modalLogin } = useSelector((state: IStore) => state.auth);
  const { token } = useSelector((store: IStore) => store.auth);

  const goRegister = () => {
    dispath(setRedirectRegister());
  };

  const closeModal = () => {
    dispath(onHideAuthLogin(false));
  };

  const openModal = () => {
    dispath(onHideAuthLogin(true));
  };

  const goOut = () => {
    dispath(logOut());
  };

  return (
    <Suspense fallback={<span>..loanding</span>}>
      <BrowserRouter>
        <ModalCustom
          id="modalLogin"
          modalTitle="Ingresar"
          nameClose="Salir"
          nameSuccess="Enviar"
          buttosFooter={false}
          show={modalLogin}
          onHide={closeModal}
          ComponentContent={FormLogin}
        />

        <div className="main-layout">
          {/* <Header /> */}
          {/* Menu */}
          <nav className="nav navbar navbar-expand-lg navbar-dark bg-dark p-4">
            <div className="container-fluid">
              <NavLink to="/product-list" className="button-link navbar-brand">Trade of trade</NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {CreateRoutesByRol(1).map(
                    ({ to, name, isActiveNav }: IRoute) => (
                      <li key={to} className="nav-item">
                        {isActiveNav && (
                          <NavLink
                            to={to}
                            className={({ isActive }) =>
                              isActive ? "nav-link nav-active" : "nav-link"
                            }
                          >
                            {name}
                          </NavLink>
                        )}
                      </li>
                    )
                  )}
                  {token ? (
                    <li key="unique" className="nav-item dropdown">
                      <a
                        className="button-link nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Perfil
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <button
                            className="button-link dropdown-item"
                            onClick={goOut}
                          >
                            Mi perfil
                          </button>
                        </li>
                        <li>
                          <button
                            className="button-link dropdown-item"
                            onClick={goOut}
                          >
                            Pqr
                          </button>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <button
                            className="button-link dropdown-item"
                            onClick={goOut}
                          >
                            Salir
                          </button>
                        </li>
                      </ul>
                    </li>
                  ) : (
                    <li key="unique" className="nav-item">
                      <button
                        className="button-link nav-link"
                        onClick={openModal}
                      >
                        Ingresar
                      </button>
                    </li>
                  )}
                </ul>
                <div className="d-flex" role="search">
                  <SearchProducts />
                </div>
                {token && (
                  <div className="cotainer px-5 icons-nav">
                    <div className="row">
                      <div className="col">
                        <i onClick={goRegister} className="bi bi-bell-fill"></i>
                      </div>
                      <div className="col">
                        <i className="bi bi-cart-check"></i>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>
          {/* Anuncios carousel */}
          <Carousel />
          {/* content */}
          <div className="content">
            <Routes>
              {routes.map(({ path, to, Component }: IRoute) => (
                <Route
                  key={to}
                  path={path}
                  element={
                    <div className="d-flex justify-content-center align-items-center px-5">
                      <Component />
                    </div>
                  }
                ></Route>
              ))}
              <Route
                path="/*"
                element={<Navigate to={routes[0].to} replace />}
              ></Route>
            </Routes>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
