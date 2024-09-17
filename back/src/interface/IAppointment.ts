//import { IUser } from "../interface/IUser";

import { IUser } from "./IUser";
export enum Status {
  CANCELLED = "cancelled",
  ACTIVE = "active",
}
export interface IAppointment {
  id?: number;
  date: Date;
  time: string;
  description: string;
  userId: IUser["id"];
  status: Status;
}
