import { Router } from "express";
import {
  cancelAppointment,
  createAppointment,
  getAppointment,
  getAppointments,
} from "../controllers/appointmentsController";
import appointmentMiddleware from "../middlewares/appointmentMiddleware";

const appointmentRouter: Router = Router();

appointmentRouter.get("/", getAppointments);
appointmentRouter.get("/:id", getAppointment);
appointmentRouter.post("/schedule", appointmentMiddleware, createAppointment);
appointmentRouter.put("/cancel/:id", cancelAppointment);

export default appointmentRouter;
