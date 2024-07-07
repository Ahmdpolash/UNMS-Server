import { Router } from 'express';
import { studentRoutes } from '../modules/student/student.route';
import { UserRoute } from '../modules/user/user.route';

const router = Router();

const moduleRouter = [
  {
    path: '/users',
    routes: UserRoute,
  },
  {
    path: '/students',
    routes: studentRoutes,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.routes));

export default router;
