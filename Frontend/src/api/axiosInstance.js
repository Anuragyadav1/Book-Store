import axios from "axios";

const instance = axios.create({
  // baseURL: "https://book-store-application-tzan.onrender.com",
  // baseURL: "http://localhost:4001",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});
 
export default instance;