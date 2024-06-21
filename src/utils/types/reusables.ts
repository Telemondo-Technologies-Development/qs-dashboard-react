export type Pageable = {
  offset: number;
  sort: Sort[];
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
};

export type Sort = {
  direction: string;
  nullHandling: string;
  ascending: boolean;
  property: string;
  ignoreCase: boolean;
};

export type User = {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  timezone: number | null;
  status: number;
  timezoneId: string | null;
  language: string | null;
}

export type GetMultipleWithPagination = {
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort[];
  numberOfElements: number;
  pageable: Pageable;
  first: boolean;
  last: boolean;
  empty: boolean;
};

export type AreaCode = {
  id: string;
  code: string;
  status: number;
};

export type Authority = {
  authority: string;
};
