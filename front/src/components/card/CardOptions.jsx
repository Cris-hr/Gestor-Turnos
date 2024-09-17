import alcancia from "../../assets/chanchito.png";
import tarjeta from "../../assets/tarjeta.png";
import billete from "../../assets/billete.png";
import billetera from "../../assets/billetera.png";
import protegerTarjeta from "../../assets/protegerTarjeta.png";

import styles from "./CardOptions.module.css";

function CardOptions() {
  return (
    <div>
      <div className={styles.cardContainer}>
        <div>
          <h1 className={styles.title}>Abrir una Cuenta</h1>
          <img src={alcancia} alt="alcancia" />
        </div>
        <p className={styles.description}>
          Sin costo de mantenimiento. Operaciones en Canales Digitales, podrás
          realizar transferencias entre cuentas sin costo a través de Banca por
          Internet, App Banca Móvil y Yape. Retiro de dinero en cajeros y
          agentes GRATIS (a nivel nacional)
        </p>
      </div>

      <div className={styles.cardContainer}>
        <div>
          <h1 className={styles.title}>Obtener Tarjeta de Credito</h1>
          <img src={tarjeta} alt="tarjeta" />
        </div>
        <p className={styles.description}>
          Podras Realizar pagos, consultar tus movimientos, solicitar y obtener
          tu Estado de Cuenta, activar y desactivar tus compras por internet,
          compras en el extranjero y retiro de efectivo asi como tambien
          fraccionar tus compras (Nueva funcionalidad).
        </p>
      </div>

      <div className={styles.cardContainer}>
        <div>
          <h1 className={styles.title}>Solicitar un Prestamo</h1>
          <img src={billete} alt="billete" />
        </div>
        <p className={styles.description}>
          Tan Solo en 5 Simples Pasos — Nuestros Préstamos Flexibles Permiten
          Elegir el Monto y Plazo que Mejor se Adapte a Ti. Solicita tu Préstamo
          Personal desde la Web Sin Tramites ni Papeleos ¡Obtenlo hoy! Sin
          Papeleos ni Trámites. Rápido, Fácil y Seguro. Hazlo desde Casa 100%
          Online.
        </p>
      </div>

      <div className={styles.cardContainer}>
        <div>
          <h1 className={styles.title}>Adelantar mi Sueldo</h1>
          <img src={billetera} alt="billetera" />
        </div>
        <p className={styles.description}>
          ¿Cuáles son los beneficios del Adelanto de Sueldo? Desde S/ 50 hasta
          S/ 2,500, tú eliges el monto. Olvídate de los intereses y paga una
          comisión única por operación. Se debita automáticamente de tu próxima
          remuneración.
        </p>
      </div>

      <div className={styles.cardContainer}>
        <div>
          <h1 className={styles.title}>Proteger mis Tarjetas</h1>
          <img src={protegerTarjeta} alt="protegerTarjeta" />
        </div>
        <p className={styles.description}>
          Este tipo de seguro te protege frente al uso indebido de tu tarjeta,
          en casos como: fraude, asalto, robo, clonación o secuestro. Al
          realizar compras por Internet verifica que el sitio cuente con el
          protocolo de seguridad https:// y un candado cerrado en la barra de
          direcciones.
        </p>
      </div>
    </div>
  );
}

export default CardOptions;
