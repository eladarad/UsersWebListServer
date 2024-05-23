import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
