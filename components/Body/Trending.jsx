import React from "react";
import Slider from "react-slick";
import { imageLibrary } from "../../request/axios";
import Image from "next/image";
import Link from "next/link";

const Trending = ({ movies }) => {
  console.log(movies);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="relative">
            <div className="absolute z-[20] text-white top-[50%] left-[10%] right-[10%]">
              <h1 className="sm:text-[3rem] text-xl font-extrabold leading-tight">
                {movie.title}
              </h1>
              <p className="sm:w-[50%] opacity-70 text-ellipsis leading-6 line-clamp-3 mt-4">
                {movie.overview}
              </p>
              <Link href={`/movie/${movie.id}#trailer`} passHref>
                <a>
                  <button className="mt-6 py-2 px-6 font-semibold bg-red-700 rounded-sm transition-all lg:hover:scale-105">
                    TRAILER
                  </button>
                </a>
              </Link>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-slate-800 z-10 rounded-md" />
            <Image
              src={imageLibrary(movie.backdrop_path)}
              alt={movie.title}
              width={1920}
              height={1080}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Trending;
