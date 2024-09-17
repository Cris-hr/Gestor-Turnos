import { Status } from "../interface/IAppointment";

interface IAppointmentDto {
  date: Date;
  time: string;
  description: string;
  userId: number;
  status: Status;
}

export default IAppointmentDto;
