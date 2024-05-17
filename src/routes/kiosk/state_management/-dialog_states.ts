import { create } from "zustand";
import { Counter, Ticket, DialogVariant } from "@/utils/types/kiosk_types";
import { ticketTypes } from "@/utils/variables/kiosk_variables";

type DialogStore = {
  isOpen: boolean;
  toggleShowDialog: () => void;
  variant: DialogVariant;
  setVariant: (selectedVariant: DialogVariant) => void;
  resetVariant: () => void;
  selectedCounter: Counter | undefined;
  setSelectedCounter: (selectedCounter : Counter) => void;
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
  setSelectedCounter: (selectedCounter) =>
    set({selectedCounter: selectedCounter}),
  selectedTicket: undefined,
  setSelectedTicket: (selectedTicketID) =>
    set({
      selectedTicket: ticketTypes.find((ticket) => {
        if (ticket.ticketID === selectedTicketID) return ticket;
      }),
    }),
}));
