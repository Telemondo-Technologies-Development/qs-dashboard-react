import { CounterTypes } from "@/utils/types/counterType";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const BASE_URL = "/api/domain/counter/type";

export function useCounterTypes() {
    return useQuery<CounterTypes>({
      queryKey: ['counterTypes'],
      queryFn: async () => {
        console.log('fetching from useCounterTypes');
        const { data: counterTypes } = await axios.get(BASE_URL);
        return counterTypes.data as CounterTypes;
      },
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
    });
  }