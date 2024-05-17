import express, { Application } from "express";
import cors from "cors";
import { Request, Response } from "express";
import { studentRoutes } from "./app/modules/student/student.route";
const app: Application = express();

//parser

app.use(express.json());
app.use(cors());

//router

app.use('/api/v1/students', studentRoutes)



app.get("/", (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

export default app;
