import { User, GetMultipleWithPagination } from "./reusables";
import { CounterType } from "./counterType";

//type for get all counters
export type Counters = GetMultipleWithPagination & {
  content: Counter[];
};

//type for create counter, update counter, and get counter by id
export type Counter = {
  id: string;
  counterType: CounterType;
  currentUser: User;
  name: string;
  status: number;
  createdBy: User;
  createdAt: Date;
  updatedAt: Date;
};
