import * as Yup from "yup";

const createTradeSchema = Yup.object().shape({
  name_comerce: Yup.string()
    .required("El nombre del comercio es requerido")
    .min(3, "El nombre del comercio debe tener minimo 3 caracteres")
    .max(50, "El comercio no puede tener mas de 50 caracteres"),
  description_of_comerce: Yup.string()
    .required("La descripción del comercio es requerida")
    .min(30, "Tu descripción debe tener al menos 30 caracteres")
    .max(300, "Tu descripción debe tener como máximo 300 caracteres"),
  category: Yup.string().required("La categoria del comercio es requerido"),
  starting_time: Yup.string()
    .required("La hora de apertura del comercio es requerido")
    .matches(
      /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
      "El formato de la hora debe ser HH:MM"
    ),
  clousing_time: Yup.string()
    .required("La hora de apertura del comercio es requerido")
    .matches(
      /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
      "El formato de la hora debe ser HH:MM"
    ),
  nit: Yup.number()
    .required("El NIT del comercio es requerido")
    .test("len", "El NIT debe tener exactamente 9 dígitos", (val) => {
      if (!val) return false; // Si el valor es nulo o indefinido, devuelve falso
      return /^\d{9}$/.test(val.toString()); // Devuelve true si el valor tiene exactamente 9 dígitos
    }),
  verification_code: Yup.number()
    .required("El código de verificacion es requerido")
    .max(1, "El código de verificacion debe tener maximo un número")
    .min(1, "El código de verificacion debe tener min un número"),
  rut: Yup.mixed().required("El rut es requerido"),
});

export default createTradeSchema;
