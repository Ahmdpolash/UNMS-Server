import { NextFunction, Request, RequestHandler, Response } from 'express';
import { userService } from './user.services';
import httpStatus from 'http-status';
import sentResponse from '../../utils/sentResponse';
import catchAsync from '../../utils/catchAsync';

// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const student = req.body;

//       const result = await userService.CreateStudentIntoDb(student);

//   } catch (error) {
//
//   }
// };

const createStudent = catchAsync(async (req, res, next) => {
  const { password, student } = req.body;
  const result = await userService.CreateStudentIntoDb(password, student);

  // res.status(200).json({
  //   success: true,
  //   message: 'student created successfully',
  //   data: result,
  // });

  sentResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student created successfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
};
