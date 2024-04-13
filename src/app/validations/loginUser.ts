import * as Yup from "yup";

const passExp = new RegExp(
  "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
);
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Dirección de correo electrónico no válida")
    .required("El correo electronico es requerido"),
  password: Yup.string()
    .required("La contraseña es requerida")
    .min(
      8,
      "La contraseña es demasiado corta; debe tener un mínimo de 8 caracteres."
    )
    .matches(
      passExp,
      "Contraseña invalida debe tener una miniscula una mayuscula y un caracter especial [!@#$%^&*]"
    ),
});

export default loginSchema;
