import logo from "../../assets/logo2.png";
import avatar from "../../assets/avatar.png";
import styles from "./Navbar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/userSlice";

export default function Navbar() {
  const { pathname } = useLocation();
  const loggin = useSelector((state) => state.actualUser.userData.loggin);
  //loggin = true || false

  //* FUNCION PARA EL DESLOGUEO
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    const confirm = window.confirm("Seguro que quiere cerrar sesion?");
    if (confirm) {
      dispatch(setUserData({ loggin: false, user: { id: false } }));
      navigate("/");
    }
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logoSection}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.linkSection}>
        {pathname !== "/reservar" && pathname !== "/appointments" ? (
          <Link to="/home">
            <span>HOME</span>
          </Link>
        ) : null}

        {pathname !== "/reservar" && pathname !== "/appointments" ? (
          <Link to="/about">
            <span>ACERCA DE</span>
          </Link>
        ) : null}

        {/* {pathname !== "/" &&
        pathname !== "/reservar" &&
        pathname !== "/appointments" ? (
          <Link to="/">
            <span>INICIO</span>
          </Link>
        ) : null} */}

        {loggin &&
        pathname !== "/" &&
        pathname !== "/login" &&
        pathname !== "/about" &&
        pathname !== "/home" &&
        pathname !== "/register" ? (
          <Link to="/reservar">
            <span>RESERVAR</span>
          </Link>
        ) : null}

        {loggin &&
        pathname !== "/" &&
        pathname !== "/login" &&
        pathname !== "/about" &&
        pathname !== "/home" &&
        pathname !== "/register" ? (
          <Link to="/appointments">
            <span>TURNOS</span>
          </Link>
        ) : null}

        {/* {pathname !== "/" &&
        pathname !== "/about" &&
        pathname !== "/home" &&
        pathname !== "/login" &&
        pathname !== "/register" ? (
          <Link to="/">
            <span>CERRAR SESION</span>
          </Link>
        ) : null} */}

        {loggin ? (
          <Link to="/">
            <span onClick={handleLogout}>CERRAR SESION</span>
          </Link>
        ) : (
          <Link to="/">
            <span>INICIO</span>
          </Link>
        )}
      </div>
      <div className={styles.avatarSection}>
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
}
