import axios from "axios";

export const http = axios.create({
  baseURL: `http://${window.location.hostname}:${process.env.REACT_APP_SERVER_PORT}`,
});