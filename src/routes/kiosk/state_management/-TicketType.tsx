import { create } from "zustand";

type Ticket = {
    ticketID: number | undefined;
    ticketName: string | undefined;
  };

export const ticketTypes: Ticket[] = [
    {
      ticketID: 1,
      ticketName: "Regular",
    },
    {
      ticketID: 2,
      ticketName: "Senior-Citizen /\nPregnant / PWD",
    }
  ];

const initialState: Ticket = {
ticketID: undefined,
ticketName: undefined,
};


type SelectedTicketStore = {
selectedTicket: Ticket;
setSelectedTicket: (selectedTicketID: number | undefined) => void;
resetSelectedTicket: () => void;
};


export const useSelectedTicketStore = create<SelectedTicketStore>()(
    (set) => ({
      selectedTicket: initialState,
      setSelectedTicket: (selectedTicketID) => {
        set({
          selectedTicket: {
            ticketID: selectedTicketID,
            ticketName: ticketTypes[selectedTicketID! - 1].ticketName,
          },
        });
      },
      resetSelectedTicket: () => {
        set({ selectedTicket: initialState });
      },
    })
  );