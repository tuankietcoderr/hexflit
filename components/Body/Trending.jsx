import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CaretLeft, CaretRight } from "react-bootstrap-icons";
import Slider from "react-slick";
import useFetchData from "../../hooks/useFetchData";
import { responsive } from "../../lib/responsive";
import { imageLibrary } from "../../request/axios";

const Trending = ({ fetchUrl, type }) => {
  const [page, setPage] = useState(1);
  const { data, loading } = useFetchData(fetchUrl, page);
  if (loading) {
    return (
      <div className="grid h-[30vh] place-items-center text-white">
        Loading...
      </div>
    );
  }
  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    lazyLoad: true,
    arrows: true,
    infinite: false,
    responsive,
  };
  return (
    <>
      <h2 className="my-6 text-lg font-extrabold text-white sm:text-[2rem]">
        {type}
      </h2>
      <Slider {...settings}>
        {data.results.map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id} passHref>
            <a>
              <Image
                src={imageLibrary(movie.poster_path)}
                alt={movie.title}
                width={1080}
                height={1620}
                className="sm:!mr-2"
              />
            </a>
          </Link>
        ))}
      </Slider>
      <div className="flex flex-row-reverse">
        <div className="flex items-center gap-4 text-slate-200">
          <div>{`Page ${
            page > 0 && page <= data.total_pages ? page : setPage(1)
          } / ${data.total_pages}`}</div>

          <button
            onClick={() => setPage((prev) => prev - 1)}
            className="bg-slate-700 p-2"
          >
            <CaretLeft size={20} />
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="bg-slate-700 p-2"
          >
            <CaretRight size={20} />
          </button>
        </div>
        <div />
      </div>
    </>
  );
};

export default Trending;
