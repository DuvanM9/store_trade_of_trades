import React from "react";
import { useFormRegisterUser } from "../../hooks/useFormRegisterUser";
import { Formik } from "formik";
import createDataAddressSchema from "../../validations/createDataAddress";

export const FormRegisterAddress = () => {
  const {
    keyReconstructFragment,
    initialStateDataAddress,
    saveDataAddress,
    setDepartamentAndGetCity,
    listDepartament,
    listCity,
    listStreetType,
  } = useFormRegisterUser();
  return (
    <React.Fragment key={keyReconstructFragment}>
      <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
        <div className="mb-4">
          <h3>Dirección</h3>
        </div>
        <Formik
          initialValues={initialStateDataAddress}
          validationSchema={createDataAddressSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            saveDataAddress(values);
            resetForm();
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setValues
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="w-100">
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Seleccione el Departamento</label>
                <select
                  className={`form-select ${
                    errors.departament &&
                    touched.departament &&
                    errors.departament
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                  id="departament"
                  name="departament"
                  onChange={(e) => setDepartamentAndGetCity({setValues,values}, e.target.value )}
                  onBlur={handleBlur}
                  value={values.departament}
                >
                  {listDepartament.map((dep: any, i:number) => (
                    <option key={i} value={dep.ID}>{dep.departament}</option>
                  ))}
                </select>
                <div
                  className={
                    errors.departament &&
                    touched.departament &&
                    errors.departament
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.departament &&
                    touched.departament &&
                    errors.departament}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Seleccione la Ciudad</label>
                <select
                  className={`form-select ${
                    errors.city && touched.city && errors.city
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                  id="city"
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                >
                  {listCity.map((city: any, i:number) => (
                    <option key={i} value={city.ID}>{city.city}</option>
                  ))}
                </select>
                <div
                  className={
                    errors.city && touched.city && errors.city
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.city && touched.city && errors.city}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">
                  Vecindario (barrio - localidad)
                </label>
                <input
                  className={`form-control ${
                    errors.neighborhood &&
                    touched.neighborhood &&
                    errors.neighborhood
                      ? "is-invalid"
                      : ""
                  }`}
                  id="neighborhood"
                  type="text"
                  name="neighborhood"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.neighborhood}
                />
                <div
                  className={
                    errors.neighborhood &&
                    touched.neighborhood &&
                    errors.neighborhood
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.neighborhood &&
                    touched.neighborhood &&
                    errors.neighborhood}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <div className="row">
                  <div className="col-5">
                    <label className="form-label">
                      Carrera
                    </label>
                    <select
                      className={`form-select ${
                        errors.street_type &&
                        touched.street_type &&
                        errors.street_type
                          ? "is-invalid"
                          : ""
                      }`}
                      aria-label="Default select example"
                      id="street_type"
                      name="street_type"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.street_type}
                    >
                      {listStreetType.map((street: any, i:number) => (
                        <option key={i} value={street.ID}>{street.street_type}</option>
                      ))}
                    </select>
                    <div
                      className={
                        errors.street_type &&
                        touched.street_type &&
                        errors.street_type
                          ? `invalid-feedback`
                          : `valid-feedback`
                      }
                    >
                      {errors.street_type &&
                        touched.street_type &&
                        errors.street_type}
                    </div>
                  </div>
                  <div className="col-4">
                    <label className="form-label">1B</label>
                    <input
                      className={`form-control ${
                        errors.street && touched.street && errors.street
                          ? "is-invalid"
                          : ""
                      }`}
                      id="street"
                      type="text"
                      name="street"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.street}
                    />
                    <div
                      className={
                        errors.street && touched.street && errors.street
                          ? `invalid-feedback`
                          : `valid-feedback`
                      }
                    >
                      {errors.street && touched.street && errors.street}
                    </div>
                  </div>
                  <div className="col-3">
                    <label className="form-label">#</label>
                    <input
                      className={`form-control ${
                        errors.number && touched.number && errors.number
                          ? "is-invalid"
                          : ""
                      }`}
                      id="number"
                      type="text"
                      name="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.number}
                    />
                    <div
                      className={
                        errors.number && touched.number && errors.number
                          ? `invalid-feedback`
                          : `valid-feedback`
                      }
                    >
                      {errors.number && touched.number && errors.number}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Número de contacto</label>
                <input
                  className={`form-control ${
                    errors.phone_contact &&
                    touched.phone_contact &&
                    errors.phone_contact
                      ? "is-invalid"
                      : ""
                  }`}
                  id="phone_contact"
                  type="text"
                  name="phone_contact"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone_contact}
                />
                <div
                  className={
                    errors.phone_contact &&
                    touched.phone_contact &&
                    errors.phone_contact
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.phone_contact &&
                    touched.phone_contact &&
                    errors.phone_contact}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Apartamento</label>
                <input
                  className={`form-control ${
                    errors.apartment_flat &&
                    touched.apartment_flat &&
                    errors.apartment_flat
                      ? "is-invalid"
                      : ""
                  }`}
                  id="apartment_flat"
                  type="text"
                  name="apartment_flat"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.apartment_flat}
                />
                <div
                  className={
                    errors.apartment_flat &&
                    touched.apartment_flat &&
                    errors.apartment_flat
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.apartment_flat &&
                    touched.apartment_flat &&
                    errors.apartment_flat}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Referencias adicionales</label>
                <input
                  className={`form-control ${
                    errors.additional_references &&
                    touched.additional_references &&
                    errors.additional_references
                      ? "is-invalid"
                      : ""
                  }`}
                  id="additional_references"
                  type="text"
                  name="additional_references"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.additional_references}
                />
                <div
                  className={
                    errors.additional_references &&
                    touched.additional_references &&
                    errors.additional_references
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.additional_references &&
                    touched.additional_references &&
                    errors.additional_references}
                </div>
              </div>
              <div className="d-grid ">
                {false && (
                  <div
                    className="pt-2 pb-3 alert alert-warning text-center"
                    style={{ fontSize: 14, textAlign: "justify" }}
                  >
                    Mensaje de creacion
                  </div>
                )}
                <button
                  className="btn btn-dark m-4 col-md-8 col-lg-6 mx-auto"
                  style={{ backgroundColor: "#0393ae", borderColor: "#0393ae" }}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Guardar
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};
