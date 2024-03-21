import * as Yup from "yup";

const createProviderServiceSchema = Yup.object().shape({
  typeService: Yup.string().required("El tipo de servicio es requerido"),
  experience: Yup.string()
    .required("Tu experiencia es requerida")
    .min(30, "Tu experiencia debe tener al menos 30 caracteres")
    .max(300, "Tu experiencia debe tener como máximo 300 caracteres"),
  skills: Yup.array()
    .of(Yup.string())
    .required("Al menos una skill es requerida")
    .min(1, "Debe agregar al menos una skill")
    .max(3, "No puede agregar más de tres skill"),
  billing_model: Yup.string().required("El método de pago es requerido"),
});

export default createProviderServiceSchema;
