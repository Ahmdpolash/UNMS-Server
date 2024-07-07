import express, { Application } from 'express';
import cors from 'cors';
import { Request, Response, NextFunction } from 'express';
import { studentRoutes } from './app/modules/student/student.route';
import { UserRoute } from './app/modules/user/user.route';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
const app: Application = express();

//parser

app.use(express.json());
app.use(cors());

//routes

app.use('/api/v1/students', studentRoutes);
app.use('/api/v1/users/', UserRoute);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

//not found
app.use(notFound);
//global error handler
app.use(globalErrorHandler);

export default app;
