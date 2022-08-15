import { useEffect, useState } from "react";
import { instance } from "../request/axios";

const useFetchData = (fetchUrl, page, query) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let subscribed = true;

    if (subscribed) {
      instance
        .get(
          `${fetchUrl}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}${
            query ? `&query=${query}` : ""
          }`
        )
        .then((res) => res.data)
        .then((res) => {
          setData(res);
          setLoading(false);
        });
    }
    return () => {
      subscribed = false;
    };
  }, [page, query, fetchUrl]);

  return { data, loading };
};

export default useFetchData;
