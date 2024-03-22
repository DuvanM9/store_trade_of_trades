import React from "react";
import { useFormRegisterUser } from "../../hooks/useFormRegisterUser";
import { Formik } from "formik";
import createDataPaymentSchema from "../../validations/createDataPayment";
import { typeDocument } from "../../enum/typeDocument";
import { Rol } from "../../enum/rol";

export const FormRegisterDataPayment = () => {
  const {
    keyReconstructFragment,
    initialStateDataPayment,
    saveDataPayment,
    listBank,
    listAccountType,
    initialStateBasicData,
  } = useFormRegisterUser();
  return (
    <React.Fragment key={keyReconstructFragment}>
      <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
        <div className="mb-4">
          <h3>Datos para recibir tus pagos</h3>
        </div>
        <Formik
          initialValues={initialStateDataPayment}
          validationSchema={createDataPaymentSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            saveDataPayment(values);
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
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="w-100">
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Nombre completo</label>
                <input
                  className={`form-control ${
                    errors.full_name && touched.full_name && errors.full_name
                      ? "is-invalid"
                      : ""
                  }`}
                  id="full_name"
                  type="text"
                  name="full_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.full_name}
                />
                <div
                  className={
                    errors.full_name && touched.full_name && errors.full_name
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.full_name && touched.full_name && errors.full_name}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Tipo de documento</label>
                <select
                  className={`form-select ${
                    errors.type_document &&
                    touched.type_document &&
                    errors.type_document
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                  id="type_document"
                  name="type_document"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.type_document}
                >
                  <option value={typeDocument.N_R}>
                    Selecciona el tipo de documento
                  </option>
                  <option value={typeDocument.CC}>CC</option>
                  <option value={typeDocument.CE}>CE</option>
                  <option value={typeDocument.TI}>TI</option>
                </select>
                <div
                  className={
                    errors.type_document &&
                    touched.type_document &&
                    errors.type_document
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.type_document &&
                    touched.type_document &&
                    errors.type_document}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Número de documento</label>
                <input
                  className={`form-control ${
                    errors.number_document &&
                    touched.number_document &&
                    errors.number_document
                      ? "is-invalid"
                      : ""
                  }`}
                  id="number_document"
                  type="number"
                  name="number_document"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.number_document}
                />
                <div
                  className={
                    errors.number_document &&
                    touched.number_document &&
                    errors.number_document
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.number_document &&
                    touched.number_document &&
                    errors.number_document}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Selecciona tu banco</label>
                <select
                  className={`form-select ${
                    errors.bank && touched.bank && errors.bank
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                  id="bank"
                  name="bank"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bank}
                >
                  {listBank.map((bank) => (
                    <option value={bank.id}>{bank.bank}</option>
                  ))}
                </select>
                <div
                  className={
                    errors.bank && touched.bank && errors.bank
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.bank && touched.bank && errors.bank}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">
                  Selecciona tu tipo de cuenta
                </label>
                <select
                  className={`form-select ${
                    errors.account_type &&
                    touched.account_type &&
                    errors.account_type
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                  id="account_type"
                  name="account_type"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.account_type}
                >
                  {listAccountType.map((bank: any) => (
                    <option value={bank.id}>{bank.bank}</option>
                  ))}
                </select>
                <div
                  className={
                    errors.account_type &&
                    touched.account_type &&
                    errors.account_type
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.account_type &&
                    touched.account_type &&
                    errors.account_type}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Número de cuenta</label>
                <input
                  className={`form-control ${
                    errors.number_account &&
                    touched.number_account &&
                    errors.number_account
                      ? "is-invalid"
                      : ""
                  }`}
                  id="number_account"
                  type="number"
                  name="number_account"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.number_account}
                />
                <div
                  className={
                    errors.number_account &&
                    touched.number_account &&
                    errors.number_account
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.number_account &&
                    touched.number_account &&
                    errors.number_account}
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
                  className="btn btn-dark mt-4 col-md-8 col-lg-6 mx-auto"
                  style={{ backgroundColor: "#0393ae", borderColor: "#0393ae" }}
                  type="submit"
                  disabled={isSubmitting}
                >
                  {Number(initialStateBasicData.rol) === Rol.SERVICE_PROVIDER
                    ? "Finalizar"
                    : "Siguiente"}
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};
