import { SearchProducts } from "../components/Products/SearchProducts";

export const Header = () => {
  return (
    <header className="header">
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-9">
            <SearchProducts />
          </div>
          <div className="col-1">
            ingresar
          </div>
          <div className="col-1">
            Direccion
          </div>
          <div className="col-1">
            carrito
          </div>
        </div>
      </div>
    </header>
  );
};
