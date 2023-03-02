import axios, { AxiosResponse } from "axios";

const jsonplaceholderClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json",
  },
});

const commentsQuery = (onSuccess: (response: AxiosResponse) => void) => ({
  queryKey: ["login"],
  queryFn: async () => {
    return jsonplaceholderClient.get("comments");
  },
  staleTime: Infinity,
  cacheTime: Infinity,
  onSuccess,
});

export default commentsQuery;
