import { instance } from "../request/axios";

export const getMovies = async (page = 1) => {
  const res = await instance.get(
    `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&${page}`
  );
  return res.data;
};

export const getTrendingMoviesByDay = async (page = 1) => {
  const res = await instance.get(
    `/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}&${page}`
  );
  return res.data;
};

export const getTrendingMoviesByWeek = async (page = 1) => {
  const res = await instance.get(
    `/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&${page}`
  );
  return res.data;
};

export const getMovieDetails = async (id) => {
  const res = await instance.get(
    `/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return res.data;
};
