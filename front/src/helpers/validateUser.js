export default function validateUser(user) {
  const passwordRegexp = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
  const emailRegexp = /\S+@\S+\.\S+/;
  const errors = {};

  if (!user.name) {
    errors.name = "Ingresar un nombre";
  } else {
    if (user.name.length < 4) errors.name = "Nombre de almenos 4 caracteres";
  }
  if (!user.email) {
    errors.email = "Ingresar un email";
  } else {
    if (!emailRegexp.test(user.email)) {
      errors.email = "Debe ser un email valido";
    }
  }
  if (!user.birthdate) {
    errors.birthdate = "Ingresar fecha de nacimiento";
  }
  if (!user.nDni) {
    errors.nDni = "Ingresar un numero de DNI";
  }

  if (!user.username) {
    errors.username = "Ingresar un username";
  }

  if (!user.password) {
    errors.password = "Debe ingresar un password";
  } else {
    if (user.password.length < 4) {
      errors.password = "Contraseña de al menos 4 caracteres";
    }
    if (user.password.length > 6) {
      errors.password = "Contraseña no debe tener mas de 6 caracteres";
    }
    if (!passwordRegexp.test(user.password)) {
      errors.password =
        "La password debe contener almenos una letra y un numero";
    }
  }
  if (user.confirmPassword !== user.password) {
    errors.confirmPassword = "Debe ser igual a la contraseña ingresada";
  }

  return errors;
}

console.log(
  validateUser({
    name: "cris",
    email: "hola@gmail.com",
    birthdate: "30-01-1988",
    nDni: "421245",
    username: "hola",
    password: "abcde1",
    confirmPassword: "abcde1",
  })
);
