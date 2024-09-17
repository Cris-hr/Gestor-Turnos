import { PORT, HOST, PROTO, DB_PORT } from "./config";
import "reflect-metadata";
import { AppDataSource } from "./config";
import server from "./server";

AppDataSource.initialize()
  .then((res) => {
    console.log(`Database connected on port ${DB_PORT}`);
    server.listen(PORT, HOST, () => {
      console.log(`server listening on ${PROTO}://${HOST}:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
