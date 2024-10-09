import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const RegisterSchema = z.object({
  name: z.string(),
  email: z.string().email({
    message: "Email in Invalid!",
  }),
  password: z.string().min(8, {
    message: "Minimum 8 character password required!",
  }),
});
