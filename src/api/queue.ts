import axios from "axios";

const BASE_URL = "/api/domain/queue";

interface QueueRequest {
  counterTypeId: string;
  type: number;
}

export const sendQueueRequest = async (request: QueueRequest) => {
  try {
    const response = await axios.post(BASE_URL, request);
    return response;
  } catch (error) {
    console.error("Error sending queue request:", error);
    throw error;
  }
};
