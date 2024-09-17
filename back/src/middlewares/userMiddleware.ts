import { Request, Response, NextFunction } from "express";

const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, birthdate, nDni, username, password } = req.body;

  if (
    name === "" ||
    email === "" ||
    birthdate === "" ||
    nDni === "" ||
    username === "" ||
    password === ""
  ) {
    return res.status(400).json({
      error: "Debes llenar todos los campos",
    });
  }
  next();
};

export default userMiddleware;
