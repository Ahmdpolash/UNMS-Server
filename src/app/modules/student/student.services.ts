import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDb = async (studentData: TStudent) => {
  const result = await Student.create(studentData); // built in static methods

  //static
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('User already exist');
  }

  return result;
};

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudent = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

const deleteStudent = async (id: string) => {
  const result = await Student.findByIdAndDelete({ id });
  return result;
};

export const StudentService = {
  createStudentIntoDb,
  getAllStudentFromDB,
  getSingleStudent,
  deleteStudent,
};
