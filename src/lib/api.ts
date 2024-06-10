import axios from "axios";

const api = axios.create({
  baseURL: process.env.AUTH_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",

  transformRequest: [
    (data, headers) => {
      // transformar la solicitud
      return data;
    },
  ],
  transformResponse: [
    (data) => {
      // transformar la respuesta
      return data;
    },
  ],
});

export default api;
