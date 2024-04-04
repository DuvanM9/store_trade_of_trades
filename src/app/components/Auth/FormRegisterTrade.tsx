import React from "react";
import { useFormRegisterUser } from "../../hooks/useFormRegisterUser";
import { Formik, Field } from "formik";
import createTradeSchema from "../../validations/createTrade";

export const FormRegisterTrade = () => {
  const {
    keyReconstructFragment,
    initialStateDataTrade,
    saveDataTrade,
    listCategory,
  } = useFormRegisterUser();
  return (
    <React.Fragment key={keyReconstructFragment}>
      <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
        <div className="mb-4">
          <h3>Datos del comercio</h3>
        </div>
        <Formik
          initialValues={initialStateDataTrade}
          validationSchema={createTradeSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            console.log(values);
            
            saveDataTrade(values);
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
            setFieldValue,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="w-100">
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Nombre del comercio</label>
                <input
                  className={`form-control ${
                    errors.name_comerce &&
                    touched.name_comerce &&
                    errors.name_comerce
                      ? "is-invalid"
                      : ""
                  }`}
                  id="name_comerce"
                  type="text"
                  name="name_comerce"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name_comerce}
                />
                <div
                  className={
                    errors.name_comerce &&
                    touched.name_comerce &&
                    errors.name_comerce
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.name_comerce &&
                    touched.name_comerce &&
                    errors.name_comerce}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Descripción del comercio</label>
                <textarea
                  className={`form-control ${
                    errors.description_of_comerce &&
                    touched.description_of_comerce &&
                    errors.description_of_comerce
                      ? "is-invalid"
                      : ""
                  }`}
                  id="description_of_comerce"
                  name="description_of_comerce"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description_of_comerce}
                />
                <div
                  className={
                    errors.description_of_comerce &&
                    touched.description_of_comerce &&
                    errors.description_of_comerce
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.description_of_comerce &&
                    touched.description_of_comerce &&
                    errors.description_of_comerce}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Categoria</label>
                <select
                  className={`form-select ${
                    errors.category && touched.category && errors.category
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                  id="category"
                  name="category"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category}
                >
                  {listCategory.map((cat: any, i: number) => (
                    <option key={i} value={cat.id}>
                      {cat.category}
                    </option>
                  ))}
                </select>
                <div
                  className={
                    errors.category && touched.category && errors.category
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.category && touched.category && errors.category}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <div className="row">
                  <div className="col-6">
                    <label className="form-label">Apertura</label>
                    <input
                      className={`form-control ${
                        errors.starting_time &&
                        touched.starting_time &&
                        errors.starting_time
                          ? "is-invalid"
                          : ""
                      }`}
                      id="starting_time"
                      type="time"
                      name="starting_time"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.starting_time}
                    />
                    <div
                      className={
                        errors.starting_time &&
                        touched.starting_time &&
                        errors.starting_time
                          ? `invalid-feedback`
                          : `valid-feedback`
                      }
                    >
                      {errors.starting_time &&
                        touched.starting_time &&
                        errors.starting_time}
                    </div>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Cierre</label>
                    <input
                      className={`form-control ${
                        errors.clousing_time &&
                        touched.clousing_time &&
                        errors.clousing_time
                          ? "is-invalid"
                          : ""
                      }`}
                      id="clousing_time"
                      type="time"
                      name="clousing_time"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.clousing_time}
                    />
                    <div
                      className={
                        errors.clousing_time &&
                        touched.clousing_time &&
                        errors.clousing_time
                          ? `invalid-feedback`
                          : `valid-feedback`
                      }
                    >
                      {errors.clousing_time &&
                        touched.clousing_time &&
                        errors.clousing_time}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <div className="row">
                  <div className="col-8">
                    <label className="form-label">Nit</label>
                    <input
                      className={`form-control ${
                        errors.nit && touched.nit && errors.nit
                          ? "is-invalid"
                          : ""
                      }`}
                      id="nit"
                      type="text"
                      name="nit"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nit}
                    />
                    <div
                      className={
                        errors.nit && touched.nit && errors.nit
                          ? `invalid-feedback`
                          : `valid-feedback`
                      }
                    >
                      {errors.nit && touched.nit && errors.nit}
                    </div>
                  </div>
                  <div className="col-4">
                    <label className="form-label">VC</label>
                    <input
                      className={`form-control ${
                        errors.verification_code &&
                        touched.verification_code &&
                        errors.verification_code
                          ? "is-invalid"
                          : ""
                      }`}
                      id="verification_code"
                      type="text"
                      name="verification_code"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.verification_code}
                    />
                    <div
                      className={
                        errors.verification_code &&
                        touched.verification_code &&
                        errors.verification_code
                          ? `invalid-feedback`
                          : `valid-feedback`
                      }
                    >
                      {errors.verification_code &&
                        touched.verification_code &&
                        errors.verification_code}
                    </div>
                  </div>
                </div>
              </div>
              <Field name="rut">
                {({ form }: any) => (
                  <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                    <label className="form-label">Rut</label>
                    <input
                      className={`form-control ${
                        form.errors.rut && form.touched.nit && form.errors.rut
                          ? "is-invalid"
                          : ""
                      }`}
                      type="file"
                      id="formFile"
                      onChange={(event: any) => {
                        console.log(event);
                        
                        setFieldValue("rut", event.currentTarget.files[0]);
                      }}
                    />
                    <div
                      className={
                        form.errors.rut && form.touched.rut && form.errors.rut
                          ? `invalid-feedback`
                          : `valid-feedback`
                      }
                    >
                      {form.errors.rut && form.touched.rut && form.errors.rut}
                    </div>
                  </div>
                )}
              </Field>

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
