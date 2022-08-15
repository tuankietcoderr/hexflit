import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { imageLibrary } from "../../request/axios";
import { responsive } from "../../lib/responsive";

const SlickMovie = ({ type, collection, data }) => {
  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
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
                width={360}
                height={540}
                className="sm:!mr-2 transition-all sm:hover:scale-105"
                placeholder="blur"
                blurDataURL={
                  movie.poster_path
                    ? imageLibrary(movie.poster_path)
                    : "/netflix.jpg"
                }
                loading="lazy"
              />
            </a>
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default SlickMovie;
