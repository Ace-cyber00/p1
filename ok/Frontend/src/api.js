import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api/todos", // same as your backend route
});