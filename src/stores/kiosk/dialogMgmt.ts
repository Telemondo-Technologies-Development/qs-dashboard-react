import { create } from "zustand";
import { Ticket, DialogVariant } from "@/utils/types/kiosk_types";
import { ticketTypes } from "@/utils/variables/kiosk_variables";
import { CounterType } from "@/utils/types/counterType";

type DialogStore = {
  isOpen: boolean;
  toggleShowDialog: () => void;
  variant: DialogVariant;
  setVariant: (selectedVariant: DialogVariant) => void;
  resetVariant: () => void;
  selectedCounter: CounterType | undefined;
  setSelectedCounter: (selectedCounter : CounterType) => void;
  selectedTicket: Ticket | undefined;
  setSelectedTicket: (selectedTicketID: number) => void;
  queueName: string | undefined;
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
  queueName: undefined,
}));
