import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3002/",
  headers: { "Content-Type": "multipart/form-data" }
});