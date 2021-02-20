import axios from "axios";

const api = axios.create({
  baseURL: "https://app-products-emerson.herokuapp.com",
});

export default api;