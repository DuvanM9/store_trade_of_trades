import { useProducts } from "../../hooks/useProducts";

export const SearchProducts = () => {
  const { searchProducts } = useProducts();

  return (
    <div className="input-group d-flex justify-content-center align-items-center">
      <button type="button" className="btn btn-dark color-primay-app">
        <i className="bi bi-search"></i>
      </button>
      <input
        onChange={searchProducts}
        type="text"
        className="form-control"
        placeholder="Buscar en shopping store"
        aria-label="Buscar en shopping store"
        aria-describedby="button-addon2"
      />
    </div>
  );
};
