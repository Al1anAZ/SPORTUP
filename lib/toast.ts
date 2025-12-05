import { toast, Slide, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseOptions: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",        
  transition: Slide,
};

export const toastSuccess = (message: string) => {
  toast.success(message, baseOptions);
};

export const toastError = (message?: string) => {
  toast.error(message ?? "Unexpected Error", baseOptions);
};
