import config from '../../config';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.models';

const CreateStudentIntoDb = async (password: string, student: TStudent) => {
  //create a user object

  const user: Partial<TUser> = {};

  //if pass not given, then use default pass
  user.password = password || (config.default_password as string);

  //set student role
  user.role = 'student';

  //set manually id
  user.id = '2024100001';
  //create a user

  const newUser = await User.create(user);

  //create a student

  if (Object.keys(newUser).length) {
    // set id , _id as user
    student.id = newUser.id;
    student.user = newUser._id; //reference _id

    const newStudent = await Student.create(student);
    return newStudent;
  }
};

export const userService = {
  CreateStudentIntoDb,
};
