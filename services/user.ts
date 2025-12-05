import { User } from "../types/user";
import { api } from "../lib/axios-client";

export const UserService = {
  getUserData: async () => {
    const userData = await api.get<User>("/user");
    return userData.data;
  },
  updateUserAvatar: async (formData: FormData) => {
    const response = await api.patch<{ avatarUrl: string }>(
      "/user/avatar",
      formData
    );
    return response.data;
  },
  updateUserData: async (dataToUpdate: Partial<User>) => {
    const newUserData = await api.patch<User>("/user", dataToUpdate);
    return newUserData.data;
  },
};
