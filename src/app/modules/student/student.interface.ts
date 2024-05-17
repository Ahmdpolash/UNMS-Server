
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Guardians = {
  fatherName: string;
  motherName: string;
  contactNumber: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNumber: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  contactNumber: string;
  emerGencyContactNumber: string;
  email: string;
  bloodStatus?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress?: string;
  permenentAddress?: string;
  guardians: Guardians;
  localGuardians?: Guardians;
  profileImage?: string;
  isActive?: 'active' | 'inactive';
};
