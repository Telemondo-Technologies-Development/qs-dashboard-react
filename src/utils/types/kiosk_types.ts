export type Counter = {
  counterID: number;
  counterName: string;
  counterImage?: string;
};

export type DialogVariant = "confirmation" | "success" | "error";

export type Ticket = {
  ticketID: number;
  ticketName: string;
};
