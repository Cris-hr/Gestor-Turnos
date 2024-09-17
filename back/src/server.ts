import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/indexRouter";

const server = express();

//?Middlewares pre-build
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

//?Midlewares personalizados
server.use((req, res, next) => {
  console.log("Mi primer middleware 😎");
  next();
});

const miMiddleware = (req, res, next) => {
  console.log(
    `Hemos recibido una request de tipo ${req.method} al endpoint ${req.url}`
  );
  next();
};
server.use(miMiddleware);

server.use(router);

export default server;
