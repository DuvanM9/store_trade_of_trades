import { notifications } from "../enum/notification";
import { Rol } from "../enum/rol";

export interface IUser {
  ID: string;
  email: string;
  rol: Rol;
  typeNotification: notifications;
  media: string;
}
