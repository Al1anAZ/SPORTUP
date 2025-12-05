"use client";
import { useForm } from "react-hook-form";
import { useAuthStore } from "../../store/auth.store";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon, CloseIcon, EditIcon } from "../icons";
import { Button } from "../ui/button";
import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../../services/auth";
import { AxiosError } from "axios";
import { ApiError } from "../../types/api-response";
import { toastError, toastSuccess } from "../../lib/toast";
import { useRouter } from "next/navigation";
import { ROUT } from "../../constants";
import { useState } from "react";
import { ProfileInput, ProfileSchema } from "./model/schema";
import { EditableField } from "../../types/user";
import { userInfofields } from "./data/user-info.data";
import { UserService } from "../../services/user";

export const UserInfo = () => {
  const router = useRouter();
  const { user, updateUser, logout } = useAuthStore((state) => state);
  const [editableField, setEditableField] = useState<null | EditableField>(
    null
  );
  const {
    register,
    reset,
    formState: { dirtyFields, errors },
    setFocus,
    trigger,
    getValues,
  } = useForm<ProfileInput>({
    resolver: zodResolver(ProfileSchema),
    values: user ?? undefined,
  });

  const {
    mutate: logoutUser,
    isPending: isPendingLogout,
    reset: resetLogoutMutation,
  } = useMutation({
    mutationFn: AuthService.logout,
    onError: (errors: AxiosError<ApiError>) => {
      resetLogoutMutation();
      toastError(errors.response?.data.message);
    },
    onSuccess: () => {
      router.replace(ROUT.HOME);
      logout();
      toastSuccess("Logout Successful");
    },
  });

  const {
    mutateAsync: updateUserFields,
    isPending: isPendingUpdateUserFields,
    reset: resetUpdateUserFiledsMutation,
  } = useMutation({
    mutationFn: UserService.updateUserData,
    onError: (errors: AxiosError<ApiError>) => {
      resetUpdateUserFiledsMutation();
      toastError(errors.response?.data.message);
    },
    onSuccess: (data) => {
      updateUser(data);
      resetUpdateUserFiledsMutation();
      toastSuccess("User info updated Successful");
    },
  });

  const handleSubmitSingleField = async (field: EditableField) => {
    const isValid = await trigger(field);

    if (!isValid) return;
    if (!dirtyFields[field]) return;

    const value = getValues(field);

    await updateUserFields({
      [field]: value,
    });

    setEditableField(null);
  };

  const handleEditFiled = (editField: EditableField) => {
    setEditableField(editField);
    setTimeout(() => {
      setFocus(editField);
    }, 0);
  };

  const handleResetEdit = () => {
    reset();
    setEditableField(null);
  };

  const handleLogoutUser = () => {
    logoutUser();
  };

  return (
    <form
      className="grid grid-cols-2 gap-6"
      method="PATCH"
      aria-label="User Profile Info Form"
    >
      {userInfofields.map((field) => (
        <Input key={field.key}>
          <Input.Label>{field.label}</Input.Label>
          <Input.Field
            disabled={editableField !== field.key}
            {...register(field.key, {
              onBlur: () => {
                if (editableField === field.key) {
                  handleResetEdit();
                }
              },
            })}
          />
          {errors[field.key] && (
            <Input.Error>{errors[field.key]?.message}</Input.Error>
          )}
          {field?.hint && <Input.Hint>{field?.hint}</Input.Hint>}
          <Input.RightSlot>
            {editableField === field.key ? (
              <>
                {dirtyFields[field.key] && (
                  <Button
                    variant="icon"
                    type="button"
                    disabled={isPendingUpdateUserFields}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleSubmitSingleField(field.key)}
                  >
                    <CheckIcon width={20} height={24} />
                  </Button>
                )}
                <Button variant="icon" type="button" onClick={handleResetEdit}>
                  <CloseIcon width={15} height={24} />
                </Button>
              </>
            ) : (
              <Button
                variant="icon"
                type="button"
                onClick={() => handleEditFiled(field.key)}
              >
                <EditIcon width={24} height={24} />
              </Button>
            )}
          </Input.RightSlot>
        </Input>
      ))}
      <Button
        type="button"
        variant="outline"
        className="col-span-2"
        loading={isPendingLogout}
        onClick={handleLogoutUser}
      >
        Logout
      </Button>
    </form>
  );
};
