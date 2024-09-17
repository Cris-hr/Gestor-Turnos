import { Router, Request, Response } from "express";
import appointmentRouter from "./appointmentsRouter";
import userRouter from "./usersRouter";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello world");
});
router.use("/users", userRouter);
router.use("/appointments", appointmentRouter);

export default router;
