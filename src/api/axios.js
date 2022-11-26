import axios from "axios";
// aktifkan saat fase deploy
// const BASE_URL = "https://emonet-backend2.azurewebsites.net";

//aktifkan saat fase develop
const BASE_URL = "http://localhost:8080";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
