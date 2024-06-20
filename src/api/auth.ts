import axios from "axios";
import {
  QueryClient,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { LoginData } from "@/utils/types/auth_types";

const BASE_URL = "/api/core/auth";

type LoginCredentials = {
  username: string;
  password: string;
};

export const login = async (credentials: LoginCredentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response;
    }
    throw new Error("An unexpected error occurred. Please try again.");
  }
};

export function useLoginMutation(queryClient: QueryClient) {
  return useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      console.log(response.data.data);
      queryClient.setQueryData<LoginData>(["userData"], response.data.data);
    },
  });
}

export function useCachedUserData() {
  return useQuery<LoginData, Error>({
    queryKey: ["userData"],
    enabled: false,
    // staleTime: Infinity,
    // refetchOnWindowFocus: false,
    // refetchOnMount: false,
    // retry: false,
  });
}
