import { Counter } from "../types/kiosk_types";
import { Ticket } from "../types/kiosk_types";

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
  {
    counterID: 6,
    counterName: "Customer Service",
    counterImage: "/kiosk-images/customers-service.png",
  },
  {
    counterID: 7,
    counterName: "Customer Service",
    counterImage: "/kiosk-images/customers-service.png",
  },
  {
    counterID: 8,
    counterName: "Customer Service",
    counterImage: "/kiosk-images/customers-service.png",
  },
];

export const ticketTypes: Ticket[] = [
  {
    ticketID: 1,
    ticketName: "Regular",
  },
  {
    ticketID: 2,
    ticketName: "Senior-Citizen /\nPregnant / PWD",
  },
];
