import { Request, Response } from 'express';
import { studentService } from './student.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;

    const result = await studentService.createStudentIntoDb(student);

    res.status(200).json({
      success: true,
      message: 'student created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudent();
    res.status(200).json({
      success: true,
      message: 'students are retrive successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
      const result = await studentService.getSingleStudent(id);
      
    res.status(200).json({
      success: true,
      message: 'single students are retrive successfully',
      data: result,
    });
      
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  createStudent,
  getStudent,
  getSingleStudent,
};
