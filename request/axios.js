import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const imageLibrary = (link) => {
  if (link && link.includes("gravatar")) {
    return link.slice(1);
  }
  if (!link) {
    return "/netflix.jpg";
  }
  return "https://image.tmdb.org/t/p/original" + link;
};
