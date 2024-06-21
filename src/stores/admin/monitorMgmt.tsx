import { create } from "zustand";

type TempStore = {
  showAddCounterSheet: boolean;
  toggleShowAddCounterSheet: () => void;
};

export const useMonitorManagementStore = create<TempStore>()((set) => ({
  showAddCounterSheet: false,
  toggleShowAddCounterSheet: () =>
    set((state) => ({ showAddCounterSheet: !state.showAddCounterSheet })),
}));