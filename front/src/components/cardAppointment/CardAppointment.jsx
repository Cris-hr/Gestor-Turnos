import styles from "./CardAppointment.module.css";
export default function CardAppointment({
  id,
  date,
  time,
  description,
  status,
  user,
  handleCancelAppointment,
}) {
  date = new Date(date);
  const formatDate = `${date.getDate() + 1} / ${
    date.getMonth() + 1
  } / ${date.getFullYear()}`;

  const handleClick = () => {
    if (
      window.confirm(
        `Desea cancelar el turno del dia ${formatDate} a las ${time}?`
      )
    ) {
      handleCancelAppointment(id);
    }
  };
  return (
    <div className={styles.container}>
      <span>{formatDate}</span>
      <span>{time}</span>
      <span>{description}</span>
      {status === "active" ? (
        <span className={styles.active} onClick={handleClick}>
          Activo
        </span>
      ) : (
        <span className={styles.cancelled}>Cancelado</span>
      )}
    </div>
  );
}
