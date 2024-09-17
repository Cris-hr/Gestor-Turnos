import { useEffect } from "react";
import CardAppointment from "../../components/cardAppointment/CardAppointment";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserAppointments } from "../../redux/userSlice";

//const GETAPPOINTMENTSURL = "http://localhost:3001/appointments";
const GETUSER_IDURL = "http://localhost:3001/users/";
const PUTCANCEL_URL = "http://localhost:3001/appointments/cancel/";

export default function Appointments() {
  //traemos el id del usuario logueado:
  const actualUserId = useSelector(
    (state) => state.actualUser.userData.user.id
  );
  //traer usuario por id y despachar sus turnos
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(GETUSER_IDURL + actualUserId)
      .then((response) => response.data)
      .then((actualUser) => {
        dispatch(setUserAppointments(actualUser.appointments));
      })
      .catch((error) => console.log(error.message));
  }, [actualUserId, dispatch]);

  //*traer los turnos del estado global
  const appointments = useSelector(
    (state) => state.actualUser.userAppointments
  );
  //usuario deslogueado no pueda entrar a /appointments por la url
  const loggin = useSelector((state) => state.actualUser.userData.loggin);
  const navigate = useNavigate();
  useEffect(() => {
    !loggin && navigate("/home");
  }, [loggin]);

  const handleCancelAppointment = (appointmentId) => {
    axios
      .put(PUTCANCEL_URL + appointmentId)
      .then((response) => response.data)
      .then((data) => {
        //*actualizar turnos desde el back
        axios
          .get(GETUSER_IDURL + actualUserId)
          .then((response) => response.data.appointments)
          .then((appointments) => dispatch(setUserAppointments(appointments)))
          .catch((error) => console.log(error.message));
      });
  };
  return (
    <div>
      <h1 style={{ color: "#DC7633" }}>Mis reservas</h1>
      {appointments.map((appointment) => (
        <CardAppointment
          key={appointment.id}
          id={appointment.id}
          date={appointment.date}
          time={appointment.time}
          description={appointment.description}
          status={appointment.status}
          user={appointment.user}
          handleCancelAppointment={handleCancelAppointment}
        />
      ))}
    </div>
  );
}
