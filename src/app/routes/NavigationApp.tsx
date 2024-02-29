import { Suspense } from "react";
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { CreateRoutesByRol, IRoute, routes } from "./routes";
import { Carousel, Footer, Header } from "../layout";

export const NavigationApp = () => {
  return (
    <Suspense fallback={<span>..loanding</span>}>
      <BrowserRouter>
        <div className="main-layout">
          {/* Header */}
          <Header />
          {/* Anuncios carousel */}
          <Carousel />
          {/* Menu */}
          <nav className="nav">
            <ul>
              {CreateRoutesByRol(0).map(({ to, name }: IRoute) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          {/* content */}
          <div className="content">
            <Routes>
              {routes.map(({ path, to, Component }: IRoute) => (
                <Route key={to} path={path} element={<Component />}></Route>
              ))}
              <Route
                path="/*"
                element={<Navigate to={routes[routes.length - 1].to} replace />}
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
