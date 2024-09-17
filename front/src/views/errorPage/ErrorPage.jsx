//import React from "react";

// function ErrorPage() {
//   return <div>404 / Not Found</div>;
// }

// export default ErrorPage;

import { useNavigate } from "react-router-dom";
import styles from "./ErrorPage.module.css";
import { useEffect, useState } from "react";
import notfound from "../../assets/not-found.png";

export default function ErrorPage() {
  const navigate = useNavigate();
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    //* setTimeout(callback, milisegundos);
    const timeDown = setTimeout(() => {
      if (countDown === 1) navigate("/");
      setCountDown((countDown) => countDown - 1);
    }, 1000);
    return () => clearTimeout(timeDown);
  }, [countDown]);

  useEffect(
    () => () => {
      setCountDown(5);
    },
    []
  );

  return (
    <div className={styles.container}>
      <h1>404</h1>
      <hr />
      <h2>No hay nada en esta URL</h2>
      <h3>Redirigiendo a pagina principal en {countDown} segundos</h3>
      <img src={notfound} alt="404 - Not Found" />
    </div>
  );
}
