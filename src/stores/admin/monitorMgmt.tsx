import { create } from "zustand";

type TempStore = {
  showAddCategoryDialog: boolean;
  toggleShowAddCategoryDialog: () => void;
};

export const useTempStore = create<TempStore>()((set) => ({
  showAddCategoryDialog: false,
  toggleShowAddCategoryDialog: () =>
    set((state) => ({ showAddCategoryDialog: !state.showAddCategoryDialog })),
}));
