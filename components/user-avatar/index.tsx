"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useRef, useEffect } from "react";
import { useAuthStore } from "../../store/auth.store";
import { cn } from "../../utils/cn";
import { ROUT } from "../../constants";
import Cropper, { Area } from "react-easy-crop";
import getCroppedImg from "../../utils/crop-image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Modal from "../ui/modal";
import { Text } from "../ui/typography";
import { useMutation } from "@tanstack/react-query";
import { UserService } from "../../services/user";
import { toastError, toastSuccess } from "../../lib/toast";
import { AxiosError } from "axios";
import { ApiError } from "../../types/api-response";

type UserAvatarProps = {
  size?: "small" | "large";
  className?: string;
  link?: string;
  editable?: boolean;
};

export const UserAvatar = ({
  size = "small",
  link = ROUT.PROFILE,
  className,
  editable = false,
}: UserAvatarProps) => {
  const { user, updateUser } = useAuthStore((state) => state);
  const dimensions = size === "small" ? 24 : 258;
  const inputRef = useRef<HTMLInputElement>(null);

  const [isCropping, setIsCropping] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const previewUrl = selectedFile
  ? URL.createObjectURL(selectedFile)
  : undefined;

  const { mutate, isPending, reset } = useMutation({
    mutationFn: UserService.updateUserAvatar,
    onSuccess: (data) => {
      updateUser({ avatarUrl: data.avatarUrl });
      handleReset()
      toastSuccess("Your avatar updated successful");
    },
    onError: (errors: AxiosError<ApiError>) => {
      toastError(errors.response?.data?.message);
      reset();
    },
  });

  const onFileClick = () => {
    if (inputRef.current){
      inputRef.current.value = ""
      inputRef.current.click()
    };
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setIsCropping(true);
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setIsCropping(false);
    setCroppedAreaPixels(null)
  };

  const handleUpdateUserAvatar = (newAvatar: File) => {
    const formData = new FormData();
    formData.append("file", newAvatar);
    mutate(formData)
  };

  const handleCropComplete = useCallback(async () => {
    if (!selectedFile) return;

    if (!croppedAreaPixels) return;

    const croppedBlob = await getCroppedImg(
      selectedFile,
      croppedAreaPixels
    );
    const croppedFile = new File([croppedBlob], selectedFile.name, {
      type: selectedFile.type,
    });
    handleUpdateUserAvatar(croppedFile)
  }, [selectedFile, crop, zoom]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);
  
  return (
    <div className="flex flex-col gap-6 w-fit items-center">
      <Link
        href={link}
        className={cn("shrink-0", editable && "pointer-events-none", className)}
      >
        <Image
          src={user?.avatarUrl || "/default-avatar.webp"}
          alt="User Avatar"
          width={dimensions}
          height={dimensions}
          className="rounded-full object-cover"
        />
      </Link>

      {editable && (
        <Input>
          <Input.Label>
            <Button onClick={onFileClick}>
              Upload File
            </Button>
          </Input.Label>
          <Input.Field
            type="file"
            accept="image/*"
            className="hidden"
            ref={inputRef}
            onChange={onFileChange}
          />
        </Input>
      )}

      <Modal
        open={Boolean(isCropping && selectedFile)}
        onOpenChange={handleReset}
      >
        <Modal.Content className="flex flex-col gap-3">
          <Modal.Header>
            <Text.H3>Adjust avatar</Text.H3>
          </Modal.Header>
          <Modal.Body>
            <div className="relative w-full h-[300px] border border-[var(--color-orange-light)] overflow-hidden">
              <Cropper
                image={previewUrl}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={(_, croppedPixels) => setCroppedAreaPixels(croppedPixels)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer className="justify-start gap-6">
            <Button onClick={handleReset} variant="outline">
              Cancel
            </Button>
            <Button
              onClick={handleCropComplete}
              className="w-full"
              loading={isPending}
            >
              Crop & Upload
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </div>
  );
};
