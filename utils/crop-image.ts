import { Area } from "react-easy-crop";

export default function getCroppedImg(
  file: File,
  crop: Area
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = URL.createObjectURL(file);

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) return reject("Canvas context is null");

      canvas.width = crop.width;
      canvas.height = crop.height;

      ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
      );

      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject("Failed to crop image");
      }, "image/jpeg", 0.95);
    };

    image.onerror = reject;
  });
}
