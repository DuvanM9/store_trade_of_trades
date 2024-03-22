import * as Yup from "yup";

const createNotificationsSchema = Yup.object().shape({
  type_notifications: Yup.string().required(
    "El tipo de notificación es requerido"
  ),
  media: Yup.string()
    .when("type_notifications", ([type_notifications], sch) => {
      return type_notifications === "1"
        ? sch
            .min(10, "El medio de notificación debe tener mínimo 10 caracteres")
            .max(10, "El medio de notificación debe tener máximo 10 caracteres")
        : sch.email(
            "El medio de notificación debe ser un correo electrónico válido"
          );
    })
    .required("El medio de notificación es requerido"),
});

export default createNotificationsSchema;
