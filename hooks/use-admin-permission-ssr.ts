import { cookies } from "next/headers";
import { decodeJwt } from "../utils/decode-jwt";
import { UserRole } from "../types/user";

export const useAdminPermissionSSR = async () => {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get("refreshToken");

  const token = tokenCookie?.value;
  if (!token) return { allowed: false };

  try {
    const payload = decodeJwt(token);
    return { allowed: payload?.role === UserRole.ADMIN };
  } catch {
    return { allowed: false };
  }
};
