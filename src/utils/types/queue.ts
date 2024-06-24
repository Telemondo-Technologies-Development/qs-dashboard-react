import { Counter } from "./counter";
import { CounterType } from "./counterType";

export type Queue = {
  id: string;
  counterType: CounterType;
  counter: Counter;
  name: string;
  type: number;
  status: number;
  completedBy: CompletedBy;
  completedAt: string;
  createdAt: string;
  updatedAt: string;
};

export type CompletedBy = {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  timezone: number;
  status: number;
  timezoneId: string;
  language: string;
};
