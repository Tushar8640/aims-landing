import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import config from "./config";

process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("🍁🍁🍁 DB connected successfully");
    const server = app.listen(config.port, () => {
      console.log(`❤️❤️ Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

process.on("SIGTERM", () => {
  console.log("SIGTERM is received");
  if (server) {
    server.close();
  }
});
