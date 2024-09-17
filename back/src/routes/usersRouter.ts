import { Router } from "express";
import {
  createUser,
  getUserId,
  getUsers,
  userLogin,
} from "../controllers/usersController";
import userMiddleware from "../middlewares/userMiddleware";

const userRouter: Router = Router();
// /users/
userRouter.get("/", getUsers);
// /users/2
userRouter.get("/:id", getUserId);
// /users/register
userRouter.post("/register", userMiddleware, createUser);
// /users/login
userRouter.post("/login", userLogin);

export default userRouter;
