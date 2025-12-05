import { useForm } from "react-hook-form";
import { Input } from "../../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInput, LoginSchema } from "../model/schema";
import { Button } from "../../ui/button";
import { useMutation } from "@tanstack/react-query";
import { toastError, toastSuccess } from "../../../lib/toast";
import { AuthService } from "../../../services/auth";
import { AxiosError } from "axios";
import { ApiError } from "../../../types/api-response";
import { useAuthStore } from "../../../store/auth.store";
import { useAuthModal } from "../../../providers/auth-modal-provider";

export const LoginForm = () => {
  const { login, init } = useAuthStore();
  const { closeModal } = useAuthModal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
  });

  const {
    mutate,
    isPending,
    reset: resetMutation,
  } = useMutation({
    mutationFn: AuthService.login,
    onError: (errors: AxiosError<ApiError>) => {
      resetMutation();
      toastError(errors.response?.data?.message);
    },
    onSuccess: (data) => {
      login(data);
      init();
      closeModal();
      reset();
      resetMutation();
      toastSuccess("Login Successful");
    },
  });

  const handleLogin = (data: LoginInput) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      method="POST"
      aria-label="Login Form"
      className="flex flex-col gap-4"
    >
      <Input>
        <Input.Label>Email Address</Input.Label>
        <Input.Field placeholder="example@gmail.com" {...register("email")} />
        {errors.email && <Input.Error>{errors.email?.message}</Input.Error>}
      </Input>
      <Input>
        <Input.Label>Password</Input.Label>
        <Input.Field placeholder="********" {...register("password")} />
        {errors.password && (
          <Input.Error>{errors.password?.message}</Input.Error>
        )}
        <Input.RightSlot className="top-7">
          <Input.PasswordToggle />
        </Input.RightSlot>
      </Input>
      <Button type="submit" loading={isPending}>
        Login
      </Button>
    </form>
  );
};
