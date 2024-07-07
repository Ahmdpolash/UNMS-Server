import { NextFunction, Request, Response } from 'express';
import { StudentService } from './student.services';
import sentResponse from '../../utils/sentResponse';
import httpStatus from 'http-status';

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = req.params.id;
    const result = await StudentService.getSingleStudent(id);

    sentResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'single students are retrive successfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentService.getAllStudentFromDB();

    sentResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'single students are retrive successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;

    const result = await StudentService.deleteStudent(studentId);

    sentResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'student deleted successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const studentController = {
  getSingleStudent,
  getAllStudent,
  deleteStudent,
};
