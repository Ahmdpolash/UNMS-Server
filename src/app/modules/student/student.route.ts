import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

//will call controller func

router.post('/create-student', studentController.createStudent);
