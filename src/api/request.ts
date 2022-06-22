import { AxiosResponse } from "axios";
import axios from "axios";

export type APICall<T> = Promise<AxiosResponse<T>>;

const axiosInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export default axiosInstance;
