import axios from "axios";

export const http = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_REACT_APP_API_ENDPOINT || "http://localhost:7000",
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
