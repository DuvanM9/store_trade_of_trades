import * as Yup from "yup";

const createDataAddressSchema = Yup.object().shape({
  departament: Yup.string().required("El departamento es requerido"),
  city: Yup.string().required("La ciudad es requerida"),
  neighborhood: Yup.string()
    .required("El vecindario es requerido")
    .min(3, "El vecindario debe tener al menos 3 caracteres")
    .max(15, "El vecindario debe tener como máximo 15 caracteres"),
  street_type: Yup.string().required("El tipo de calle es requerida"),
  street: Yup.string()
    .required("La calle es requerida")
    .min(2, "La calle debe tener al menos dos caracteres")
    .max(4, "La calle debe tener como máximo 4 caracteres"),
  number: Yup.number()
    .typeError("El número debe ser numérico")
    .integer("El número debe ser un número entero")
    .required("El número es requerido")
    .min(1, "El número debe tener al menos 1 caracteres")
    .max(999, "El número debe tener como máximo 3 caracteres"),

  phone_contact: Yup.number()
    .required("El número de contacto es requerido")
    .test(
      "len",
      "El número de contacto debe tener exactamente 10 dígitos",
      (val) => {
        if (!val) return false; // Si el valor es nulo o indefinido, devuelve falso
        return /^\d{10}$/.test(val.toString()); // Devuelve true si el valor tiene exactamente 10 dígitos
      }
    ),
  apartment_flat: Yup.string(),
  additional_references: Yup.string(),
});

export default createDataAddressSchema;
