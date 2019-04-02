import axios from "axios";

const apiPort = 3001;

export const http = axios.create({
  baseURL: `http://${window.location.hostname}:${apiPort}`
});
