import axios from "axios";

const BASE_URL = "/api/core/auth";

type LoginCredentials = {
  username: string;
  password: string;
};

export const login = async (credentials: LoginCredentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    console.log(response);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response;
    }
    throw new Error("An unexpected error occurred. Please try again.");
  }
};

