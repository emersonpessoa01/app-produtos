import axios from "axios";

const api = axios.create({
  baseURL: "https://app-produtos-delivery.herokuapp.com",
});

export default api;