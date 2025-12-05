import { useForm } from "react-hook-form";
import { RegisterInput, RegisterSchema } from "../model/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../../../services/auth";
import { AxiosError } from "axios";
import { ApiError } from "../../../types/api-response";
import { toastError, toastSuccess } from "../../../lib/toast";
import { useAuthStore } from "../../../store/auth.store";
import { useAuthModal } from "../../../providers/auth-modal-provider";

export const RegisterForm = () => {
  const { login, init } = useAuthStore();
  const { closeModal } = useAuthModal();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
  });

  const {
    mutate,
    isPending,
    reset: resetMutation,
  } = useMutation({
    mutationFn: AuthService.register,
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
      toastSuccess("Register Successful");
    },
  });

  const handleRegister = (data: RegisterInput) => {
    mutate(data);
  };
  return (
    <form
      method="POST"
      className="flex flex-col gap-4"
      aria-label="Register Form"
      onSubmit={handleSubmit(handleRegister)}
    >
      <Input>
        <Input.Label>Name</Input.Label>
        <Input.Field placeholder="Your Name"  {...register("name")} />
        {errors.name && <Input.Error>{errors.name?.message}</Input.Error>}
      </Input>
      <Input>
        <Input.Label>Phone Number</Input.Label>
        <Input.Field placeholder="+33194249999" {...register("phone")} />
        {errors.phone && <Input.Error>{errors.phone?.message}</Input.Error>}
      </Input>
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
        <Input.RightSlot>
          <Input.PasswordToggle />
        </Input.RightSlot>
      </Input>
      <Button type="submit" loading={isPending}>
        Create account
      </Button>
    </form>
  );
};
