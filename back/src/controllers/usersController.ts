import { Request, Response } from "express";
import {
  createUserService,
  findUserByCredentialId,
  getAllUserService,
  getOneUserService,
} from "../services/usersService";
import { chekedCredential } from "../services/credentialService";
import { User } from "../entities/User";
import { ICredential } from "../interface/ICredential";
import { Credential } from "../entities/Credential";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getAllUserService();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.mesage });
  }
};
export const getUserId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = parseInt(id);
    const oneUser = await getOneUserService(userId);
    if (oneUser) res.status(200).json(oneUser);
    else res.status(404).json({ message: "usuario no encontrado" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createUser = async (req: Request, res: Response) => {
  try {
    //const usuario = req.body;
    const userDTO = {
      name: req.body.name,
      email: req.body.email,
      birthdate: req.body.birthdate,
      nDni: req.body.nDni,
    };
    const credentialDTO = {
      username: req.body.username,
      password: req.body.password,
    };

    const newUser = await createUserService(userDTO, credentialDTO);
    res.status(201).json({ message: "User registered", user: userDTO });
  } catch (error) {
    res.status(400).json({ message: "Falta algun campo requerido " });
  }
};
export const userLogin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const credential = await chekedCredential(username, password);
    console.log(credential);

    const user: User | null = await findUserByCredentialId(credential);
    res.status(200).json({
      loggin: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        nDni: user.nDni,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
