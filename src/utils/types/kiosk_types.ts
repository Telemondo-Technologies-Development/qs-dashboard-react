export type Counter = {
  counterID: number | undefined;
  counterName: string | undefined;
  counterImage?: string | undefined;
};

export type DialogVariant = "confirmation" | "success" | "error";

export type Ticket = {
  ticketID: number;
  ticketName: string;
};
