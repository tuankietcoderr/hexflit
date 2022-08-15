import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import useFetchData from "../../hooks/useFetchData";
import { imageLibrary } from "../../request/axios";
import Loading from "../Layout/Loading";
import PageNavigate from "../Layout/PageNavigate";
import { responsive } from "../../lib/responsive";

const SliderMovie = ({ fetchUrl, type, query, collection }) => {
  const [page, setPage] = useState(1);
  const { data, loading } = useFetchData(fetchUrl, page, query);
  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    lazyLoad: true,
    infinite: false,
    responsive,
  };
  if (data && data.results.length === 0) {
    return (
      <>
        <h2 className="my-6 text-lg font-extrabold text-white sm:text-[2rem]">
          {type}
        </h2>
        <div className="flex justify-center">
          <p className="text-center text-white text-2xl">No movie found</p>
        </div>
      </>
    );
  }
  return (
    <>
      <h2 className="my-6 text-lg font-extrabold text-white sm:text-[2rem]">
        {type}
      </h2>
      {!loading ? (
        <>
          <Slider {...settings}>
            {data.results.map((movie) => (
              <Link
                href={`/${collection ? "collection" : "movie"}/${movie.id}`}
                key={movie.id}
                passHref
              >
                <a>
                  <Image
                    src={
                      movie.poster_path
                        ? imageLibrary(movie.poster_path)
                        : "/netflix.jpg"
                    }
                    alt={movie.title}
                    width={360}
                    height={540}
                    className="sm:!mr-2 transition-all sm:hover:scale-105"
                    placeholder="blur"
                    blurDataURL={
                      movie.poster_path
                        ? imageLibrary(movie.poster_path)
                        : "/netflix.jpg"
                    }
                    title={movie.title}
                    loading="lazy"
                  />
                </a>
              </Link>
            ))}
          </Slider>
          <PageNavigate
            page={page}
            setPage={setPage}
            total_pages={data.total_pages}
          />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default SliderMovie;
