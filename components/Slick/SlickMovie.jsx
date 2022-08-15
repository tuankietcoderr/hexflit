import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { imageLibrary } from "../../request/axios";

const SlickMovie = ({ type, collection, data }) => {
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
      <Slider {...settings}>
        {data.map((movie) => (
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
                width={1080}
                height={1620}
                className="sm:!mr-2 transition-all sm:hover:scale-105"
                placeholder="blur"
                blurDataURL={
                  movie.poster_path
                    ? imageLibrary(movie.poster_path)
                    : "/netflix.jpg"
                }
              />
            </a>
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default SlickMovie;
