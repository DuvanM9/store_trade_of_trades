import { Formik } from "formik";
import { useFormRegisterUser } from "../../hooks/useFormRegisterUser";
import createNotificationsSchema from "../../validations/createNotificationsUser";
import React from "react";
import { notifications } from "../../enum/notification";
import { Rol } from "../../enum/rol";

export const FormRegisterNotifications = () => {
  const {
    keyReconstructFragment,
    initialStateNotificationsData,
    saveDataNotifications,
    initialStateBasicData,
  } = useFormRegisterUser();
  return (
    <React.Fragment key={keyReconstructFragment}>
      <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
        <div className="mb-4">
          <h3>Datos para notificación</h3>
        </div>
        <Formik
          initialValues={initialStateNotificationsData}
          validationSchema={createNotificationsSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            saveDataNotifications(values);
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
                <label className="form-label">Tipo de notificación</label>
                <select
                  className={`form-select ${
                    errors.type_notifications &&
                    touched.type_notifications &&
                    errors.type_notifications
                      ? "is-invalid"
                      : ""
                  }`}
                  aria-label="Default select example"
                  id="type_notifications"
                  name="type_notifications"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.type_notifications}
                >
                  <option value={notifications.N_R}>
                    Selecciona el tipo de notificación
                  </option>
                  <option value={notifications.EMAIL}>Email</option>
                  <option value={notifications.SMS}>SMS</option>
                </select>
                <div
                  className={
                    errors.type_notifications &&
                    touched.type_notifications &&
                    errors.type_notifications
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.type_notifications &&
                    touched.type_notifications &&
                    errors.type_notifications}
                </div>
              </div>
              <div className="mb-3 col-md-8 col-lg-6 mx-auto">
                <label className="form-label">Medio de notificación</label>
                <input
                  className={`form-control ${
                    errors.media && touched.media && errors.media
                      ? "is-invalid"
                      : ""
                  }`}
                  id="media"
                  type="text"
                  name="media"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.media}
                />
                <div
                  className={
                    errors.media && touched.media && errors.media
                      ? `invalid-feedback`
                      : `valid-feedback`
                  }
                >
                  {errors.media && touched.media && errors.media}
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
                  {Number(initialStateBasicData.rol) === Rol.USER
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
