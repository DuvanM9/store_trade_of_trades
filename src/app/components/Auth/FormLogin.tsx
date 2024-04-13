import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import loginSchema from "../../validations/loginUser";
import { login } from "../../services/auth";
import { ILoginDataBasic } from "../../interface/register";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import {
  onHideAuthLogin,
  setUserAuthAndToken,
} from "../../store/features/auth-slice";

export const FormLogin = () => {
  const dispatch = useDispatch();
  const [alertError, setAlertError] = useState({
    isOpen: false,
    message: "",
  });

  const loginApp = async (values: ILoginDataBasic) => {
    try {
      const res = await login(values);

      const dataUser = {
        token: res.data.token,
        userLogin: {
          ID: res.data.user.ID,
          email: res.data.user.email,
          rol: res.data.user.rol,
          typeNotification: res.data.user.type_notifications,
          media: res.data.user.media,
        },
      };
      dispatch(onHideAuthLogin(false));
      dispatch(setUserAuthAndToken(dataUser));

      Swal.fire({
        icon: "success",
        title: `Bienvenido!`,
        text: res.message,
      });
    } catch (error: any) {
      const res = error.response.data;
      console.log(error.response.data);
      setAlertError({
        isOpen: true,
        message: res.message,
      });
    }
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          await loginApp(values);
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
        }) => (
          <form onSubmit={handleSubmit} className="w-100">
            <div className="mb-3 col-md-8 col-lg-8 mx-auto">
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
            <div className="mb-3 col-md-8 col-lg-8 mx-auto">
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
            <div className="d-grid ">
              {alertError.isOpen && (
                <div
                  className="pt-2 pb-3 m-4 col-md-8 col-lg-8 mx-auto alert alert-warning text-center"
                  style={{ fontSize: 14, textAlign: "justify" }}
                >
                  {alertError.message}
                </div>
              )}
              <button
                className="btn btn-dark m-4 col-md-8 col-lg-8 mx-auto"
                style={{ backgroundColor: "#0393ae", borderColor: "#0393ae" }}
                type="submit"
                disabled={isSubmitting}
              >
                login
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
