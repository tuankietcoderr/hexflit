import { instance } from "../request/axios";

export const getTVs = async (page = 1) => {
  const res = await instance.get(
    `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&${page}`
  );
  return res.data;
};
