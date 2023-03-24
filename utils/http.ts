import axios from "axios";

const getApiEndpoint = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://morent-website.vercel.app";
  }
  return "http://localhost:7000";
};

export const http = axios.create({
  baseURL: getApiEndpoint(),
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
