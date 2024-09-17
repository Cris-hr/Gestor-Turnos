import { AppDataSource } from "../config";
import IAppointmentDto from "../dto/appointmentDto";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";
import { Status } from "../interface/IAppointment";

// let turnos: IAppointment[] = [];
// let id = 1;
const appointmentRepositoryLocal = AppDataSource.getRepository(Appointment);

export const getAllAppointmentsService = async (
  userId: string
): Promise<Appointment[]> => {
  try {
    //*con repositorio
    const appointments = await appointmentRepositoryLocal.find({
      where: userId ? { user: { id: Number(userId) } } : {},
      relations: ["user"],
    });
    if (appointments.length === 0) {
      throw new Error("No appointments found");
    }
    return appointments;
  } catch (error) {
    throw new Error(error);
  }
};
//por ID
export const getOneAppointmentsService = async (
  id: number
): Promise<Appointment> => {
  try {
    //*con repositorio
    const appointmentById = await appointmentRepositoryLocal.findOne({
      where: { id },
      relations: ["user"],
    });
    if (!appointmentById) {
      throw new Error("Appointment not found");
    }

    return appointmentById;
  } catch (error) {
    throw new Error(error);
  }
};
//POST
export const createNewAppointment = async (appointment: IAppointmentDto) => {
  try {
    //*con repositorio
    const user = await AppDataSource.getRepository(User).findOne({
      where: { id: appointment.userId },
    });
    if (!user) {
      throw new Error("User for this appointment not found");
    }

    const app = {
      date: appointment.date,
      time: appointment.time,
      description: appointment.description,
    };
    const newAppointment = await appointmentRepositoryLocal.save({
      ...app,
      user,
    });
    if (!newAppointment) {
      throw new Error("Appointment not created");
    }
    return newAppointment;
  } catch (error) {
    throw new Error(error);
  }
};
//PUT
export const cancelAppointmentService = async (id: number) => {
  try {
    //*con repositorio
    const canceltAppointment = await appointmentRepositoryLocal.findOne({
      where: { id },
      relations: ["user"],
    });
    if (!canceltAppointment) {
      throw new Error("Appointment not found");
    }
    const updatedAppointment = await AppDataSource.getRepository(
      Appointment
    ).save({ ...canceltAppointment, status: Status.CANCELLED });
    if (!updatedAppointment) {
      throw new Error("Appointment not cancelled");
    }
    return updatedAppointment;
  } catch (error) {
    throw new Error(error);
  }
};
