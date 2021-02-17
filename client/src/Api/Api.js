import axios from "axios";

const api = axios.create({
  baseURL: "https://app-delivery-products.herokuapp.com",
});

export default api;