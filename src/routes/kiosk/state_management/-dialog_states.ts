import { create } from "zustand";
import { Counter, Ticket } from "@/utils/types/kiosk_types";
import { counterTypes, ticketTypes } from "@/utils/variables/kiosk_variables";

type DialogVariant = "confirmation" | "success" | "error";

type DialogStore = {
  isOpen: boolean;
  toggleShowDialog: () => void;
  variant: DialogVariant;
  setVariant: (selectedVariant: DialogVariant) => void;
  resetVariant: () => void;
  selectedCounter: Counter | undefined;
  setSelectedCounter: (selectedCounterID: number) => void;
  selectedTicket: Ticket | undefined;
  setSelectedTicket: (selectedTicketID: number) => void;
};

export const useDialogStore = create<DialogStore>()((set) => ({
  isOpen: false,
  toggleShowDialog: () => set((state) => ({ isOpen: !state.isOpen })),
  variant: "confirmation",
  setVariant: (selectedVariant) => set({ variant: selectedVariant }),
  resetVariant: () => set({ variant: "confirmation" }),
  selectedCounter: undefined,
  setSelectedCounter: (selectedCounterID) =>
    set({
      selectedCounter: counterTypes.find((counter) => {
        if (counter.counterID === selectedCounterID) return counter;
      }),
    }),
  resetSelectedCounter: () => set({ selectedCounter: undefined }),
  selectedTicket: undefined,
  setSelectedTicket: (selectedTicketID) =>
    set({
      selectedTicket: ticketTypes.find((ticket) => {
        if (ticket.ticketID === selectedTicketID) return ticket;
      }),
    }),
  resetSelectedTicket: () => set({ selectedTicket: undefined }),
}));
