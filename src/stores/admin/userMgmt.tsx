import { create } from "zustand";

type UserManagementStore = {
  openUserActionDialog: boolean;
  toggleUserActionDialog: () => void;
};

export const useUserManagementStore = create<UserManagementStore>()((set) => ({
  openUserActionDialog: false,
  toggleUserActionDialog: () =>
    set((state) => ({
      openUserActionDialog: !state.openUserActionDialog,
    })),
}));
