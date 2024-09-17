import { useState } from "react";
import validateUser from "../../helpers/validateUser";
import axios from "axios";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

const POSTUSER_URL = "http://localhost:3001/users/register";
//* name, email, birthdate, nDni, username, password, confirmPassword

function Register() {
  const navigate = useNavigate();

  //*ESTADO INICIAL
  const initialState = {
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  //*ESTADOS
  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const handleChange = (event) => {
    //console.log(event.target.value)
    //console.log(event.target.name)
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validateUser({
        ...user,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //*Peticion al back
    const userData = {
      name: user.name,
      email: user.email,
      birthdate: user.birthdate,
      nDni: user.nDni,
      username: user.username,
      password: user.password,
    };
    axios
      .post(POSTUSER_URL, userData)
      .then(({ data }) => {
        //console.log(data);
        //console.loge(user);
        //*{message: "User registered"}
        alert(data.message);
        setUser(initialState);
        navigate("/login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className={styles.container}>
      <h2 style={{ color: "#DC7633" }}>Registro</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre: </label>
          <input
            id="name"
            type="text"
            name="name"
            value={user.name}
            placeholder="Ingresa tu nombre"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.name ? errors.name : null}</p>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            name="email"
            value={user.email}
            placeholder="Ingresa tu email"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.email ? errors.email : null}</p>
        </div>
        <div>
          <label htmlFor="birthdate">Fecha de nacimiento: </label>
          <input
            id="birthdate"
            type="date"
            name="birthdate"
            value={user.birthdate}
            placeholder="Ingresa tu fecha de nacimiento"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>
            {errors.birthdate ? errors.birthdate : null}
          </p>
        </div>
        <div>
          <label htmlFor="nDni">Numero de Dni: </label>
          <input
            id="nDni"
            type="text"
            name="nDni"
            value={user.nDni}
            placeholder="Ingresa tu numero de DNI"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{errors.nDni ? errors.nDni : null}</p>
        </div>
        <div>
          <label htmlFor="username">Nombre de Usuario: </label>
          <input
            id="username"
            type="text"
            name="username"
            value={user.username}
            placeholder="Ingresa tu usuario"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>
            {errors.username ? errors.username : null}
          </p>
        </div>
        <div>
          <label htmlFor="password">Contraseña: </label>
          <input
            id="password"
            type="password"
            name="password"
            value={user.password}
            placeholder="Ingresa tu contraseña"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>
            {errors.password ? errors.password : null}
          </p>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirma tu contraseña: </label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            placeholder="Confirma tu contraseña"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>
            {errors.confirmPassword ? errors.confirmPassword : null}
          </p>
        </div>
        <input
          type="submit"
          value="Registrar"
          //disabled={Object.keys(errors).some((e) => errors[e])}
          disabled={Object.keys(user).some((e) => !user[e])}
        />
      </form>
    </div>
  );
}

export default Register;
