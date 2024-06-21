import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { UserData } from "@/utils/types/user";

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

export function useUserData() {
  return useQuery<UserData>({
    queryKey: ["userData"],
    queryFn: async () => {
      console.log("fetching from useUserData");
      const { data: userData } = await axios.get(`/api/core/user/profile`);
      return userData.data as UserData;
    },
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}
