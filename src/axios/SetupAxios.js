import axios from "axios";

export const BASE_URL =
  "https://edamam-food-and-grocery-database.p.rapidapi.com/parser";

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host":
      "http://edamam-food-and-grocery-database.p.rapidapi.com/",
    "x-rapidapi-key": "ea08be3fc6msh420291768b58982p13f2c5jsn6915183d2a2e",
  },
  withCredentials: true,
});
