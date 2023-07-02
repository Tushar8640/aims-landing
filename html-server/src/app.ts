import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status";
import globalErrorHandler from "./app/middlewares/globalErrorHangler";
import router from "./app/routes";
const app = express();

// use cors
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("hello ");
  res.send("Hello World!");
});

app.use("/api/v1", router);

//global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "API route Not Found",
      },
    ],
  });
  next();
});
export default app;
