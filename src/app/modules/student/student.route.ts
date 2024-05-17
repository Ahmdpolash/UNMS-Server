import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

//will call controller func

router.post('/create-student', studentController.createStudent);
router.get('/get-student', studentController.getStudent);
router.get('/get-student/:id', studentController.getSingleStudent);

export const studentRoutes = router;
