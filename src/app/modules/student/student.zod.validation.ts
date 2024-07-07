import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(20, { message: 'First name must be 20 or fewer characters' })
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.slice(1) === value,
      {
        message: 'First name must start with an uppercase letter',
      },
    ),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim(),
});

// Guardian Schema
const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty("Father's name is required"),
  motherName: z.string().nonempty("Mother's name is required"),
  contactNumber: z.string().nonempty('Contact number is required'),
});

// Local Guardians Schema
const localGuardianValidationSchema = z.object({
  name: z.string().nonempty('Name is required'),
  occupation: z.string().nonempty('Occupation is required'),
  contactNumber: z.string().nonempty('Contact number is required'),
  address: z.string().nonempty('Address is required'),
});

// Student Schema
const studentValidationSchema = z.object({
  id: z.string().nonempty('ID is required'),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female'], {
    errorMap: () => ({ message: 'Gender must be either male or female' }),
  }),
  dateOfBirth: z.string().optional(),
  contactNumber: z.string().nonempty('Contact number is required'),
  emerGencyContactNumber: z
    .string()
    .nonempty('Emergency contact number is required'),
  email: z.string().nonempty('Email is required'),
  bloodStatus: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().nonempty('Present address is required'),
  permenentAddress: z.string().nonempty('Permanent address is required'),
  guardians: guardianValidationSchema,
  localGuardians: localGuardianValidationSchema,
  profileImage: z.string().optional(),
  isActive: z
    .enum(['active', 'inactive'], {
      errorMap: () => ({ message: 'Status must be either active or inactive' }),
    })
    .default('active'),
});

export default studentValidationSchema;
