import { Request, Response } from 'express';
import { studentService } from './student.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;

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

export const studentController = { createStudent };
