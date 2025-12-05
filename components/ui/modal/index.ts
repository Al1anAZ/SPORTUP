import ModalRoot from "./modal-root";
import ModalTrigger from "./modal-trigger";
import ModalContent from "./modal-content";
import ModalHeader from "./modal-header";
import ModalBody from "./modal-body";
import ModalFooter from "./modal-footer";

export const Modal = Object.assign(ModalRoot, {
  Trigger: ModalTrigger,
  Content: ModalContent,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});

export default Modal;
