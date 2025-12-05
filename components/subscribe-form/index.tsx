"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useModalContext } from "../ui/modal/modal-provider";
import Modal from "../ui/modal";
import { Text } from "../ui/typography";

export const SubscribeForm = () => {
  const { setOpen } = useModalContext();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(
      z.object({
        email: z.email("Enter a valid email"),
      })
    ),
  });

  const handleSubscribe = () => {
    setOpen(true);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSubscribe)}
        method="POST"
        className="flex items-start gap-5"
        aria-label="Subscribe for promotions, private sales and news"
      >
        <Input className="flex-1 max-w-80">
          <Input.Label>Email</Input.Label>
          <Input.Field placeholder="example@email.com" {...register("email")} />
          {errors.email && <Input.Error>{errors.email.message}</Input.Error>}
          <Input.Hint>
            By subscribing, you confirm that you have read the Privacy Policy
          </Input.Hint>
        </Input>
        <Button type="submit" className="shrink-0 w-full max-w-44 mt-8">
          Subscribe
        </Button>
      </form>
      <Modal.Content className="max-w-[465px] flex flex-col gap-6">
        <Modal.Header>
          <Text.H3 className="text-[var(--color-blue)]">
            Thanks for subscribing!
          </Text.H3>
        </Modal.Header>
        <Modal.Body>
          <Text.P size="small">
            Don&apos;t miss out on the chance to save more and shop smarter!
          </Text.P>
        </Modal.Body>
        <Modal.Footer className="gap-6">
          <Button
            type="button"
            variant="outline"
            aria-label="Close Subscription Modal"
            onClick={() => setOpen(false)}
          >
            Back
          </Button>
          <Button
            type="button"
            aria-label="Check Subscription Email"
            className="w-full"
          >
            Check Email
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </>
  );
};
