import { create } from "zustand";

type Counter = {
  counterID: number | undefined;
  counterName: string | undefined;
  counterImage?: string;
};

export const counterTypes: Counter[] = [
  {
    counterID: 1,
    counterName: "Accounts",
    counterImage: "/kiosk-images/accounts.png",
  },
  {
    counterID: 2,
    counterName: "Deposits and Withdrawals",
    counterImage: "/kiosk-images/deposits-and-withdrawal.png",
  },
  {
    counterID: 3,
    counterName: "Loans and Mortgages",
    counterImage: "/kiosk-images/loans-and-mortgages.png",
  },
  {
    counterID: 4,
    counterName: "Payments and Transfer",
    counterImage: "/kiosk-images/payments-and-transfers.png",
  },
  {
    counterID: 5,
    counterName: "Customer Service",
    counterImage: "/kiosk-images/customers-service.png",
  },
];

type SelectedCounterStore = {
  selectedCounter: Counter;
  setSelectedCounter: (selectedCounterID: number | undefined) => void;
  resetSelectedCounter: () => void;
};

const initialState: Counter = {
  counterID: undefined,
  counterName: undefined,
};

export const useSelectedCounterStore = create<SelectedCounterStore>()(
  (set) => ({
    selectedCounter: initialState,
    setSelectedCounter: (selectedCounterID) => {
      set({
        selectedCounter: {
          counterID: selectedCounterID,
          counterName: counterTypes[selectedCounterID! - 1].counterName,
        },
      });
    },
    resetSelectedCounter: () => {
      set({ selectedCounter: initialState });
    },
  })
);
