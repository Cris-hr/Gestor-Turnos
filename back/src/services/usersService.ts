import ICredentialDto from "../dto/credentialDto";
import IUserDto from "../dto/userDto";
import { IUser } from "../interface/IUser";
import { createCredential } from "./credentialService";
import { AppDataSource } from "../config";
import { User } from "../entities/User";
import { Credential } from "../entities/Credential";

//let usuarios: IUser[] = [];
//let id = 1;
const userRepositoryLocal = AppDataSource.getRepository(User);

export const getAllUserService = async (): Promise<User[]> => {
  try {
    //*sin repositorio
    //const users = await AppDataSource.manager.find(User);
    //*con repositorio
    const users: User[] = await userRepositoryLocal.find({
      //relations:{appointments:true}
      relations: ["appointments"],
    });
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

export const getOneUserService = async (id: number): Promise<User> => {
  try {
    //*sin repositorio
    //const user = await AppDataSource.manager.findOneBy(User, { id });
    //*con repositorio
    const user: User | null = await userRepositoryLocal.findOne({
      where: { id },
      relations: ["appointments"],
    });
    if (!user) throw new Error("User not found");
    return user;
  } catch (error) {
    throw new Error(error);
  }
};
//post de usuarios registrados
export const createUserService = async (
  user: IUserDto,
  credential: ICredentialDto
): Promise<User> => {
  try {
    //*con repositorio
    const newUser: User = await userRepositoryLocal.save({
      name: user.name,
      email: user.email,
      birthdate: user.birthdate,
      nDni: user.nDni,
    });

    const credentialId: Credential = await createCredential({
      username: credential.username,
      password: credential.password,
      userId: newUser.id,
    });
    newUser.credentials = credentialId;
    await userRepositoryLocal.save(newUser);

    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

export const findUserByCredentialId = async (credentialsId: number) => {
  const user: User | null = await AppDataSource.getRepository(User).findOneBy({
    credentials: { id: credentialsId },
    //{id:credentialsId}
  });
  //console.log(credentialsId);
  if (!user) throw new Error("usuario no encontrado");
  return user;
};
