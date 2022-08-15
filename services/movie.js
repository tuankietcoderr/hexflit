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

export const getMovieVideos = async (id) => {
  const res = await instance.get(
    `/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return res.data;
};

export const getCollectionDetails = async (id) => {
  const res = await instance.get(
    `/collection/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return res.data;
};

export const getLatestMovie = async () => {
  const res = await instance.get(
    `/movie/latest?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return res.data;
};

export const getGenres = async () => {
  const res = await instance.get(
    `/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return res.data;
};

export const getCredits = async (id) => {
  const res = await instance.get(
    `/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return res.data;
};

export const searchMovie = async (query) => {
  const res = await instance.get(
    `/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`
  );
  return res.data;
};

export const getReviews = async (id) => {
  const res = await instance.get(
    `/movie/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=${page}`
  );
  return res.data;
};

export const getKeywords = async (id) => {
  const res = await instance.get(
    `/movie/${id}/keywords?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return res.data;
};
