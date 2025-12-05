"use client";
import { Modal } from "../ui/modal";
import { Text } from "../ui/typography";
import { LoginForm } from "./form/login";
import { Button } from "../ui/button";
import { RegisterForm } from "./form/register";
import { useAuthModal } from "../../providers/auth-modal-provider";

export const AuthModal = () => {
  const { isOpen, closeModal, authForm, setAuthForm } = useAuthModal();

  const authFormContent = {
    loginForm: {
      title: <Text.H3 className="text-[var(--color-blue)]">Login</Text.H3>,
      body: <LoginForm />,
      footer: (
        <>
          <Text.P size="xsmall" className="text-[var(--color-gray-300)]">
            New User?
          </Text.P>
          <Button
            variant="icon"
            className="text-[var(--color-gray-100)] text-sm"
            onClick={() => setAuthForm("registerForm")}
          >
            Sign up
          </Button>
        </>
      ),
    },
    registerForm: {
      title: (
        <>
          <Text.H3 className="text-[var(--color-blue)]">Register</Text.H3>
          <span className="flex items-center gap-2">
            <Text.P size="xsmall" className="text-[var(--color-gray-300)]">
              Have account?
            </Text.P>
            <Button
              variant="icon"
              className="text-[var(--color-gray-100)] text-sm"
              onClick={() => setAuthForm("loginForm")}
            >
              Login
            </Button>
          </span>
        </>
      ),
      body: <RegisterForm />,
      footer: (
        <Text.P size="xsmall" className="text-[var(--color-gray-300)]">
          By clicking, you agree to the Privacy Policy and Terms of Use
        </Text.P>
      ),
    },
  };
  return (
    <Modal open={isOpen} onOpenChange={closeModal}>
      <Modal.Content className="flex flex-col gap-6 max-w-[403px]">
        <Modal.Header className="flex flex-col gap-2">
          {authFormContent[authForm].title}
        </Modal.Header>
        <Modal.Body>{authFormContent[authForm].body}</Modal.Body>
        <Modal.Footer className="justify-start gap-2">
          {authFormContent[authForm].footer}
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
