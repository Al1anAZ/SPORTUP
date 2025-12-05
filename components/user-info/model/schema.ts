import z from "zod";
import { RegisterSchema } from "../../auth/model/schema";

export const ProfileSchema = RegisterSchema.omit({ password: true }).extend({
  address: z.string().min(1),
});

export type ProfileInput= z.infer<typeof ProfileSchema>;
