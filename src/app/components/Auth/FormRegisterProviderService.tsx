import React from "react";
import { useFormRegisterUser } from "../../hooks/useFormRegisterUser";
import { Formik } from "formik";
import createProviderServiceSchema from "../../validations/createProviderService";

export const FormRegisterProviderService = () => {
  const {
    savePartialDataProviderService,
    addSkillsProviderService,
    setNewSkill,
    removedSkilsProviders,
    newSkill,
    initialStateProviderServiceData,
    keyReconstructFragment,
    listTypeServices,
    listBillingModel,
  } = useFormRegisterUser();

  return (
    <React.Fragment key={keyReconstructFragment}>
      <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
        <div className="mb-4">
          <h3>Datos prestador de servicios</h3>
        </div>
        <Formik
          initialValues={initialStateProviderServiceData}
          validationSchema={createProviderServiceSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(false);
            savePartialDataProviderService(values);
            
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
            setValues,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="w-100">
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Tipo de servicio</label>
                <select
                  className={`form-select ${
                    errors.typeService &&
                    touched.typeService &&
                    errors.typeService
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                  id="typeService"
                  name="typeService"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.typeService}
                >
                  {listTypeServices.map((ser:any, i:number) => (
                    <option key={i} value={ser.ID}>
                      {ser.service}
                    </option>
                  ))}
                </select>
                <div
                  className={
                    errors.typeService &&
                    touched.typeService &&
                    errors.typeService
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.typeService &&
                    touched.typeService &&
                    errors.typeService}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Modelo de facturacion</label>
                <select
                  className={`form-select ${
                    errors.billing_model &&
                    touched.billing_model &&
                    errors.billing_model
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                  id="billing_model"
                  name="billing_model"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.billing_model}
                >
                  {listBillingModel.map((bil:any, i:number) => (
                    <option key={i} value={bil.ID}>
                      {bil.billing_model}
                    </option>
                  ))}
                </select>
                <div
                  className={
                    errors.billing_model &&
                    touched.billing_model &&
                    errors.billing_model
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.billing_model &&
                    touched.billing_model &&
                    errors.billing_model}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Tu perfil</label>
                <textarea
                  className={`form-control ${
                    errors.experience && touched.experience && errors.experience
                      ? "is-invalid"
                      : ""
                  }`}
                  id="experience"
                  name="experience"
                  onChange={handleChange}
                  placeholder="Hablanos de ti, cuentanos de tu experiencia"
                  onBlur={handleBlur}
                  value={values.experience}
                />
                <div
                  className={
                    errors.experience && touched.experience && errors.experience
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.experience && touched.experience && errors.experience}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Aptitudes</label>
                <div
                  className={`box-skils p-2 ${
                    errors.skills && touched.skills && errors.skills
                      ? "is-invalid"
                      : ""
                  }`}
                >
                  {values.skills.map((skil, index) => (
                    <span
                      className="m-1 p-2 d-inline-block rounded"
                      key={index}
                    >
                      {skil}
                      <button
                        className="icon-button"
                        onClick={() =>
                          removedSkilsProviders({ setValues, values }, skil)
                        }
                      >
                        <i className="ms-2 bi bi-x-circle-fill"></i>
                      </button>
                    </span>
                  ))}
                </div>
                <div
                  className={
                    errors.skills && touched.skills && errors.skills
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.skills && touched.skills && errors.skills}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Agregar skillss</label>
                <div className="row">
                  <div className="col-8">
                    <input
                      className="form-control"
                      placeholder="ejemplo estuco, rapidez node js"
                      value={newSkill}
                      onChange={(e) => {
                        setNewSkill(e.target.value);
                      }}
                    />
                  </div>
                  <button
                    onClick={() =>
                      addSkillsProviderService({ setValues, values })
                    }
                    className="col-4 btn btn-dark"
                    type="button"
                    style={{
                      backgroundColor: "#0393ae",
                      borderColor: "#0393ae",
                    }}
                  >
                    <i className="bi bi-send-plus-fill"></i>
                  </button>
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
