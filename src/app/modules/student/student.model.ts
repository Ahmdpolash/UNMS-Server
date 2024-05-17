import { Schema, model } from 'mongoose';
import {
  Guardians,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<Guardians>({
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  contactNumber: { type: String, required: true },
});

const localGuardiansSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
  },
  name: userNameSchema,
  gender: ['female', 'male'],
  dateOfBirth: { type: String },
  contactNumber: { type: String, required: true },
  emerGencyContactNumber: { type: String, required: true },
  email: { type: String, required: true },
  bloodStatus: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String, required: true },
  permenentAddress: { type: String, required: true },
  guardians: guardianSchema,
  localGuardians: localGuardiansSchema,
  profileImage: String,
  isActive: ['active', 'inactive'],
});

export const StudentModel = model<Student>('Student', studentSchema);
