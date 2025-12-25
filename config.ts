import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
  NEXT_PUBLIC_PROTECTED_ROUTES: z
    .string()
    .default("")
    .transform((val) =>
      val
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    ),
  NEXT_PUBLIC_ADMIN_ROUTES: z
    .string()
    .default("")
    .transform((val) =>
      val
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
    ),
});

const env = envSchema.parse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_PROTECTED_ROUTES: process.env.NEXT_PUBLIC_PROTECTED_ROUTES,
  NEXT_PUBLIC_ADMIN_ROUTES: process.env.NEXT_PUBLIC_ADMIN_ROUTES
});

const config = {
  API_URL: env.NEXT_PUBLIC_API_URL,
  PROTECTED_ROUTES: env.NEXT_PUBLIC_PROTECTED_ROUTES,
  ADMIN_ROUTES: env.NEXT_PUBLIC_ADMIN_ROUTES
};

export default config;
