import { Formik } from "formik";
import React from "react";
import createUserSchema from "../../validations/createUser";
import { Rol } from "../../enum/rol";
import { useFormRegisterUser } from "../../hooks/useFormRegisterUser";

export const FormRegisterUser = () => {
  const { savePartialDataStepOne, initialStateBasicData, keyReconstructFragment } =
    useFormRegisterUser();
  return (
    <React.Fragment key={keyReconstructFragment}>
      <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
        <div className="mb-4">
          <h3>Datos de autenticación</h3>
        </div>
        <Formik
          initialValues={initialStateBasicData}
          validationSchema={createUserSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            savePartialDataStepOne(values);
            resetForm()
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
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="w-100">
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Email</label>
                <input
                  className={`form-control ${
                    errors.email && touched.email && errors.email
                      ? "is-invalid"
                      : ""
                  }`}
                  id="email"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <div
                  className={
                    errors.email && touched.email && errors.email
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.email && touched.email && errors.email}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Password</label>
                <input
                  className={`form-control ${
                    errors.password && touched.password && errors.password
                      ? "is-invalid"
                      : ""
                  }`}
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <div
                  className={
                    errors.password && touched.password && errors.password
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.password && touched.password && errors.password}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Password Confirmed</label>
                <input
                  className={`form-control ${
                    errors.passwordConfirm &&
                    touched.passwordConfirm &&
                    errors.passwordConfirm
                      ? "is-invalid"
                      : ""
                  }`}
                  id="passwordConfirm"
                  type="password"
                  name="passwordConfirm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirm}
                />
                <div
                  className={
                    errors.passwordConfirm &&
                    touched.passwordConfirm &&
                    errors.passwordConfirm
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.passwordConfirm &&
                    touched.passwordConfirm &&
                    errors.passwordConfirm}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Rol</label>
                <select
                  className={`form-select ${
                    errors.rol && touched.rol && errors.rol ? "is-invalid" : ""
                  }`}
                  aria-label="Default select example"
                  id="rol"
                  // type="sex"
                  name="rol"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.rol}
                >
                  <option value={Rol.N_R}>Selecciona tu rol</option>
                  <option value={Rol.SERVICE_PROVIDER}>
                    Prestador de servicios
                  </option>
                  <option value={Rol.TRADE}>Comerciante</option>
                  <option value={Rol.USER}>Usuario</option>
                </select>
                <div
                  className={
                    errors.rol && touched.rol && errors.rol
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.rol && touched.rol && errors.rol}
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
                  Siguiente
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};
