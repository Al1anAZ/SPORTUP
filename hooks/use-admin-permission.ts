import { useAuthStore } from "../store/auth.store";
import { UserRole } from "../types/user";

export const useAdminPermission = () => {
  const role = useAuthStore((state) => state.user?.role);

  return {
    allowed: role === UserRole.ADMIN,
  };
};