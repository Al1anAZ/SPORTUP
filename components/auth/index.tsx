"use client";
import { useAuthStore } from "../../store/auth.store";
import { Skeleton } from "../ui/skeleton";
import { useEffect } from "react";
import { UserAvatar } from "../user-avatar";
import { Button } from "../ui/button";
import { useAuthModal } from "../../providers/auth-modal-provider";
import { UserIcon } from "../icons";

export const UserAuthWidget = () => {
  const { authenticationStatus, init } = useAuthStore((state) => state);
  const { openModal } = useAuthModal();

  useEffect(() => {
    init();
  }, []);

  switch (authenticationStatus) {
    case "auth":
      return <UserAvatar />;
    case "guest":
      return (
        <Button variant="icon" onClick={() => openModal("loginForm")}>
          <UserIcon width={24} height={24} />
        </Button>
      );
    case "hydrating":
      return <Skeleton variant="circle" className="w-6 h-6" />;
  }
};
