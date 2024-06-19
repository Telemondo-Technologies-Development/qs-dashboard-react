import { create } from "zustand";
import { Counter } from "@/utils/types/kiosk_types";

const initialCategories: Counter[] = [
  {
    counterID: 1,
    counterName: "Accounts",
    // counterImage: "/kiosk-images/accounts.png",
  },
  {
    counterID: 2,
    counterName: "Deposits and Withdrawals",
    counterImage: "/kiosk-images/deposits-and-withdrawal.png",
  },
];

type KioskManagementStore = {
  isEdit: boolean;
  toggleEdit: () => void;
  categories: Counter[];
  setCategories: (newCategories: Counter[]) => void;
  editCategories: Counter[];
  addEditCategory: () => void;
  removeEditCategory: (editCategoryToBeRemoved: Counter) => void;
  resetEditCategories: () => void;
  // setEditCategory: (newCategory: Counter) => void;
};

export const useKioskManagementStore = create<KioskManagementStore>()(
  (set) => ({
    isEdit: false,
    toggleEdit: () => set((state) => ({ isEdit: !state.isEdit })),
    categories: initialCategories,
    setCategories: (newCategories) =>
      set({
        categories: newCategories,
      }),
    editCategories: initialCategories,
    addEditCategory: () =>
      set((state) => ({
        editCategories: [
          ...state.editCategories,
          {
            counterID: state.editCategories.length + 1,
            counterName: undefined,
            counterImage: undefined,
          },
        ],
      })),
    removeEditCategory: (editCategoryToBeRemoved) =>
      set((state) => ({
        editCategories: state.editCategories.filter(
          (editCategory) =>
            editCategory.counterID !== editCategoryToBeRemoved.counterID
        ),
      })),
    resetEditCategories: () => set({ editCategories: initialCategories }),

    // setEditCategory: (newCategory) =>
    //   set((state) => ({
    //     editCategories: state.editCategories.find(
    //       (editCategory) => editCategory.counterID === newCategory.counterID
    //     )
    //       ? state.editCategories.map((editCategory) => {
    //           if (editCategory.counterID === newCategory.counterID) {
    //             return newCategory;
    //           } else {
    //             return editCategory;
    //           }
    //         })
    //       : [...state.editCategories, newCategory],
    //   })),
  })
);