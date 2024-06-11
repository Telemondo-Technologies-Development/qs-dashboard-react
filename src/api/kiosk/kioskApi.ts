import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

type Category = {
  id: string;
  status: number;
  counterName: string;
  prefix: string;
  createdAt: string;
  updatedAt: string;
};

export function useFetchSpecificCategory(
  id: string
): UseQueryResult<Category, Error> {
  const query = useQuery({
    staleTime: Infinity,
    queryKey: ["specificCategory"],
    queryFn: async () => {
      const { data } = await axios.get(
        `/api/counterType/${id}`
      );
      return data;
    },
  });
  return query;
}
