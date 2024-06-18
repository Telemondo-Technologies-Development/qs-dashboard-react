import { create } from "zustand";

type AdminGlobalStore = {
  showPreviewDialog: boolean;
  togglePreviewDialog: () => void;
};

export const useAdminGlobalStore = create<AdminGlobalStore>()((set) => ({
  showPreviewDialog: false,
  togglePreviewDialog: () =>
    set((state) => ({ showPreviewDialog: !state.showPreviewDialog })),
}));
