export default function validateAppointment({ date, time, description }) {
  const errors = {};
  //validar date
  const appointmentDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const in14Days = new Date(today);
  in14Days.setDate(today.getDate() + 14);

  if (!date) {
    errors.date = "Ingresar una fecha";
  } else {
    if (appointmentDate < today || appointmentDate > in14Days) {
      errors.date =
        "La fecha debe ser a partir de mañana hasta los proximos 14 dias";
    }
    const dayOnWeek = appointmentDate.getDay();

    if (dayOnWeek === 5 || dayOnWeek === 6) {
      errors.date = "La fecha no puede ser sabado o domingo";
    }
  }

  //Validar time
  const [hours, minutes] = time.split(":").map(Number);

  if (!time) {
    errors.time = "Ingresar la hora";
  } else {
    if (
      hours < 9 ||
      (hours === 17 && minutes > 30) ||
      hours > 17 ||
      (minutes !== 0 && minutes !== 30)
    ) {
      errors.time =
        "La hora de reserva es entre las 9:00 am y las 18:00 horas, en intervalos de media hora";
    }
  }

  if (!description) {
    errors.description = "Ingresar descripcion";
  } else {
    if (description.length < 5) {
      errors.description = "Descripcion de almenos 5 caracteres";
    }
    if (description.length > 25) {
      errors.description = "Descripcion no mas de 25 caracteres";
    }
  }

  return errors;
}

console.log(
  validateAppointment({
    date: "2024-06-17",
    time: "14:30",
    description: "Apertura de cuenta free",
  })
);
