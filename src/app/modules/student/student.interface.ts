import { Model, Types } from 'mongoose';

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TGuardians = {
  fatherName: string;
  motherName: string;
  contactNumber: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNumber: string;
  address: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;

  name: TUserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  contactNumber: string;
  emerGencyContactNumber: string;
  email: string;
  bloodStatus?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress?: string;
  permenentAddress?: string;
  guardians: TGuardians;
  localGuardians?: TLocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
};

//for creating statics
export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}

//for creating instance

// export type StudentMethod = {
//   isUserExist(id: string): Promise<TStudent | null>;
// };

// export type StudentModel = Model<TStudent, {}, StudentMethod>;
