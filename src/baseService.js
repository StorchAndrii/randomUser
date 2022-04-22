import axios from "axios";

const baseService = axios.create({
  baseURL: "https://randomuser.me",
});

export default baseService;
