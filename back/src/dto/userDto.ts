import { IAppointment } from "../interface/IAppointment";

interface IUserDto {
  name: string;
  email: string;
  birthdate: Date;
  nDni: number;
  // username: string;
  // password: string;
  //appointments: IAppointment[];
}
export default IUserDto;
