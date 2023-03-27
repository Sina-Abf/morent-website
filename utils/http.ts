import axios from "axios";

export const http = axios.create({
  baseURL: "/api",
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
