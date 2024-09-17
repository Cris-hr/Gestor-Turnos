import { Request, Response } from "express";
import {
  cancelAppointmentService,
  createNewAppointment,
  getAllAppointmentsService,
  getOneAppointmentsService,
} from "../services/appointmentService";
import IAppointmentDto from "../dto/appointmentDto";

export const getAppointments = async (req: Request, res: Response) => {
  try {
    const { userId } = req.query;
    const appointments = await getAllAppointmentsService(userId as string);
    res.status(200).json(appointments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//por ID
export const getAppointment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    //const appointmentId = parseInt(id);
    const appointment = await getOneAppointmentsService(Number(id));
    res.status(200).json(appointment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//crear un nuevo Appointment
export const createAppointment = async (req: Request, res: Response) => {
  try {
    const appointment: IAppointmentDto = req.body;
    const newsAppointment = await createNewAppointment(appointment);
    res
      .status(201)
      .json({ message: "Appointment created", data: newsAppointment });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
//PUT appointmrnt
export const cancelAppointment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cancelAppointment = await cancelAppointmentService(Number(id));
    res
      .status(200)
      .json({ message: "Appointment updated", data: cancelAppointment });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
