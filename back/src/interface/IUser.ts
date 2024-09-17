import { IAppointment } from "./IAppointment";
import { ICredential } from "./ICredential";

export interface IUser {
  id?: number;
  name: string;
  email: string;
  birthdate: Date;
  nDni: number;
  appointments: IAppointment[];
  credentialsId: ICredential["id"];
  //credentialsId: number;
}

//export default IUser;
