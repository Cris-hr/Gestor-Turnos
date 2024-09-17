import React from "react";
import styles from "./About.module.css";
function About() {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <h2>Sobre Nosotros</h2>
          <hr />
        </div>
        <p>
          Secure_Bank es un banco peruano, fundado en 1889. Es propiedad del
          conglomerado financiero CopPerú. Secure_Bank es considerado la entidad
          bancaria más grande del país. Entre los servicios que ofrece se
          encuentran financiamientos para comercio exterior, arrendamiento,
          seguros y asesoría financiera.
        </p>
      </div>

      <div>
        <div>
          <h2>Contactanos</h2>
          <hr />
        </div>
        <p>Atención al cliente: +51 1 0110890 </p>
        <p>Oficinas centrales: Lima -Perú</p>
      </div>
    </div>
  );
}

export default About;
