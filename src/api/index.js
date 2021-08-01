import axios from "axios";

const normalAxios = axios.create({
//   baseURL: "http://deploy-todo-app-database.herokuapp.com/api",
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor response
normalAxios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response.data;
  },
  function (error) {
    return error;
  }
);

export default normalAxios;
