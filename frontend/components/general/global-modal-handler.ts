import { create } from "zustand";

interface State {
  isOpen: boolean;
  message?: string;
  onConfirm?: (b: boolean) => void;
  onlyMessage?: boolean;
  openModal: (
    message: string,
    onlyMessage?: boolean,
    onConfirm?: (b: boolean) => void
  ) => void;
  closeModal: () => void;
}

export const useGlobalModalStore = create<State>((set) => ({
  isOpen: false,
  onlyMessage: false,
  openModal: (message, onlyMessage = false, onConfirm) =>
    set({ isOpen: true, message, onlyMessage, onConfirm }),
  closeModal: () =>
    set({
      isOpen: false,
      message: "",
      onlyMessage: false,
      onConfirm: undefined,
    }),
}));

export function customWindowConfirm(message: string, onlyMessage?: boolean) {
  return new Promise<boolean>((resolve) => {
    const { openModal, closeModal } = useGlobalModalStore.getState();

    const handleUserChoice = (choice: boolean) => {
      closeModal();
      resolve(choice);
    };

    openModal(message, onlyMessage, handleUserChoice);
  });
}

export function customAlert(message: string, onlyMessage?: boolean) {
  return new Promise<boolean>((resolve) => {
    const { openModal, closeModal } = useGlobalModalStore.getState();

    const handleUserChoice = (choice: boolean) => {
      closeModal();
      resolve(choice);
    };

    openModal(message, onlyMessage, handleUserChoice);
  });
}
