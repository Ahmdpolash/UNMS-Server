import { NextFunction, Request, RequestHandler, Response } from 'express';
import { userService } from './user.services';
import httpStatus from 'http-status';
import sentResponse from '../../utils/sentResponse';

// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const student = req.body;

//       const result = await userService.CreateStudentIntoDb(student);

//   } catch (error) {
//     console.log(error);
//   }
// };

const createStudent: RequestHandler = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  createStudent,
};
