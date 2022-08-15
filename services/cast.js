import { instance } from "../request/axios";

export const getCastDetails = async (id) => {
  const res = await instance.get(
    `/person/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return res.data;
};

export const getCastMovies = async (id) => {
  const res = await instance.get(
    `/person/${id}/movie_credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return res.data;
};
