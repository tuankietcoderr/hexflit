import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const imageLibrary = (link) =>
  "https://image.tmdb.org/t/p/original" + link;
