import * as Yup from "yup";
import { typeDocument } from "../enum/typeDocument";

const createDataPaymentSchema = Yup.object().shape({
  full_name: Yup.string()
    .required("El nombre completo es requerido")
    .min(6, "El nombre debe tener mínimo 6 caracteres")
    .max(30, "El nombre debe tener máximo 10 caracteres"),

  type_document: Yup.number().required("El tipo de documento es requerido"),
  number_document: Yup.number()
    .typeError("El número de documento debe ser numérico")
    .integer("El número de documento debe ser un número entero")
    .when("type_document", ([type_document], sch) => {
      switch (type_document) {
        case typeDocument.CC:
          return sch
            .min(
              1000000,
              "El número de documento debe tener al menos 8 dígitos"
            )
            .max(
              9999999999,
              "El número de documento no puede tener más de 10 dígitos"
            );
        case typeDocument.TI:
          return sch
            .min(
              1000000,
              "El número de documento debe tener al menos 8 dígitos"
            )
            .max(
              9999999999,
              "El número de documento no puede tener más de 10 dígitos"
            );
        case typeDocument.CE:
          return sch
            .min(
              9999999999,
              "El número de documento debe tener al menos 10 dígitos"
            )
            .max(
              9999999999,
              "El número de documento no puede tener más de 10 dígitos"
            );

        default:
          return sch
            .min(
              1000000,
              "El número de documento debe tener al menos 8 dígitos"
            )
            .max(
              9999999999,
              "El número de documento no puede tener más de 10 dígitos"
            );
      }
    })
    .required("El número de documento es requerido"),

  bank: Yup.number().required("El banco es requerido"),
  account_type: Yup.string().required("El tipo de cuenta es requerido"),
  number_account: Yup.string().required("El número de cuenta es requerida"),
});
export default createDataPaymentSchema;
