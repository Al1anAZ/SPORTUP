import { ToastContainer } from "react-toastify";

export const ToastProvider = () => {
  return (
    <ToastContainer
      style={{
        fontSize: "14px",
        borderRadius: "6px",
      }}
      toastStyle={{
        background: "#111",
        color: "#fff",
        border: "1px solid #222",
      }}
      icon={false}
    />
  );
};
