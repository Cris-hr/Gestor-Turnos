import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.container}>
      <h1 style={{ color: "#DC7633" }}>Bienvenid@</h1>
      <p>Tu banca de confianza Secure_Bank</p>
      <hr />
      <h2>¿Es tu primera vez en nuestra App?</h2>
      <Link to="/register">
        <button>Registrarse</button>
      </Link>

      <h2>¿Ya tienes una cuenta?</h2>
      <Link to="/login">
        <button>Iniciar sesion</button>
      </Link>
    </div>
  );
}

export default LandingPage;
