import { create } from "zustand";

type DialogVariant = "confirmation" | "success" | "error";

type DialogStore = {
  isOpen: boolean;
  toggleShow: () => void;
  variant: DialogVariant;
  setVariant: (selectedVariant: DialogVariant) => void;
  resetVariant: () => void;
};

export const useDialogStore = create<DialogStore>()((set) => ({
  isOpen: false,
  toggleShow: () => set((state) => ({ isOpen: !state.isOpen })),
  variant: "confirmation",
  setVariant: (selectedVariant) => set({ variant: selectedVariant }),
  resetVariant: () => set({ variant: "confirmation" }),
}));
