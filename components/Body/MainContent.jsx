import React from "react";
import Slider from "react-slick";
import { imageLibrary } from "../../request/axios";
import Image from "next/image";
import Link from "next/link";

const MainContent = ({ movies }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
    lazyLoad: true,
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="relative">
            <div className="absolute top-[20%] left-[10%] right-[10%] z-[20] text-white sm:top-[50%]">
              <h1 className="text-xl font-extrabold leading-tight sm:text-[3rem]">
                {movie.title}
              </h1>
              <p className="mt-4 text-ellipsis leading-6 opacity-70 line-clamp-1 sm:line-clamp-3 md:w-[50%]">
                {movie.overview}
              </p>
              <Link href={`/movie/${movie.id}#trailer`} passHref>
                <a>
                  <button className="mt-6 rounded-sm bg-red-700 py-1 px-2 text-sm font-semibold transition-all sm:py-2 sm:px-6 sm:text-lg lg:hover:scale-105">
                    TRAILER
                  </button>
                </a>
              </Link>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 rounded-md bg-gradient-to-t from-slate-800" />
            <Image
              src={imageLibrary(movie.backdrop_path)}
              alt={movie.title}
              width={1920}
              height={1080}
              priority
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainContent;
