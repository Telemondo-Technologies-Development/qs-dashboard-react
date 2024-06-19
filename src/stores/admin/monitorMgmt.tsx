import { create } from "zustand";

type TempStore = {
  showAddCategoryDialog: boolean;
  toggleShowAddCategoryDialog: () => void;
};

export const useMonitorManagementStore = create<TempStore>()((set) => ({
  showAddCategoryDialog: false,
  toggleShowAddCategoryDialog: () =>
    set((state) => ({ showAddCategoryDialog: !state.showAddCategoryDialog })),
}));