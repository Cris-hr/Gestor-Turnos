import { AppDataSource } from "../config";
import { Credential } from "../entities/Credential";
import { ICredential } from "../interface/ICredential";
import { encryptPassword, comparePassword } from "../utils";

//let credentials: ICredential[] = [];
//let id: number = 1;

//usuario en el register
export const createCredential = async ({
  username,
  password,
}: //Promise<number | undefined>
ICredential): Promise<Credential> => {
  try {
    const hash: string = encryptPassword(password);
    // const newCred = await AppDataSource.manager.save(Credential, {
    //   username,
    //   password: hash,
    // });
    //*con repositorio
    const newCred: Credential = await AppDataSource.getRepository(
      Credential
    ).save({
      username,
      password: hash,
    });
    //console.log(newCred);
    return newCred;
    //return newCrede.id
  } catch (error) {
    throw new Error(error);
  }
};

//usuario en el login
export const chekedCredential = async (
  username: string,
  password: string
): Promise<number> => {
  try {
    //*con repositorio
    const credential: Credential | null = await AppDataSource.getRepository(
      Credential
    ).findOne({
      where: { username },
      select: ["id", "password", "username"],
    });
    //console.log(credential);
    if (!credential) {
      throw new Error("Invalid credentials");
    }
    const isValid = comparePassword(password, credential.password);
    console.log(isValid);
    if (!isValid) {
      throw new Error("Invalid credentials");
    }
    return credential.id;
    //return credential.id
  } catch (error) {
    throw new Error(error);
  }
};
