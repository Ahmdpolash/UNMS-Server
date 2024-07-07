import { Schema, model } from 'mongoose';
import validator from 'validator';

import {
  TLocalGuardian,
  TStudent,
  StudentModel,
  TUserName,
  TGuardian,
} from './student.interface';

// User Name Schema
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    // trim: true,
    // maxlength: [20, 'Max length is required'],
    // validate: {
    //   validator: (value: any) => {
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);

    //     return firstNameStr === value;
    //   },
    //   message: '{VALUE} is not a valid',
    // },
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: '{VALUE} is not a valid',
    // },
  },
});

// Guardian Schema
const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required"],
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required"],
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required'],
  },
});

// Local Guardians Schema
const localGuardiansSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  occupation: {
    type: String,
    required: [true, 'Occupation is required'],
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
});

// Student Schema
const studentSchema = new Schema<TStudent, StudentModel>({
  id: {
    type: String,
    required: [true, 'ID is required'],
    unique: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is required'],
    unique: true,
    ref: 'User',
  },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not a valid gender',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: {
    type: String,
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required'],
  },

  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    // validate: {
    //   validator: (value: string) => validator.isEmail(value),
    //   message: '{VALUE} is not a valid',
    // },
  },
  emerGencyContactNumber: {
    type: String,
    required: [true, 'Emergency contact number is required'],
  },
  bloodStatus: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood status',
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permenentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardians information is required'],
  },
  localGuardian: {
    type: localGuardiansSchema,
    required: [true, 'Local guardians information is required'],
  },
  profileImage: String,
});

//pre save middleware hook

//creating a custom static method
studentSchema.statics.isUserExist = async function (id: string) {
  const existingUser = await await Student.findOne({ id });
  return existingUser;
};

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
