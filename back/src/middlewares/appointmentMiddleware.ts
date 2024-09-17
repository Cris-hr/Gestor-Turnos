import { Request, Response, NextFunction } from "express";

const appointmentMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { date, time } = req.body;

  //validar date
  const appointmentDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const in14Days = new Date(today);
  in14Days.setDate(today.getDate() + 14);

  if (appointmentDate < today || appointmentDate > in14Days) {
    return res.status(400).json({
      error: "La fecha debe ser a partir de mañana hasta los proximos 14 dias",
    });
  }

  const dayOnWeek = appointmentDate.getDay();
  if (dayOnWeek === 5 || dayOnWeek === 6) {
    return res
      .status(400)
      .json({ error: "La fecha no puede ser sabado o domingo" });
  }
  //Validar time
  const [hours, minutes] = time.split(":").map(Number);
  if (
    hours < 9 ||
    (hours === 17 && minutes > 0) ||
    hours > 17 ||
    (minutes !== 0 && minutes !== 30)
  ) {
    return res.status(400).json({
      error:
        "La hora de reserva es a partir de 9:00 am y las 17:00 horas, en intervalos de media hora",
    });
  }
  next();
};

export default appointmentMiddleware;
