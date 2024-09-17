import { useState } from "react";
import styles from "./Login.module.css";
import validateUserPass from "../../helpers/validateUserPass";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";

const POSTUSER_URL = "http://localhost:3001/users/login";
//* username, password

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //*ESTADO INICIAL
  const initialState = {
    username: "",
    password: "",
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
      validateUserPass({
        ...user,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //*Peticion al back
    const userData = {
      username: user.username,
      password: user.password,
    };
    axios
      .post(POSTUSER_URL, userData)
      .then(({ data }) => {
        //console.log(data);
        dispatch(setUserData(data));
        //*{message: "true"}
        alert("Usuario logueado");
        setUser(initialState);
        navigate("/reservar");
      })
      .catch((error) => alert(error?.response?.data?.message));
    //.catch((error) => console.loge(error));
  };

  return (
    <div className={styles.container}>
      <h2 style={{ color: "#DC7633" }}>Login</h2>
      <hr />
      <form onSubmit={handleSubmit}>
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
        <input
          type="submit"
          value="Loguear"
          //disabled={Object.keys(errors).some((e) => errors[e])}
          disabled={Object.keys(user).some((e) => !user[e])}
        />
      </form>
    </div>
  );
}

export default Login;
