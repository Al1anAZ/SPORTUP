import z from "zod";

export const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long." })
  .refine((value) => /[A-Z]/.test(value), {
    message: "Password must contain at least one uppercase letter.",
  })
  .refine((value) => /[a-z]/.test(value), {
    message: "Password must contain at least one lowercase letter.",
  });

export const LoginSchema = z.object({
  email: z.email("Enter a valid email"),
  password: passwordSchema,
});

export const RegisterSchema = LoginSchema.extend({
  name: z.string().min(1, "Name should contain at least one character"),
  phone: z.string().regex(/^\+?[0-9]{7,15}$/, "Invalid phone number"),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
