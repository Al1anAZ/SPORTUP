import { UserRole } from "../types/user";

export const  decodeJwt = (token: string): { userId: number, role: UserRole} | null => {
    try {
      return JSON.parse(
        Buffer.from(token.split(".")[1], "base64").toString()
      );
    } catch {
      return null;
    }
  }