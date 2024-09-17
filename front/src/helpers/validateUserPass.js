export default function validateUserPass(user) {
  const errors = {};

  if (!user.username) {
    errors.username = "Ingresar un username";
  }

  if (!user.password) {
    errors.password = "Ingresar un password";
  }

  return errors;
}

console.log(
  validateUserPass({
    username: "hola",
    password: "abcde1",
  })
);
