import { useState, useEffect } from "react";
import Slider from "react-slick";
import useFetchData from "../../hooks/useFetchData";
import Link from "next/link";
import { imageLibrary } from "../../request/axios";
import Image from "next/image";
import { CaretLeft, CaretRight } from "react-bootstrap-icons";
import Loading from "../Layout/Loading";

const SliderActor = ({ fetchUrl, type }) => {
  const [page, setPage] = useState(1);
  const { data, loading } = useFetchData(fetchUrl, page);
  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    lazyLoad: true,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
        },
      },
    ],
  };
  return (
    <>
      <h2 className="my-6 text-lg font-extrabold text-white sm:text-[2rem]">
        {type}
      </h2>
      {!loading ? (
        <>
          <Slider {...settings}>
            {data.results.map((cast) => (
              <Link href={`/cast/${cast.id}`} key={cast.id} passHref>
                <a>
                  <Image
                    src={imageLibrary(cast.profile_path)}
                    alt={cast.name}
                    width={1080}
                    height={1620}
                    className="sm:!mr-2"
                    placeholder="blur"
                    blurDataURL={imageLibrary(cast.profile_path)}
                    loading="lazy"
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
                className="rounded-sm bg-slate-700 p-2"
              >
                <CaretLeft size={20} />
              </button>
              <button
                onClick={() => setPage((prev) => prev + 1)}
                className="rounded-sm bg-slate-700 p-2"
              >
                <CaretRight size={20} />
              </button>
            </div>
            <div />
          </div>{" "}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default SliderActor;