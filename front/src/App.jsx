import Navbar from "./components/navbar/Navbar";
import Appointments from "./views/appointments/Appointments";
import Login from "./views/login/Login";
import Register from "./views/register/Register";
import Home from "./views/home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./views/about/About";
import LandingPage from "./views/landing/LandingPage";
import ErrorPage from "./views/errorPage/ErrorPage";
import CreateAppointment from "./views/formAppointment/CreateAppointment";
//import CreateAppointment from "./views/appointments/createAppointment";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/reservar" element={<CreateAppointment />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
