import { useEffect, useState } from "react";
import axios from "axios";
import validateAppointment from "../../helpers/validateAppointment";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./CreateAppointment.module.css";

const POSTAPPOINTMENT_URL = "http://localhost:3001/appointments/schedule";
//* date, time, description

function CreateAppointment() {
  //Hooks
  const navigate = useNavigate();
  const userId = useSelector((state) => state.actualUser?.userData.user.id);

  //*Redirigimos a /home si no esta logueado
  useEffect(() => {
    if (!userId) {
      navigate("/home");
    }
  }, [userId, navigate]);

  //*ESTADO INICIAL
  const initialState = {
    date: "",
    hours: "09",
    minutes: "00",
    description: "",
  };

  //*ESTADOS LOCALES
  const [appointment, setAppointment] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  //*HANDLERS
  const handleChange = (event) => {
    setAppointment({
      ...appointment,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validateAppointment({
        ...appointment,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //*Peticion al back
    const appointmentData = {
      date: appointment.date,
      time: `${appointment.hours}:${appointment.minutes}`,
      description: appointment.description,
      userId,
    };
    axios
      .post(POSTAPPOINTMENT_URL, appointmentData)
      .then(({ data }) => {
        //*{message: "Appointment created"}
        alert(data.message);
        setAppointment(initialState);
        navigate("/appointments");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className={styles.container}>
      <h2 style={{ color: "#DC7633" }}>Reserva un Turno:</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Fecha: </label>
          <input
            id="date"
            type="date"
            name="date"
            value={appointment.date}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.date ? errors.date : null}</p>
        </div>
        <div>
          <label htmlFor="time">Hora: </label>
          <input
            id="time"
            type="time"
            name="time"
            value={appointment.time}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.time ? errors.time : null}</p>
        </div>
        <div>
          <label htmlFor="description">Descripcion: </label>
          <input
            id="description"
            type="text"
            name="description"
            value={appointment.description}
            placeholder="Ingresar descripcion..."
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>
            {errors.description ? errors.description : null}
          </p>
        </div>
        <input
          type="submit"
          value="Enviar"
          //disabled={Object.keys(appointment).some((e) => !appointment[e])}
          disabled={Object.keys(errors).some((e) => errors[e])}
        />
      </form>
    </div>
  );
}

export default CreateAppointment;
