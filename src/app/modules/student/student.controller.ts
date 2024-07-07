import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentService } from './student.services';
import sentResponse from '../../utils/sentResponse';
import httpStatus from 'http-status';

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

 

const getSingleStudent = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await StudentService.getSingleStudent(id);

  sentResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single students are retrive successfully',
    data: result,
  });
});



const getAllStudent = catchAsync(async (req, res, next) => {
  const result = await StudentService.getAllStudentFromDB();

  sentResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single students are retrive successfully',
    data: result,
  });
});



const deleteStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;

  const result = await StudentService.deleteStudent(studentId);

  sentResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student deleted successfully',
    data: result,
  });
});

export const studentController = {
  getSingleStudent,
  getAllStudent,
  deleteStudent,
};
